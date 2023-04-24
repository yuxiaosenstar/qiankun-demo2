import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
  },
]

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes,
})
