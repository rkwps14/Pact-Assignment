<template>
    <nav class="navbar navbar-expand navbar-light fixed-top bg-secondary  ">
    <div class="container justify-content-between" id="navbarNav">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link to="/" class="navbar-brand">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user">
          <h4 class="fw-bold ml-5">Welcome, {{user.name}}</h4>
          <li class="nav-item">
            <a class="nav-link h1 fw-bold text-danger" href="javascript::void(0)" v-on:click="Logout">Logout</a>
          </li>
        </ul>
      </div>
      <!-- <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
    </div>
  </nav>
  
</template>

<script>
export default {
    name:"Nav",
    props:['user'],
    methods:{
        Logout(){
            localStorage.removeItem('token');
            this.$router.push('/')
        }
    }
}
</script>