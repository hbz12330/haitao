// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
Vue.use(MUI)
Vue.config.productionTip = false,
  axios.defaults.withCredentials = true
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
