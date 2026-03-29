# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

### 기본 설정
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성 (README.md, ROADMAP.md 등)
- **변수명/함수명**: 영어 (코드 표준 준수)
- **클래스명/ID명**: 영어 (웹 표준)

### 예시
```javascript
// ✅ 좋은 예시
function getUserProfile(userId) {
  // 사용자 프로필을 조회합니다
  return fetchUser(userId);
}

// ❌ 피해야 할 예시
function 사용자프로필조회(userId) {
  // 사용자 정보를 가져옵니다
  return fetchUser(userId);
}
```

---

## 프로젝트 개요

**개발자 웹 이력서** - Vanilla HTML, CSS, JavaScript, Tailwind CSS를 활용한 반응형 단일 페이지 웹 이력서. 개발자의 기술, 경력, 학력, 프로젝트를 현대적이고 인터랙티브한 형식으로 제시합니다.

**개발 단계**: 초기화 단계 (자세한 단계는 ROADMAP.md 참고)

---

## 기술 스택

- **마크업**: HTML5 (시맨틱 구조)
- **스타일링**: Tailwind CSS (유틸리티 우선 CSS 프레임워크, CDN 또는 npm)
- **스크립팅**: Vanilla JavaScript (ES6+, 프레임워크 없음)
- **배포**: GitHub Pages, Vercel, 또는 Netlify (계획)

**참고**: 초기 단계에서는 빌드 시스템, 백엔드, 패키지 의존성이 없는 정적 사이트 프로젝트입니다.

---

## 프로젝트 구조

```
/
├── index.html          # 메인 이력서 페이지
├── style.css          # 커스텀 CSS (필요시)
├── script.js          # 인터랙션을 위한 JavaScript
├── assets/            # 이미지 및 미디어 파일
│   ├── profile-photo  # 프로필 사진
│   └── [기타 자산]
├── ROADMAP.md         # 6개 단계의 개발 로드맵
└── CLAUDE.md          # 이 파일
```

**계획된 HTML 섹션** (ROADMAP Phase 2 참고):
- 헤더/프로필 (이름, 직책, 연락처)
- 자기소개
- 경력
- 학력
- 기술/스택
- 프로젝트
- 연락처 링크

---

## 개발 워크플로우

### 설정
```bash
# 초기 단계에서는 특별한 설정이 필요하지 않음
# index.html을 브라우저에서 직접 열거나 간단한 HTTP 서버 사용

# 선택사항: Python 내장 서버로 로컬 테스트
python -m http.server 8000
# http://localhost:8000 방문
```

### 개발 프로세스
1. **HTML 우선**: 모든 이력서 섹션을 위한 시맨틱 구조 구성 (ROADMAP Phase 2)
2. **Tailwind로 스타일링**: 모바일 우선 반응형 디자인 (ROADMAP Phase 3)
3. **JavaScript 인터랙션**: 부드러운 스크롤, 네비게이션, 애니메이션 추가 (ROADMAP Phase 4)
4. **최적화**: 자산 최소화 및 브라우저 호환성 테스트 (ROADMAP Phase 5)

### 테스트
- 여러 브라우저에서 `index.html` 열기 (Chrome, Firefox, Safari, Edge)
- 반응형 동작 테스트: 375px (모바일), 768px (태블릿), 1024px+ (데스크톱)
- W3C 검증기로 HTML 검증
- 키보드 네비게이션 및 접근성 테스트 (ARIA 레이블, 시맨틱 HTML)

---

## 핵심 아키텍처 결정

### Tailwind CSS 전략
- **CDN 방식**: 단순성을 위해 Tailwind CSS CDN 사용 (Phase 1.2)
- **커스텀 CSS**: `style.css`는 최소한으로 유지; HTML에서 Tailwind 유틸리티 선호
- **반응형 디자인**: Tailwind 브레이크포인트 (sm, md, lg) 사용 - 모바일 우선
- **커스텀 테마**: 필요시 Tailwind 설정 확장 (유틸리티로는 드문 일)

### JavaScript 접근 방식
- **Vanilla JS만 사용**: React, Vue 등의 프레임워크 미사용
- **핵심 기능**:
  - 부드러운 스크롤 네비게이션 (앵커 링크)
  - 모바일 메뉴 토글 (햄버거 메뉴)
  - 스크롤 시 활성 섹션 하이라이팅
  - 선택사항: 다크 모드 토글, PDF 다운로드, 스크롤 애니메이션

### 빌드 시스템 없음 (초기 단계)
- 파일이 브라우저에서 직접 로드됨; webpack, npm, 빌드 프로세스 불필요
- 나중에 Tailwind CSS npm 설정 추가 시 Tailwind CLI 사용

---

## 일반적인 개발 작업

### 새로운 이력서 섹션 추가
1. `index.html`에 시맨틱 태그(`<section id="section-name">`)로 HTML 마크업 추가
2. Tailwind 유틸리티 클래스로 구조화 (containers, grids, spacing)
3. 네비게이션 메뉴에 링크 추가
4. 필요시 JavaScript에서 인터랙션 업데이트

### 컴포넌트 스타일링
- HTML에서 직접 Tailwind 유틸리티 클래스 사용 (별도 CSS 불필요)
- 예시: `class="bg-blue-500 text-white px-4 py-2 rounded-lg"`
- Tailwind이 지원하지 않는 효과 (애니메이션, 그래디언트 등)에만 `style.css` 사용

### 인터랙션 추가
- `script.js`를 명확한 함수명으로 모듈식으로 유지
- Vanilla DOM 조작 사용 (`querySelector`, `addEventListener`)
- 인터랙티브 요소 식별에 `data-*` 속성 선호
- 예시: `<button data-toggle="menu">메뉴</button>`

---

## 잠재적 과제 및 가이드

**Tailwind CSS CDN vs. 빌드 프로세스:**
- CDN이 시작하기 가장 간단; 파일 크기 증가나 커스텀 설정 필요 시 npm + 빌드로 전환

**반응형 디자인:**
- 항상 모바일 우선으로 설계; Tailwind 브레이크포인트 일관성 유지 (sm:, md:, lg:)
- Chrome DevTools 기기 에뮬레이션이나 실제 기기에서 테스트

**브라우저 호환성:**
- 다크 모드 토글, 애니메이션, CSS Grid/Flexbox를 모든 주요 브라우저에서 테스트
- 접근성을 위해 시맨틱 HTML (`<nav>`, `<header>`, `<main>`, `<footer>`) 사용

**접근성:**
- 모든 이미지에 `alt` 텍스트 포함
- 적절한 제목 계층 구조 사용 (h1: 이름, h2: 섹션 제목)
- WCAG AA 표준 이상의 색상 대비 확보
- 키보드 네비게이션 테스트 (Tab, Enter 키)

---

## 배포

ROADMAP.md Phase 6 참고:
- **GitHub Pages**: `gh-pages` 브랜치 또는 `/docs` 폴더로 푸시
- **Vercel**: 저장소 연결; 푸시 시 자동 배포
- **Netlify**: Vercel과 유사; Git 통합 또는 드래그 앤 드롭

---

## 참고 자료

- **ROADMAP.md**: 상세한 6단계 개발 로드맵
- [Tailwind CSS 공식 문서](https://tailwindcss.com/)
- [MDN HTML](https://developer.mozilla.org/ko/docs/Learn/HTML)
- [MDN CSS 레이아웃 (Flexbox/Grid)](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/)
