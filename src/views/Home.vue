<template>
  <div>
    <div class="page-content p-5" id="content">
      <Agenda />
    </div>
  </div>
</template>

<script>
import Navegacion from '../components/navegacion.vue';
import Agenda from '../components/Agenda'
export default {
    name: "Home",
    components: {
      Navegacion,
      Agenda
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