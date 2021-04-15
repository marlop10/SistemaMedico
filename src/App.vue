<template>
  <div id="app">
    <div>
      <Navegacion></Navegacion>
    </div>
    <div class="page-content p-5" id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navegacion from './components/navegacion';
export default {
    name: "Home",
    components: {
      Navegacion
    },
}
</script>

<style>
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}
html,
body {
  min-height: 100%;
  font-family: Oxygen;
  font-weight: 300;
  font-size: 1em;
}
</style>