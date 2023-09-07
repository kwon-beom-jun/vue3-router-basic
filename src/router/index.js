
import { createRouter, createWebHistory } from 'vue-router'

/**
 * javascript 패키징
 *    vue는 javascript 형태로 패키징되어서 클라이언트에 배포
 *    javascript 패키징 될 때 2가지 형태로 패키징
 * 
 * 라이팅 : 특정 URL을 특정 컴포넌트로 연결(라이팅) 한다는 의미
 * 
 * 정적 라우팅 : import 하여 정적으로 관리
 * 
 * 동적 라우팅
 * 
 * :value 사용법 (:value는 라우터에서 사용)
 *    routes가 AppApp.vue 코드 전환
 *    <router-link :to="'/about/' + '홍길동' + '/부자'">link arg</router-link>
 *      → <a href="/about/홍길동/부자" >link arg</a> 생성해줌 (브라우저에서 개발자모드로 확인)
 *  동작과정
 *    App.vue → router(index.js) → AboutView.vue
 * 
 * 
 */

// ======================================= 정적 라우터 =======================================
import HomeView from "@/views/HelloView.vue"
import AboutView from "../views/AboutView.vue"

const routes = [

  // 정적 라우터
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/about',
    name: 'about',
    component: AboutView
  },{
    // Restful 방식 == server : about/{username}
    // Url Query 방식이 아닌 요즘은 Restful 방식을 사용
    path: '/about/:username/:job',
    name: 'about2',
    component: AboutView
  },

  {
    path: '/HelloWorld',
    name: 'Hello',
    component: () => import(/* webpackChunkName: "" */ '@/components/HelloWorld.vue')
  },

]


// ======================================= 동적 라우터 =======================================

// Url을 치고 들어왔을때 동적으로 import를 생성

/**
 * 
 * ※ router에서 해당 이름의 주석은 인식되어서 사용 ※
 * ※ npm version 변경으로 사용법이 달라짐. ※
 * 
 *  /_ webpackChunkName: "home" _/ => chunk 이름을 정할수 있음
 *  /_webpackPrefetch: true_/ => 미리 받아 놓음\
 * 
 * webpackChunkName
*    - 동일 네이밍으로 선언된것을 네이밍.js파일로 전달
 *  ex) webpackChunkName: "home", webpackChunkName: "about" 두가지 경우 home.js, about.js 두개의 파일로 패킹되어서 전달
 *    → 개발자모드 Network에서 확인 가능
 *  - 동일 네이밍으로 설정 ↑ → 다운로드 속도 ↓
 *  - 동일 네이밍으로 설정 ↓ → 다운로드 속도 ↑
 * 
 * webpackPrefetch
 *    - 시작할때 미리 패키징을 가져올 수 있음
 *    - 강사님 말씀은 webpackChunkName 네이밍이 동일 하나는 false 하나는 true일 때 둘다 받아와질거라 예상한다하심
 *  false : lazy loading
 *  true : eager loading(즉시 로딩)
 *  ex) true 설정시 해당 패키징 파일이 다운로드 된것을 볼 수 있음
 *    → 사용자가 접속 할 가능성이 있는 컴포넌트는 한번에 다운로드 할 수 있게 설정
 *    → 개발자모드 Network에서 확인 가능
 *  - true, false 속성을 적절히 분배하여 웹페이지 퍼포먼스 향상
 * 
 */
/**

  강사님 설명
  
      https://ryu-e.tistory.com/53

      1. 라이팅의 의미
        특정 URL을 특정 컴포넌트로 연결(라이팅) 한다는 의미

      2. 뷰라우터 설치및 기본 설명

      ## https://velog.io/@kungsboy/Vue-3.0-vue-router-%EC%84%A4%EB%AA%85

      ## https://velog.io/@yjyoo/vue.js-Vue-Router-%EC%A0%95%EB%A6%AC
      - 기본설명

      3. lazy loading

      SPA의 특성상 모든 파일이 로드 되어야 서버의 호출 없이 다음 페이지로의 전환이 이루어 지는데
      이를 Lazy Loading으로 처리하여 초기 로딩을 분산하는 방법입니다.

      지연된 로딩 (Lazy Loading) 이란 해당 기능이 필요한 타이밍에 로딩 하여 사용 하는 방법 입니다.
      불필요하게 index 페이지에서 당장 사용 하지 않는 리소스 다운 시간을 단축

      4.prefetch
      컴포넌트를 미리 받아 놓는다는 의미

      5. 동적 컴포넌트 VS 정적 컴포넌트

*/
// Web Network에서 확인 가능
// app.js(app.vue 파일), chunk-vendors.js(app.js의 기능을 수행하기 위한 js파일) 제일 먼저 시작되는 컴포넌트
// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: () =>
//       import(
//         /* webpackChunkName: "home" */ /*webpackPrefetch: true*/ "../views/HelloView.vue"
//       ),
//   },
//   {
//     path: "/about",
//     name: "c",
//     component: () =>
//       import(
//         /* webpackChunkName: "about" */ /*webpackPrefetch: true*/ "../views/AboutView.vue"
//       ),
//   },

// ];





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router