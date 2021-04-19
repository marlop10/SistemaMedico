<template>
  <div>
    <FullCalendar
      :options="{
        ...calendarOptions,
        events: this.EVENTS,
        eventClick: this.handleClick,
      }"
    />
    <Modal class="modalEvent" :class="{ activo: evento }">
      <fieldset class="form">
        <legend>
          <h2>Cita Programada</h2>
          <p>Nombre del paciente: {{ this.citas.title }}</p>
          <p>Hora de la cita: {{ this.citas.start }}</p>
          <div class="buttons">
            <button class="btn btn-outline-danger" @click="cancelarCita">Cancelar Cita</button>
            <button class="btn btn-outline-success" @click="cerrarModal">Cerrar</button>
          </div>
        </legend>
      </fieldset>
    </Modal>
  </div>
</template>
<script>

//importar todo lo referente al calendario
require("@fullcalendar/common/main.min.css");
require("@fullcalendar/daygrid/main.min.css");
require("@fullcalendar/timegrid/main.min.css");
require("@fullcalendar/list/main.min.css");

import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

//importar vuex
import { mapGetters, mapState } from "vuex";

//importar components
import Modal from '../components/Modal'

export default {
  data() {
    return {
      calendarOptions: {
        locale: "es",
        plugins: [
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
        ],
        initialView: "dayGridMonth",
        headerToolbar: {
          start: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          center: "title",
          end: "prev today next",
        },
        buttonText: {
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Dia",
          list: "Lista",
        },
        height: 760,
        selectable: true,
        select: this.$parent.handleSelect,
      },
      evento: false,
      citas: {
        title: "",
        start: ""
      }
    };
  },
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    Modal,
  },
  computed: {
    ...mapGetters("agendaEvents", ["EVENTS"]),
  },
  methods: {
    handleClick(arg) {
      this.evento = true
      this.citas.title = arg.event.title
      this.citas.start = arg.event.startStr.replace("T"," ").slice(0,16)
    },
    cerrarModal(){
      this.evento = false
    },
    cancelarCita(){
      console.log("cancelado")
      this.evento = false
    }
  },
};
</script>
<style lang="scss">
.fc-col-header-cell-cushion,
.fc-daygrid-day-number {
  text-decoration: none;
  color: black;
}
</style>
