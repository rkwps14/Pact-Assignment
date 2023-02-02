<template>
    <h1 class="fw-bold mb-5 pb-5">Admin Panel</h1>
    <router-link to="/admin/books" class="h3 fw-bold bg-info">Books Detail View</router-link>&nbsp;&nbsp;
    <router-link to="/admin/users" class="h3 fw-bold bg-info">Total Users View</router-link><br><br>
    
</template>

<script>

export default {
    name:"Dashboard",
    props:["user"]
}
</script>