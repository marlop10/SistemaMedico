<template>
  <div>
    <vue-bootstrap4-table
      :rows="PACIENTES"
      :columns="columns"
      :config="config"
      :actions="actions"
      @abrirModal="abrirModal"
    >
        <template slot="accion" slot-scope="props">
        <div class="buttons">
          <button class="btn-stylesd" @click="abrirPaciente(props.cell_value)">
              <i class="fas fa-pen-fancy"></i>
          </button>
          <button @click="slide=true" class="btn-stylesd">
              <i class="fas fa-eye"></i>
          </button>
        </div>
      </template>

      <template slot="pagination-info" slot-scope="props">
        Resultados {{ props.filteredRowsLength }} | Registros Totales
        {{ props.originalRowsLength }}
      </template>
    </vue-bootstrap4-table>
    
    <Modal :class="{'activo': evento}">
        <form class="form">
          <label for="name">Nombre del paciente: </label>
          <input class="input" id="name" type="text" placeholder="Nombre del paciente" v-model="setPaciente.nombre">
          <label for="apellidoP">Apellido Paterno: </label>
          <input class="input" id="apellidoP" type="text" placeholder="Apellido Paterno" v-model="setPaciente.apellidoP">
          <label for="apellidoM">Apellido Materno: </label>
          <input class="input" id="apellidoM" type="text" placeholder="Apellido Materno" v-model="setPaciente.apellidoM">
          <label for="sexo">Sexo: </label>
          <input class="input" id="sexo" type="text" placeholder="Sexo" v-model="setPaciente.sexo">
          <label for="edad">Edad: </label>
          <input class="input" type="number" name="edad" id="edad" placeholder="Edad" v-model="setPaciente.edad">
          <label for="tel">Telefono: </label>
          <input class="input" type="tel" name="tel" id="tel" v-model="setPaciente.telefono">
          <input class="btn btn-outline-primary" type="submit" value="Generar Cita" @click.prevent="CrearPaciente">
        </form>
    </Modal>

    <!-- SlideOut -->
    <vue-slideout-panel 
      id="slide-form" 
      v-model="slide"
      :widths="['50%']"
      @close="slide=false">

      <button type="button" class="btn-style-close" @click="slide=false">X</button>
      <h3 class="text-center">Slide Panel</h3>
      <div class="container">
        Contenido o Componente del Slide...
      </div>

      <div class="b-footer"></div>
    </vue-slideout-panel>
    <!-- SlideOut -->


  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import Modal from '../components/Modal'
import todoPaciente from '../apiacces/todoPaciente'
import { mapGetters, mapState } from 'vuex';

import VueSlideoutPanel from 'vue-slideout-panel' // Slide import

export default {
  name: "App",
  data() {
    return {
      evento: false,
      slide: false,
      setPaciente: {
          nombre: "",
          apellidoP: "",
          apellidoM: "",
          sexo: "",
          edad: null,
          telefono: null,
      },
      evento: false,
      columns: [
        {
          label: "id",
          name: "id",
        },
        {
          label: "Nombre Completo",
          name: "nombre",
        },
        {
          label: "Sexo",
          name: "sexo",
        },
        {
          label: "Edad",
          name: "edad",
        },
        {
          label: "Telefono",
          name: "telefono",
        },
        { label: "Acciones", name: "id", slot_name: "accion" },
      ],
      actions: [
        {
          btn_text: "Crear Nuevo Paciente",
          event_name: "abrirModal",
          class: "btn btn-primary",
        },
      ],
      config: {
        checkbox_rows: false,
        rows_selectable: true,
        card_title: "Pacientes",
        show_refresh_button: false,
        show_reset_button: false,
        per_page: 5, // default 10,
        highlight_row_hover_color: "lightblue",
        per_page_options: [5],
        global_search: {
          placeholder: "Buscar",
          visibility: true,
          case_sensitive: false,
        },
      },
    };
  },
  mounted () {
    this.ObtenerPacientes()
  },
  components: {
    VueBootstrap4Table,
    Modal,
    VueSlideoutPanel // Component Slide
  },
  methods: {
      abrirModal() {
          this.evento = true
      },
      CrearPaciente(){
        todoPaciente.post({
          "nombrePaciente": this.setPaciente.nombre, 
          "nombrePaterno": this.setPaciente.apellidoP,
          "nombreMaterno": this.setPaciente.apellidoM,
          "sexo": this.setPaciente.sexo,
          "edad": this.setPaciente.edad,
          "phone_number": this.setPaciente.telefono
        })
          .then(result =>{
            this.setPaciente = {}
            console.log(result.data)
            this.ObtenerPacientes()  
            this.evento = false
          })
      },
      ObtenerPacientes(){
        this.$store.commit("pacientes/BORRAR_PACIENTES")
        todoPaciente.get()
          .then(result=>{
            const dataPaciente =  result.data
            dataPaciente.map(element =>{
              this.$store.commit("pacientes/ADD_PACIENTE",{
                id: element.id,
                nombre: element.nombrePaciente +" "+ element.nombrePaterno +" "+ element.nombreMaterno,
                telefono: element.phone_number,
                sexo: element.sexo,
                edad: element.edad,
              })
            })
          })
      },
      abrirPaciente(paciente){
        this.evento = true
        this.$store.commit("pacientes/EDITAR_PACIENTE",paciente)
        this.setPaciente = this.PACIENTE
      }
  },
  computed: {
      ...mapGetters("pacientes", ["PACIENTES","PACIENTE"]),
    },
};
</script>

<style lang="scss" scoped>
.has-clear-right .form-control-feedback[data-v-46173776] {
  line-height: 3rem !important;
}
.has-clear-right .form-control[data-v-46173776] {
  padding-right: 0.5rem !important;
}
.table {
  font-size: 11px !important;
}
.panel {
  h3 {
    color: $secundario;
    // font-size: 50px;
  }
}

.block-color {
  background: linear-gradient(87deg, $principal, $secundario) !important;
  height: 160px;
  width: 100%;
}
.b-footer {
  background: linear-gradient(87deg, $principal, $secundario) !important;
  height: 45px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  margin-left: -16px;
}

.btn-style {
  padding: 5px 15px;
  border-radius: 6px;
  background-size: 200% auto;
  transition: 0.7s;
  background: $m-white;
  color: $principal;
  position: absolute;
  top: 25px;
  margin-left: 30px;
  &:hover {
    background-position: right center;
    background: #e9eaea;
    color: $secundario;
  }
}
.btn-style-close {
  padding: 5px 15px;
  border-radius: 6px;
  background-size: 200% auto;
  transition: 0.7s;
  background: $m-white;
  color: $secundario;
  position: static;
  top: 25px;
  right: 15px;
  &:hover {
    background-position: right center;
    background: #e9eaea;
    color: $principal;
  }
}
.btn-style-c {
  display: none;
  padding: 2px 10px;
  border-radius: 6px;
  background-size: 200% auto;
  transition: 0.7s;
  background: $m-white;
  color: $secundario;
  position: absolute;
  right: 20px;
  top: 14px;
  &:hover {
    background-position: right center;
    background: #e9eaea;
    color: $principal;
  }
}
.btn-style-s {
  background: linear-gradient(
    to right,
    $principal 0%,
    $secundario 51%,
    $principal 100%
  );
  color: $white;
  padding: 5px 50px;
  border-radius: 6px;
  background-size: 200% auto;
  transition: 0.5s;
  &:hover {
    background-position: right center;
  }
}



.box-content{
  margin-top: -70px;
  margin-left: 20px;
  margin-bottom: 30px;
  p{
    color: $icons;
  }
  .color-box{
    position: absolute;
    right: 15px;
    top: 15px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(87deg, #f997a1, #ff0712) !important;
    color: white;
    border-radius: 30px;
    font-size: 20px;
  }
}
.btn-stylesd{
  padding: 2px 10px;
  border-radius: 6px;
  background-size: 200% auto;
  transition: 0.7s;
  background: $secundario;
  color: $white;
  width: 100%;
  border: none;
  &:hover {
    background-position: right center;
    background: #e9eaea;
    color: $principal;
  }
}
.bg-warning {
  background-color: #ffc107!important;
  padding: 2px 15px !important;
  border-radius: 6px !important;
}
.buttons{
  display: inline-flex;
  button{
    margin: 0 3px;
  }
}

.btn-style-close{
  padding: 5px 15px;
  border-radius: 6px;
  background-size: 200% auto;
  transition: 0.7s;
  background: $m-white;
  color: $secundario;
  position: static;
  top: 25px;
  right: 15px;
  &:hover {
    background-position: right center;
    background: #e9eaea;
    color: blueviolet;
  }
}

.b-footer{
  background: linear-gradient(87deg, blueviolet, blue) !important;
  height: 45px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  margin-left: -16px;
}

</style>
