import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import PostView from './views/PostView.js';
import Settings from './views/Settings.js';

const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

// url param을 page로 전달하는 방법
const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    }),
  );
};

// routing 하는 방법
const navigateTo = (url) => {
  /*
    # History API
      * 브라우저 세션 히스토리에 접근할 수 있는 api

      * history.pushState()
        * 브라우저 세션 히스토리 스택에 항목을 추가

      * 참고
        * [mdn](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
        * [zerocho](https://www.zerocho.com/category/HTML&DOM/post/599d2fb635814200189fe1a7)
  */
  // history.pushState(null, null, url);
  router();
};

const router = async () => {
  // routes 설정
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/posts/:id', view: PostView },
    { path: '/settings', view: Settings },
  ];

  // url pathname과 routes 설정을 비교하면서 매칭 되는 것을 체크
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname], // getParams에서 사용됨
    };
  }

  // 매칭된 view 객체 생성
  // getparams로 url에 설정한 param을 전달
  const view = new match.route.view(getParams(match));

  // 매칭 된 view html 을 app에 붙여 줌
  // spa를 구현 (화면이 업데이트 되지 않으면서 페이지 전환)
  document.querySelector('#app').innerHTML = await view.getHtml();
};

// 브라우저 뒤, 앞으로가기 햇을때 발생하는 이벤트
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
