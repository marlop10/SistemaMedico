<template>
  <div id="app">
    <Navegacion v-if="User"></Navegacion>
    <router-view/>
  </div>
</template>
<script>
import Navegacion from './components/navegacion'
import { mapGetters } from 'vuex'
export default {
  name: "App",
  components: {
    Navegacion,
  },
  computed: {
    ...mapGetters("user",["User"])
  },
}
</script>
<style>
html,
body {
  min-height: 100%;
  font-family: Oxygen;
  font-weight: 300;
  font-size: 1em;
}
</style>