import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import VPopover from 'vue-js-popover'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VPopover, { tooltip: true })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
