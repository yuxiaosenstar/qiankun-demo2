import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null
let mainService2 = null

function render(props = {}) {
  const { container, mainService } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue1/' : '/',
    mode: 'history',
    routes,
  })

  // 创建子应用实例，有缓存的vnode则使用缓存的vnode
  function newVueInstance(cachedNode) {
    return new Vue({
      router,
      store,
      render: cachedNode ? () => cachedNode._vnode : (h) => h(App), // 优先使用缓存vnode
    })
  }

  // 实例化子应用实例，根据是否有缓存vnode确定是否传入cachedNode
  instance = newVueInstance(mainService.loadedApplicationMap['vue1'])
  instance.$mount(container ? container.querySelector('#app') : '#app')
  mainService.init('vue1', instance)
  mainService2 = mainService
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue1] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue1] props from main framework', props)
  render(props)
}
export async function unmount() {
  console.log('[vue1] system app unmount')
  mainService2.unmountCache()
  router = null
}
