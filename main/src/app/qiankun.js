import { loadMicroApp } from 'qiankun'

class MainService {
  cacheKey = ''
  instance = null
  loadedApplicationMap = {}

  init(cacheKey, instance) {
    this.cacheKey = cacheKey
    this.instance = instance
  }

  // 父应用提供unmountCache方法
  unmountCache() {
    // 此处永远只会保存首次加载生成的实例
    const needCached = this.instance?.cachedInstance || this.instance
    const cachedInstance = {}
    cachedInstance._vnode = needCached._vnode
    // keepalive设置为必须 防止进入时再次created，同keep-alive实现
    if (!cachedInstance._vnode.data.keepAlive) cachedInstance._vnode.data.keepAlive = true
    // loadedApplicationMap用于是key-value形式，用于保存当前应用的实例
    this.loadedApplicationMap[this.cacheKey] = cachedInstance
    // 卸载实例
    this.instance.$destroy()
    // 设置为null后可进行垃圾回收
    this.instance = null
  }
}

export const mainService = new MainService()

export const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/vue1',
    props: {
      mainService,
    },
  },
  {
    name: 'vueApp2',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/vue2',
    props: {
      mainService,
    },
  },
]

let instance = null

const loadApp = (app) => {
  instance = loadMicroApp(app, {
    excludeAssetFilter(url) {
      if (url.includes('baidu')) {
        return true
      }
    },
  })
}

export const doQiankun = (route) => {
  const app = apps.find((val) => route.path === val.activeRule)
  if (instance) {
    instance.unmount().finally(() => {
      loadApp(app)
    })
  } else {
    loadApp(app)
  }
}
