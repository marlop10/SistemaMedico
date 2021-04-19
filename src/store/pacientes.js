const state = {
    pacientes: [],
    paciente: null,
}

const getters = {
   PACIENTES: state => state.pacientes,
   PACIENTE: state => state.paciente
}

const mutations = {
   ADD_PACIENTE: (state, paciente) => {
       state.pacientes.push(paciente)
   },
   EDITAR_PACIENTE: (state,id)=>{
       state.paciente = state.pacientes.find(element => element.id == id)
   },
   BORRAR_PACIENTES: (state) =>{
       state.pacientes = []
   },
   BORRAR_PACIENTE:(state)=>{
        state.paciente = null
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