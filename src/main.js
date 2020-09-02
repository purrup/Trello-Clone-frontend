import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import AppButton from './components/AppButton'
import AppHeader from '@/components/AppHeader.vue'
import '@/assets/css/tailwind.css'

Vue.component('AppButton', AppButton)
Vue.component('AppHeader', AppHeader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
