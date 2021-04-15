<template>
  <div>
    <h3 class="title">Citas</h3>
    <hr>
    <FullCalendar :options="{...calendarOptions, events: this.EVENTS}"/>
  </div>
</template>
<script>

require('@fullcalendar/common/main.min.css')
require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css')
require('@fullcalendar/list/main.min.css')

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

//importar vuex
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      calendarOptions: {
        locale: 'es',
        plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, interactionPlugin, listPlugin ],
        initialView: 'dayGridMonth',
        headerToolbar: {
            start:'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            center: 'title',
            end:'prev today next'
        },
        buttonText:{
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista'
        },
        selectable: true,
        select: this.handleSelect
      },
    }
  },
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  computed: {
    ...mapGetters("agendaEvents", ["EVENTS"]),
  },
  methods: {
    handleSelect(arg) {
      this.$store.commit("agendaEvents/ADD_EVENT",{
        title: "Something",
        start: arg.startStr,
        end: arg.endStr,
        allDay: arg.allDay
      })
      console.log(this.EVENTS)
    }
  },
}
</script>
<style lang='scss'>
.fc-col-header-cell-cushion,
.fc-daygrid-day-number{
  text-decoration: none;
  color: black;
}
.title{
  text-align: center;
}
</style>