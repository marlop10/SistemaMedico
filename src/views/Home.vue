<template>
  <div>
    <div class="page-content p-5" id="content">
      <Agenda />
      <Modal class="modal" :class="{ activo: evento }">
        <form class="form">
          <label for="name">Nombre del paciente: </label>
          <input class="input" type="text" placeholder="Nombre del paciente" v-model="citas.nombrePaciente">
          <label for="hora">Hora de la cita: </label>
          <input class="input" type="time" name="" id="hora" v-model="citas.horaCita">
          <label for="tel">Numero Telefonico: </label>
          <input class="input" type="tel" name="tel" id="tel" v-model="citas.phone_number">
          <input class="btn btn-outline-primary" type="submit" value="Generar Cita" @click.prevent="CrearCita">
        </form>
      </Modal>
    </div>
  </div>
</template>

<script>
import Navegacion from '../components/navegacion.vue';
import Agenda from '../components/Agenda'
import Modal from '../components/Modal'
import todoService from '../apiacces/todoService'
import { mapGetters, mapState } from 'vuex';
export default {
    name: "Home",
    data() {
      return {
        evento: false,
        seleccion: {},
        citas: {
          nombrePaciente: "",
          horaCita: "",
          diaCita:"",
          phone_number: ""
        }
      }
    },
    mounted () {
      this.obtenerCitas();
    },
    components: {
      Navegacion,
      Agenda,
      Modal
    },
    methods: {
      handleSelect(arg) {
        this.seleccion = {...arg}
        this.citas.diaCita = this.seleccion.startStr
        console.log(this.seleccion)
        this.evento = true
      },
      CrearCita(){
        todoService.post({
          "nombrePaciente": this.citas.nombrePaciente,
          "horaCita": this.citas.horaCita,
          "diaCita": this.citas.diaCita,
          "phone_number": this.citas.phone_number
        })
          .then( () =>{
            this.citas = {}
            this.obtenerCitas()
            this.evento = false
          })
      },
      obtenerCitas(){
        this.$store.commit("agendaEvents/BORRAR_EVENT")
        todoService.get()
          .then(result=>{
            let citas = result.data
            citas.map(element => {
              this.$store.commit("agendaEvents/ADD_EVENT",{
                title: element.nombrePaciente,
                start: element.diaCita +"T"+ element.horaCita,
                allDay: false
              })
            });
            this.citas = {}
            this.evento = false
          })
      }
    },
    computed: {
      ...mapGetters("agendaEvents", ["EVENTS"]),
    },
}
</script>

<style lang="scss">
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
  position: relative !important;
}
</style>