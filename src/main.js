import Vue from 'vue'
import App from './Components/App.vue'
import store from './Store'
import { router } from './Router'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
