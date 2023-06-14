<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let s = document.createElement('script')
    s.src = 'baidu'
    document.body.appendChild(s)
  },
}
</script>

<style></style>
