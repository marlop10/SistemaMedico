import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import pacientes from './pacientes'
import agendaEvents from './agendaEvents'

//Firebase
import { auth } from "../firebase"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth({ commit }){
      auth.onAuthStateChanged(function(user){
        if(user){
          commit("user/setUser", user)
        }else{
          commit("user/setUser", null)
        }
      })
    }
  },
  modules: {
    user,
    agendaEvents,
    pacientes
  }
})

export default store;

//Initial Load
store.dispatch('checkAuth');
