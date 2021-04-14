<template>
  <div class="login" @submit.prevent="doLogin">
    <section class="signin cf">
      <div class="avatar">
        <i class="icon fas fa-user-md"></i>
      </div>
      <form >
        <div class="inputrow">
          <label for="name" class="ion-person"></label>
          <input v-model="userData.email" type="text" id="name" placeholder="Username">
        </div>
        <div class="inputrow">
          <label for="pass" class="ion-locked"></label>
          <input v-model="userData.password" type="password" name="" id="pass" placeholder="Password">
        </div>
        <input type="submit" value="Login">
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import todoService from '../apiacces/todoService'

export default {
  name: "login",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    resetData() {
      this.userData.email = this.userData.pass = "";
    },
    async doLogin() {
      try {
        await this.$store.dispatch("user/doLogin", {
          email: this.userData.email,
          password: this.userData.password,
        });
        const login = await axios.post(
          "http://127.0.0.1:8000/empleados/login/",
          this.userData
        );
        this.updateProfile(login.data.access_token);
        this.resetData();
        this.redirect();
      } catch (error) {
        console.error(error.message);
      }
    },
    async updateProfile(token) {
      try {
        await this.$store.dispatch("user/updateProfile", {
          name: token,
        });
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<style lang="scss">
.login{
  background: #2e3441;
  background-image: -webkit-radial-gradient(top, circle cover, #4e7a89, #2e3441 80%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  align-items: center;
}
.signin {
  display: block;
  position: relative;
  width: 250px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(0,0,0,0.1);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
  -moz-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
  box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
}
.signin .avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 35px auto;
  border: 5px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  pointer-events: none;
}
.signin .icon {
  text-align: center;
  font-family: Ionicons;
  display: block;
  margin: 0 auto;
  height: 100%;
  line-height: 100px;
  font-size: 3em;
  color: white;
}
.signin .inputrow {
  position: relative;
}
.signin .inputrow label {
  position: absolute;
  top: 12px;
  left: 10px;
}
.signin .inputrow label:before {
  color: #538a9a;
  opacity: 0.4;
  -webkit-transition: opacity 300ms 0 ease;
  -moz-transition: opacity 300ms 0 ease;
  transition: opacity 300ms 0 ease;
}
.signin input[type="text"],
.signin input[type="password"] {
  padding: 10px 12px 10px 32px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid rgba(255,255,255,0.5);
  background-color: #fff;
  color: #333;
  font-size: 1em;
  font-weight: 300;
  outline: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition: border-color 300ms 0 ease;
  -moz-transition: border-color 300ms 0 ease;
  transition: border-color 300ms 0 ease;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.signin input[type="text"]:focus + label:before,
.signin input[type="password"]:focus + label:before {
  opacity: 1;
}
.signin input[type="submit"] {
  -webkit-appearance: none;
  height: 40px;
  padding: 10px 12px;
  margin-bottom: 10px;
  background-color: #538a9a;
  text-transform: uppercase;
  color: #fff;
  border: 0px;
  float: right;
  margin: 0;
  outline: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.signin input[type="submit"]:hover {
  background-color: #5e98a8;
}
.signin input[type="submit"]:active {
  background-color: #4a7b89;
}
.cf:before,
.cf:after {
  content: " ";
  display: table;
}
.cf:after {
  clear: both;
}
.cf {
  zoom: 1;
}

</style>