<template>
    <div class="login">
        <section id="login">
        <div class="block-color"></div>

        <div class="container">
            <div class="row justify-content-center">
            <div class="col-12 col-sm-7 col-md-5">
                <div id="ventanalog">
                <div class="logo-login">
                    <div class="box-logo">
                    <img src="" class="img-responsive">
                    </div>
                </div>
                <div class="box-form">
                    <form @submit.prevent="doLogin">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <input v-model="userData.email" type="text" class="form-control input-login"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Usuario">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                        <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                        </span>
                        <input v-model="userData.password" type="password" class="form-control input-login" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Contraseña">
                    </div>

                    <button class="btn-style" type="submit">Ingresar</button>
                    </form>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex"

export default {
    name: "login",
    data() {
            return {
                userData: {
                    email: "",
                    password: ""
                }
            }
        },
    methods: {
        redirect(){
            this.$router.push({ name: "Home"})
        },
        resetData(){
            this.userData.email = this.userData.pass = ""
        },
        async doLogin(){
            try {
                await this.$store.dispatch("user/doLogin",{
                    email: this.userData.email,
                    password: this.userData.password
                })
                const login = await axios.post("http://127.0.0.1:8000/empleados/login/", this.userData)
                this.updateProfile(login.data.access_token)
                this.resetData();
                this.redirect();
            } catch (error) {
                console.error(error.message)
            }
        },
        async updateProfile(token){
            try {
                await this.$store.dispatch("user/updateProfile",{
                    name: token
                });

                console.log("funciono")
            } catch (error) {
                console.error(error.message)
            }
        }
    },
    computed:{
        ...mapState("user",["user"])
    }
};
</script>

<style lang="scss">
$white: #fff;
$black: #182b4d;
$m-white: #f7fafc;
$m-black: #868686;
$blue-gray: #bad3d6;

$principal: #007281;
$secundario: #6bc8ff;

$icons: #adb5bd;

// Fonts
$regular: "Raleway";

#login{
  background-color: $black;
  height: 100vh;
  background: linear-gradient(#182b4de6, #182b4df2);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  .block-color{
    background: linear-gradient(87deg,$principal,$secundario)!important;
    height: 250px;
    &:after{
      content: '';
      width: 0;
      height: 0;
      border-bottom: 50px solid $black;
      border-left: 1100px solid transparent;
      position: absolute;
      right: 0;
      top: 200px;
    }
  }
  .box-logo{
    width: 120px;
    height: 60px;
    display: flex;
    margin: 0 auto;
    padding-bottom: 25px;
    img{
      width: 100%;
      object-fit: contain;
    }
  }
  #ventanalog{
    background: $m-white;
    margin: 0 auto;
    padding: 25px;
    border-radius: 6px;
    form{
      text-align: center;
      .input-group-text{
        background-color: $white !important;
        color: $icons;
        border-right: 0 !important;
        border-radius: 6px 0 0 6px;
      }
      .input-login{
        border-left: 0 !important;
        color: $icons;
        padding-left: 5px;
        &:focus{
          box-shadow: none;
          border-color: $secundario;
        }
      }
      ::placeholder {
        color: $icons;
      }
      .btn-style{
        background: linear-gradient(to right, $principal 0%, $secundario 51%, $principal 100%);
        color: $white;
        padding: 5px 50px;
        border-radius: 6px;
        background-size: 200% auto;
        transition: 0.5s;
        &:hover {
          background-position: right center;
        }
      }
    }
  }
}
</style>