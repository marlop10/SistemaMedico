<template>
  <div>
    <Navegacion/>
    <div class="page-content p-5" id="content">
     <h1>Hola</h1>
    </div>
  </div>
</template>

<script>
import Navegacion from '../components/navegacion.vue';
export default {
    name: "Home",
    components: {
      Navegacion,
    }
}
</script>

<style>
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}
</style>