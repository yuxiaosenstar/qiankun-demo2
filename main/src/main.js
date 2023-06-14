import Vue from 'vue'
import App from './App.vue'
// import { prefetchApps } from 'qiankun'
import router from './router'
import store from './store'
// import { apps } from '@/app/qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// prefetchApps(apps)

// import { registerMicroApps } from 'qiankun'
// registerMicroApps([
//   {
//     name: 'vueApp',
//     entry: '//localhost:8081',
//     container: '#container',
//     activeRule: '/vue1',
//     props: {
//       mainService,
//     },
//   },
//   {
//     name: 'vueApp2',
//     entry: '//localhost:8082',
//     container: '#container',
//     activeRule: '/vue2',
//     props: {
//       mainService,
//     },
//   },
// ])
// 启动 qiankun

// start({
//   prefetch: false,
//   excludeAssetFilter(url) {
//     if (url.includes('baidu')) {
//       return true
//     }
//   },
// })
