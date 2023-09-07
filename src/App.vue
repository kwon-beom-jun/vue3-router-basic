<template>

  <!-- 네비게이션을 위해 router-link 컴포넌트를 사용합니다. -->
  <!-- 구체적인 속성은 `to` prop을 이용합니다. -->
  <!-- 기본적으로 `<router-link>`는 `<a>` 태그로 렌더링됩니다.-->
  <!-- router-link, router-view 태그는 router에서 제공하는 태그 -->
  <!-- to 속성은 → <a/> 태그로 변경 -->
  <router-link to="/">Home</router-link> |
  <router-link to="/about">about</router-link> |
  <!-- :to 바인딩 시켜야함 -->
  <router-link :to="'/about/' + '홍길동' + '/부자'">link arg</router-link> | 
  <router-link to="/HelloWorld">HelloWorld</router-link> |


  <!-- Vue를 사용하지 않고 직접 링크 이동 -->
  <!-- 페이지 전체를 렌더링 -->
  <a href="@/components/HelloTest.vue">HelloTest</a> 


  <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
  <!-- URL로 접근한 컴포넌트 오픈 -->
  <router-view/>

</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
