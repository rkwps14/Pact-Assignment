<template>
    <h1>All Users Data</h1>
    <router-link class="btn btn-primary newUser" to="users/add">Add New User</router-link>
    <table class="table container table-bordered mt-auto">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list" :key="item">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.created_at}}</td>
                <td><router-link :to="'/admin/users/edit/'+item.id" class="text-warning">Edit</router-link> | <router-link :to="'/admin/users/delete/'+item.id" class="text-danger">Delete</router-link></td>
            </tr>
        </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'Users',
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        let users = await axios.get("api/admin/all-users")
        this.list = users.data.data
    }
}
</script>
<style>
.newUser{
    margin-left: 64%;
    margin-bottom: 4px;
}
</style>