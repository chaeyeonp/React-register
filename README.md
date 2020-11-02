

# 📁 react_sns_project
React & Next & Redux & Redux Saga & Express 스택 연습용 Project
## 프로젝트 이름 : react_sns
<br>


## 📚 프로젝트 설명 :
### <strong> 1. React & Next & Redux & Redux Saga & Express 스택으로 SNS 서비스 빌드업<br> </strong>
로그인, 게시글 작성, 이미지 업로드, 좋아요, 댓글, 리트윗, 인피니트 스크롤링, 팔로우, 언팔로우,해시태그 검색, 유저 프로필
### <strong> 2. 검색 엔진 최적화 후 AWS 배포<br>  </strong>

<br><br>

## 📝 사용언어, 기술스택

|BackEnd|FrontEnd|
|------|---|
|![Generic badge](https://img.shields.io/badge/framework-Express-green.svg)|![Generic badge](https://img.shields.io/badge/library-React-blue.svg)|
|![Generic badge](https://img.shields.io/badge/Database-Mysql-red.svg)|![Generic badge](https://img.shields.io/badge/library-Redux-blue.svg)|
|![Generic badge](https://img.shields.io/badge/ORM-Sequelize-black.svg)|![Generic badge](https://img.shields.io/badge/library-ReduxSaga-blue.svg)|
|![Generic badge](https://img.shields.io/badge/Middleware-Passport-yellow.svg)|![Generic badge](https://img.shields.io/badge/framework-Next-green.svg)|
|![Generic badge](https://img.shields.io/badge/Middleware-Multer-yellow.svg)|![Generic badge](https://img.shields.io/badge/framework-StyledComponents-pink.svg)|
|![Generic badge](https://img.shields.io/badge/library-Socket.io-blue.svg)||
|![Generic badge](https://img.shields.io/badge/service-Lambda-orange.svg)||

<br><br>

### 📕 NPM version
| 패키지명 | 버전 | 설명 |
| -------- | ---- | ---- |
| React |[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)| 유저 인터페이스 제작을 위한 프론트엔드 라이브러리 |
| Redux | [![npm version](https://img.shields.io/npm/v/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)| 상태관리 라이브러리(data value, event loop) |
| Redux Saga | [![npm version](https://img.shields.io/npm/v/redux-saga.svg)](https://www.npmjs.com/package/redux-saga)| 비동기 동작 관리 라이브러리 |
| Next.js |[![NPM version](https://img.shields.io/npm/v/next.svg)](https://www.npmjs.com/package/next) | SSR(Server Side Rendering) 구현 프레임워크 |
| Express.js|  [![NPM Version](https://img.shields.io/npm/v/express.svg)](https://npmjs.org/package/express)| Node.js 의 프레임워크 |
| Antd Design | [![NPM Version](http://img.shields.io/npm/v/antd.svg?style=flat-square)](http://npmjs.org/package/antd)| React UI 디자인 라이브러리 |
<br>

## 📜 Data Model Diagram

<br><br>

## 프로젝트 구조
|BackEnd|FrontEnd|
|------|---|
|||
<br>

## 🔎 Member Registeration - 변경사항 2020-10-11
- 회원가입 useInput 및 onChange 최소화
- Hook들과 일반 함수, 값을 조합해서 새로운 Hook 추가

<details>
<summary>💻 변경 사항</summary>
<div markdown="1">

<img width="584" alt="스크린샷 2020-10-11 오후 5 49 20" src="https://user-images.githubusercontent.com/61309080/95674318-51f20380-0bea-11eb-9d63-fd61f22a36db.png">


</div>
</details>

## 🔎 Minimalize Code - 변경사항 2020-10-19
- Minimalize pages components with "_app.js"
- Pages에서 겹치는 부분 모두 "_app.js"에 넣기
- props로 넘겨주는 함수는 useCallback 필수
- Proptypes - 전달받은 props가 원하는 props인지를 확인

<details>
<summary>💻 변경 사항</summary>
<div markdown="1">
<img width="893" alt="_app.js" src="https://user-images.githubusercontent.com/61309080/96393667-cafce680-11fa-11eb-972f-15a21c4a6f37.png">



</div>
</details>

## 🔎 Structure - 변경사항 2020-10-19
- "_document.js" -> html, head, body
- "_app.js" -> root
- pages -> 실제 컴포넌트
- "_error.js"



</div>
</details>



