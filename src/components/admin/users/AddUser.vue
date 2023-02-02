<template>
    <div class="container-scroller">
    <div class="page-body-wrapper full-page-wrapper">
      <div class="content-wrapper align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-8 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <!-- <img src="../../images/logo.svg" alt="logo"> -->
                <h1 class="text-primary fw-bold bg-warning text-dark">Add New User</h1>
              </div>
              <form class="pt-3">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="name" id="exampleInputName" placeholder="Username">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" v-model="email" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" v-model="password" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" v-on:click="addNewUser">Add </a>
                </div>
                <div class="text-center mt-4 fw-light">
                  <router-link to="/admin/users" class="text-primary">All Users</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="popupModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-body bg-success text-white fw-bold">
            <p class="text-center" id="msg"></p>
        </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'AddUser',
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        async addNewUser(){
            let result = await axios.post("api/register",{
                name:this.name,
                email:this.email,
                password:this.password,
            });
            if(result != ""){
                $('#msg').text(result.data.message);
                $('#popupModal').show();

                setTimeout(function() {
                    $('#popupModal').hide();
                }, 3000);
            }
        }
    }
}
</script>
