#!/usr/bin/env bash
# Claude Code 상태 표시줄 - 모델명, 디렉토리, 컨텍스트%, git 브랜치 (jq 사용)

input=$(cat)

# ANSI 색상
RESET='\033[0m'
CYAN='\033[36m'
GREEN='\033[32m'
YELLOW='\033[33m'
MAGENTA='\033[35m'
BLUE='\033[34m'
RED='\033[31m'

# jq로 데이터 추출
model=$(echo "$input" | jq -r '.model.display_name // "claude"')
cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // ""')
used_pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

# 디렉토리 축약 (홈 디렉토리를 ~로, Windows 경로 대응)
home_unix=$(echo "$HOME" | sed 's|\\|/|g')
cwd_unix=$(echo "$cwd" | sed 's|\\|/|g')
short_dir="${cwd_unix/#$home_unix/~}"
if [[ -z "$short_dir" || "$short_dir" == "$cwd_unix" ]]; then
  short_dir=$(basename "$cwd_unix")
fi

# Git 브랜치
git_branch=""
if git -C "$cwd" rev-parse --git-dir > /dev/null 2>&1; then
  branch=$(git -C "$cwd" symbolic-ref --short HEAD 2>/dev/null \
           || git -C "$cwd" rev-parse --short HEAD 2>/dev/null)
  [[ -n "$branch" ]] && git_branch=" ${MAGENTA}${branch}${RESET}"
fi

# 컨텍스트 % 색상 결정
ctx_display=""
if [[ -n "$used_pct" ]]; then
  pct_int=$(printf '%.0f' "$used_pct" 2>/dev/null || echo "0")
  if [[ "$pct_int" -ge 80 ]]; then
    ctx_color="$RED"
  elif [[ "$pct_int" -ge 50 ]]; then
    ctx_color="$YELLOW"
  else
    ctx_color="$GREEN"
  fi
  ctx_display=" ${ctx_color}ctx:${pct_int}%${RESET}"
fi

printf "${CYAN}${model}${RESET} ${BLUE}${short_dir}${RESET}${git_branch}${ctx_display}"
