<template>
  <div>
    <Navegacion/>
    <div class="page-content p-5" id="content">
      <p>  {{ this.EVENTS }} </p>
      <Agenda />
    </div>
  </div>
</template>

<script>
import Navegacion from '../components/navegacion.vue';
import Agenda from '../components/Agenda'
import { mapGetters } from "vuex";
export default {
    name: "Home",
    data() {
      return {
        eventos: this.EVENTS
      }
    },
    components: {
      Navegacion,
      Agenda
    },
    computed: {
    ...mapGetters("agendaEvents", ["EVENTS"]),
  },
}
</script>

<style>
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}
</style>