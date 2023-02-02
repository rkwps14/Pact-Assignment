<template>
    <h1 class="bg-warning fw-bold mt-5">Books Data</h1>
    <router-link class="btn btn-primary newUser" to="/admin/books/add">Add New Books</router-link>
    <table class="table container table-bordered mt-auto">
        <thead>
            <tr class="bg-info">
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Image</th>
            <!-- <th scope="col">Description</th> -->
            <th scope="col">Genre</th>
            <th scope="col">Published</th>
            <th scope="col">Publisher</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="item in list" :key="item">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.author}}</td>
                <td><img v-bind:src="item.image"  /></td>
                <td>{{item.genre}}</td>
                <td>{{item.published}}</td>
                <td>{{item.publisher}}</td>
                <td><router-link :to="'/admin/books/edit/'+item.id" class="text-warning">Edit</router-link> | <a href="javascript::void(0)" v-on:click="deleteBook(item.id)" class="text-danger">Delete</a></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios'
export default {
    name:'Books',
    data(){
        return{
            list:[],
        }
    },
    async mounted(){
        let result = await axios.get("api/admin/all-books")

        this.list = result.data.data;
        this.totalBooks = result.data.data.length;
    },
    methods:{
        async deleteBook(id){
            let result = await axios.get("api/admin/store-books/delete/"+id);
                if(result != ""){
                    console.log(result);
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
<style>
.newUser{
    margin-left: 64%;
    margin-bottom: 4px;
}
</style>