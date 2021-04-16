import { auth } from "../firebase"

const state = {
    user: null,

}

const getters = {
   User: state => state.user
}

const mutations = {
   setUser(state, user){
       state.user = user;
   }
}

const actions = {
    getCurrentUser(){
        return new Promise((resolve, reject)=>{
            const unsubscribe = auth.onAuthStateChanged(
                user =>{
                    unsubscribe();
                    resolve(user);
                },
                ()=>{
                    reject();
                }
            );
        });
    },
    async updateProfile({ commit }, {name}){
        const user = auth.currentUser;

        if(name){
            await user.updateProfile({
                displayName: name
            });
        }
        commit("setUser", user);
    },
   async doLogin({ commit }, {email, password}){
       await auth.signInWithEmailAndPassword(email, password);
       commit("setUser", auth.currentUser);
   },
   async doLogout({ commit }){
       await auth.signOut();
       commit("setUser", null)
   }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};