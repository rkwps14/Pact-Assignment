<template>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <!-- <img src="../../images/logo.svg" alt="logo"> -->
                <h1 class="text-primary">Packt + Login</h1>
              </div>
              <form class="pt-3">
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" v-model="email" id="exampleInputEmail1" placeholder="Username">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" v-model="password" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" v-on:click="login">Login IN</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="text-center mt-4 fw-light">
                  Don't have an account? <a href="/signup" class="text-primary">Click here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import VueSession from 'vue-session'
export default {
    name:"Login",
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result = await axios.post("api/login",{
                email:this.email,
                password:this.password
            });
            localStorage.setItem('token',result.data.token);
            this.$router.push('/dashboard');
            // if(result.data.token != ""){
            //     window.location.href = "http://localhost:8080/dashboard";
            // }
        }
    }
}
</script>