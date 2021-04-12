import Vue from 'vue'
//Firebase
import firebase from 'firebase'
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

const url = "https://dcam-gama.herokuapp.com" // dcam - URL

const urln = "https://dcam-gamaa.herokuapp.com/" // dcam - URL
const tokenn = this.$store.

//Import dcam-API methods and initialize
import { ApiA } from "./apiacces"
const api = new ApiA(urln,tokenn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
