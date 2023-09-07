<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>파라미터로 넘어온값 : {{ route.params.username }}</h1>
    <h1>파라미터로 넘어온값 : {{ route.params.job }}</h1>
  </div>
</template>


<script setup>

import {  useRoute } from 'vue-router'

const route = useRoute()

</script>