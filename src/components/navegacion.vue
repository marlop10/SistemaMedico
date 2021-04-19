<template>
  <div>
    <!-- Vertical navbar -->
    <div class="vertical-nav bg-white" id="sidebar">
      <div class="py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <img
            src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.6435-9/138578995_416243636457505_4648692847934455854_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeEcowlms_eyJ1Xej5V2iRId1v-iP6oZ1dDW_6I_qhnV0DrXJrXGT42Gho0j10xfVcXvbnlBe_WvRdy-02342DA2&_nc_ohc=mtb3KXnPoDYAX8fWh-Z&_nc_ht=scontent.fgdl3-1.fna&oh=49b5e8508bbdf036347142e8f63a7b21&oe=609A40F9"
            alt="..."
            width="65"
            class="mr-3 rounded-circle img-thumbnail shadow-sm"
          />
          <div class="media-body">
            <h4 class="m-0">Alejandro Ruiz</h4>
            <p class="font-weight-light text-muted mb-0">Web developer</p>
          </div>
        </div>
      </div>
      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <router-link class="nav-link text-dark font-italic" to="/" exact><i class="fas fa-calendar-day r-3 text-primary"></i> Citas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark font-italic" to="/pacientes" exact><i class="fas fa-user-injured mr-3 text-primary"></i> Pacientes</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fas fa-file-medical mr-3 text-primary"></i>
            Expedientes
          </a>
        </li>
      </ul>

      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
      Administrativo
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
            Proveedores
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
            Cotizaciones
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
            Cuentas
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
            Pagos
          </a>
        </li>
      </ul>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button @click="doLogout" class="btn btn-outline-primary">Logout</button>
      </div>
    </div>
    <!-- End vertical navbar -->
  </div>
</template>

<script>
export default {
  name: "navegacion",
  methods: {
      async doLogout() {
        try {
          await this.$store.dispatch("user/doLogout");
          this.$router.push({ name: "Login" });
        } catch (error) {
          console.error(error.message);
        }
      }
    },
};
</script>

<style lang="scss">
.router-link-active{
  background-color: rgba(93, 180, 238, 0.753);
}
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}
</style>
