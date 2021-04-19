import Vue from 'vue'
import VueRouter from 'vue-router'
//importar componentes
import Login from '../views/Login'
import Home from "../views/Home";
import Pacientes from '../views/Pacientes'
//store
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {path: '/login',name: 'Login',component: Login},
  {path: '/',name: 'Home',component: Home, meta: { requiresAuth: true}},
  {path: '/pacientes',name: 'Pacientes',component: Pacientes, meta: { requiresAuth: true}},
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // Requires auth & no user
  if(requiresAuth && !(await store.dispatch("user/getCurrentUser"))){
    next({name: "Login"});
  }else if(!requiresAuth && (await store.dispatch("user/getCurrentUser"))){
    next({name: "Home"});
  }else{
    next();
  }

})

export default router
