# single-page-app-vanilla-js

# 앱 실행 방법

* npm i
* node server
* localhost:5060

# 환경설정

* node server에 front-end 설정

# 파일 구조/ 설명

frontend
 ┣ static
 ┃ ┣ css
 ┃ ┃ ┗ index.css
 ┃ ┗ js
 ┃ ┃ ┣ views
 ┃ ┃ ┃ ┣ AbstractView.js  : "view의 추상화 인터페이스"
 ┃ ┃ ┃ ┣ Dashboard.js     : view
 ┃ ┃ ┃ ┣ PostView.js      : view
 ┃ ┃ ┃ ┣ Posts.js         : view
 ┃ ┃ ┃ ┗ Settings.js      : view
 ┃ ┃ ┗ index.js           : "Routing, param core"
 ┗ index.html

* 아래 두 파일이 중요한 역할을 한다.
    * AbstractView.js, index.js
* AbstractView.js
    * 페이지를 만들때의 추상 클래스 역할을 한다.
    * setTitle, getHtml 기능이 있다.
* index.js
    * Routing, url param을 전달해주는 역할을 한다.
    * Routing은 History API의 "pushState"로 가능하게 한다.
    * 브라우저 앞, 뒤 이동시 "popstate" 이벤트가 발생한다.

# 분석 순서

* click 이벤트
* navigateTo
* router(getparams)

# 페이지 이동 원리

## url 이동으로 페이지 routing 원리

* 이동하고 싶은 페이지 이동 url 설정
    * "history.pushState" 설정으로 url 설정
* 먼저 이동하고 싶은 routes를 설정
    * path와 해당 view class를 설정
* url path에 해당하는 view의 인스턴스 생성
* 생성된 인스턴스에서 getHTML을 호출로 페이지 rendering

## 브라우저 앞, 뒤 이동시 페이지 rendering 방법

* popstate 이벤트를 등록 routing 기능을 호출한다.(router function)
    * popstate 이벤트는 브라우저 앞,뒤 이동시 호출된다.

# 참고

* [Params - Build a Single Page Application with JavaScript (No Frameworks)Build a Single Page Application with JavaScript (No Frameworks)](https://www.youtube.com/watch?v=6BozpmSjk-Y)
* [Adding Client Side URL Params - Build a Single Page Application with JavaScript (No Frameworks)](https://www.youtube.com/watch?v=OstALBk-jTc&t=41s)
