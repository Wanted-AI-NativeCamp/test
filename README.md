# 클래스로(Classro) 회사 소개 웹사이트

동네 공방·작업실의 **원데이 클래스**(도자기, 베이킹, 가죽공예, 플라워, 드로잉, 향수)를 앱에서 찾고 바로 예약·결제하는 서비스 **클래스로**의 회사 소개 페이지입니다.

> 수업용 가상 회사입니다. 등장하는 회사·인물·수치는 모두 지어낸 것입니다.

## 배포 주소

🔗 https://resonant-dodol-53a371.netlify.app (Netlify)

## 실행 방법

별도 설치 없이 `index.html` 파일을 브라우저로 열면 됩니다.

## 폴더 구조

```
.
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 스타일 (반응형 포함)
├── js/
│   └── main.js         # 인터랙션 스크립트
└── 00_회사소개.md       # 웹사이트 원본 자료
```

## 페이지 구성

| 섹션 | 내용 |
| --- | --- |
| 히어로 | 한 줄 소개, 클래스 카테고리 타일 |
| 회사 소개 | 설립(2023.03), 대표, 구성원, 서비스 플랫폼 |
| 클래스 | 6개 카테고리 카드 |
| 이용 방법 | 검색 → 상세 → 날짜·인원 선택 → 결제 → 예약 완료 |
| 숫자로 보기 | 제휴 공방·월 예약·평균 결제액·구성원, 지역별 공방 그래프 |
| 팀 | 직군별 인원 |
| 소식 | 앱 v2.3.0 업데이트, 회사 설립 |
| 제휴 문의 | 공방 대상 문의 폼 (데모, 실제 전송 없음) |

## 주요 기능 (`js/main.js`)

- 스크롤 시 헤더 그림자
- 모바일 햄버거 메뉴
- 스크롤 등장 애니메이션
- 숫자 카운트업, 지역별 막대 그래프 애니메이션
- 제휴 문의 폼 입력값 검사

## 사용 기술

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Gowun Batang, Noto Sans KR)

---

# 깃 허브 사용 첫번째

git init <!-- (폴더와 연결) --> #한번
git add README.md <!-- (파일을 github에 업로드) -->
git add . <!-- (해당 폴더의 모든 파일 업로드) -->

git add README.md
git commit -m "seconde commit"

# 여러번 구간

git remote add origin https://github.com/Wanted-AI-NativeCamp/test.git #한번만

git branch -M main
git push -u origin main #main branch 이름
