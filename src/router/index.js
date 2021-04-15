import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//store
import store from "../store";

Vue.use(VueRouter)

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
