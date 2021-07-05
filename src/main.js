import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/VueTailwind'
import './plugins/validation'
import App from './App.vue'
import router from './router'
import store from '../src/store'
import 'tailwindcss/tailwind.css'
import '@/assets/css/tailwind.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeResolve(async (to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  const expiration = new Date(localStorage.getItem('expiration'))
  const currentDate = new Date()
  if (isLogin === 'true') {
    if (expiration > currentDate) {
      await store.dispatch('user/getUser')
    } else {
      store.commit('account/SET_logout')
    }
  }
  next()
})
