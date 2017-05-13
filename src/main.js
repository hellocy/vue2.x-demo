// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from '../plugins/vue-axios'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(iView)
axios.interceptors.request.use(
    config => {
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )

// http response 拦截器
axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 401 清除token信息并跳转到登录页面
            // store.commit(types.LOGOUT);
            // router.replace({
            //     path: 'login',
            //     query: {redirect: router.currentRoute.fullPath}
            // })
        }
      }
      console.error(error)
      iView.Message.error('网络请求错误', 3)
      return Promise.reject(error.response.data)
    }
  )
// iView.LoadingBar.config.color = 'orange'
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  // iView.Message.loading('加载中', 2)
  console.log(iView.Message)
  iView.LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
