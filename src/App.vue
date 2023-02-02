<template>
<div id="app">
  <Nav :user="user" />
  <div class="auth-wrapper">
    <div class="auth-inner">
      <router-view :user="user" />
    </div>
  </div>
</div>
</template>
<script>
import Nav from './components/Nav.vue'
import axios from 'axios'
export default {
  name: 'App',
  components:{Nav},
  data(){
        return {
            user:null
        }
    },
    async created(){
        const response = await axios.get('api/admin/users');
        this.user = response.data.data;
        
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-brand{
  margin-left: 30px;
}





</style>
