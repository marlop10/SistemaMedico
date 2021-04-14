import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Notificaciones Swal (https://sweetalert.js.org/)
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

// Libreria bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Libreria fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
