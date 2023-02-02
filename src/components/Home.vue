<template>
<h1 class="text-danger mt-5">Pack+ Courses</h1>
<div class="container-fluid row grid">
    <div class="col-md-3 mt-5" v-for="item in list" :key="item.id">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" v-bind:src="`${item.image}`" v-bind:alt="image">
    <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.description}}</p>
        <a v-bind:href="'{{item.id}}'" class="btn btn-primary">Read more</a>
    </div>
    </div>
    </div>
</div>
    
</template>
<script>
import axios from "axios"
export default {
    name:"Home",
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        let result = await axios.get("https://fakerapi.it/api/v1/books?_quantity=100")
        
        this.list = result.data.data
        console.log(result.data.data)
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

.grid {
    margin-left: 70px;
}

</style>