const state = {
    events: [],

}

const getters = {
   EVENTS: state => state.events
}

const mutations = {
   ADD_EVENT: (state, event) => {
       state.events.push(event)
   }
}

const actions = {
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};