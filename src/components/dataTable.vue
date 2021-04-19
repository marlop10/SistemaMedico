<template>
  <div>
    <vue-bootstrap4-table
      :rows="Pacientes"
      :columns="columns"
      :config="config"
      :actions="actions"
      @crearPaciente="crearPaciente"
    >
        <template slot="accion">
        <div class="buttons">
          <button class="btn-stylesd">
              <i class="fas fa-pen-fancy"></i>
          </button>
          <button class="btn-stylesd">
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
          <label for="apellido">Apellido del paciente: </label>
          <input class="input" id="apellido" type="text" placeholder="Apellido del paciente" v-model="setPaciente.apellido">
          <label for="tel">Telefono </label>
          <input type="tel" name="tel" id="tel" v-model="setPaciente.telefono">
          <label for="dx">Dx: </label>
          <input class="input" type="text" placeholder="Dx del paciente" id="dx" v-model="setPaciente.Dx">
          <input class="btn btn-outline-primary" type="submit" value="Generar Cita" @click="CrearPaciente">
        </form>
    </Modal>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import Modal from '../components/Modal'
export default {
  name: "App",
  data() {
    return {
      evento: false,
      setPaciente: {
          nombre: "",
          apellido: "",
          telefono: null,
          Dx: ""
      },
      Pacientes: [{
          id: 1,
          nombre: 'hola',
          telefono: "as",
          Dx: "d"
      }],
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
          label: "Telefono",
          name: "telefono",
        },
        {
          label: "Dx",
          name: "Dx",
        },
        { label: "Acciones", name: "id", slot_name: "accion" },
      ],
      actions: [
        {
          btn_text: "Crear Nuevo Paciente",
          event_name: "crearPaciente",
          class: "btn btn-primary",
        },
      ],
      config: {
        checkbox_rows: false,
        rows_selectable: false,
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
  components: {
    VueBootstrap4Table,
    Modal,
  },
  methods: {
      crearPaciente() {
          this.evento = true
      },
      CrearPaciente(){
          let objPaciente = {
              nombre: this.setPaciente.nombre +" " + this.setPaciente.apellido,
              telefono: this.setPaciente.telefono,
              Dx: this.setPaciente.Dx
          }
          this.Pacientes.push(objPaciente)
          this.evento = false
          
      }
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
</style>
