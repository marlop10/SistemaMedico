<template>
  <div>
      <p>hola</p>
      <button @click="doLogout" class="button">Logout</button>
  </div>
</template>

<script>
import { auth } from "../firebase"

export default {
    name: "Home",
    methods: {
      async doLogout() {
        try {
          await this.$store.dispatch("user/doLogout");
          this.$router.push({ name: "Login" });
        } catch (error) {
          console.error(error.message);
        }
      }
    }
}
</script>

<style>

</style>