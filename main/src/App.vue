<template>
  <div id="app">
    <router-link to="/vue1">vue1</router-link>
    |
    <router-link to="/vue2">vue2</router-link>
    <div id="container"></div>
  </div>
</template>

<script>
import { doQiankun } from '@/app/qiankun'
export default {
  name: 'App',
  watch: {
    $route(val) {
      doQiankun(val)
    },
  },
  mounted() {
    doQiankun(this.$route)
    // let s = document.createElement('script')
    // s.src = 'baidu1'
    // document.body.appendChild(s)
  },
}
</script>

<style></style>
