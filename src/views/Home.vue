<template>
  <div>
    <div class="page-content p-5" id="content">
      <Agenda />
      <div class="modal" :class="{'activo': evento}">
        <form class="form">
          <label for="name">Nombre del paciente: </label>
          <input class="input" type="text" placeholder="Nombre del paciente" v-model="citas.title">
          <label for="hora">Hora de la cita: </label>
          <input class="input" type="time" name="" id="hora" v-model="citas.start">
          <input class="btn btn-outline-primary" type="submit" value="Generar Cita" @click.prevent="CrearCita">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navegacion from '../components/navegacion.vue';
import Agenda from '../components/Agenda'
export default {
    name: "Home",
    data() {
      return {
        evento: false,
        seleccion: {},
        citas: {
          title: "",
          start: ""
        }
      }
    },
    components: {
      Navegacion,
      Agenda
    },
    methods: {
      handleSelect(arg) {
        this.seleccion = {...arg}
        this.evento = true
      },
      CrearCita(){
        this.$store.commit("agendaEvents/ADD_EVENT",{
          title: this.citas.title,
          start: this.seleccion.startStr +"T"+this.citas.start,
          allDay: false
        })
        this.citas = {}
        this.evento = false
      },
    }
}
</script>

<style lang="scss">
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
  position: relative !important;
}
.modal{
  
  &.activo{
    height: 100vh !important;
    position: absolute !important;
    background-color: rgba(97, 136, 148, 0.8);
    overflow: visible !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .form{
    display: flex;
    flex-direction: column;
    height: 15rem;
    justify-content: center;
    position: relative;
    margin: 20px auto;
    padding: 20px;
    background-color: $m-white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
    -moz-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
    box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
  }
  .input{
    margin: 10px 0;
  }
}
</style>