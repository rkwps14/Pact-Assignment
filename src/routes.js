import { createWebHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Dashboard from "./components/Dashboard.vue";
import Users from "./components/admin/Users.vue";
import AddUser from "./components/admin/users/AddUser.vue"
import EditUser from "./components/admin/users/EditUser.vue"
import Books from "./components/admin/Books.vue"
import AddBook from "./components/admin/books/AddBook.vue"
import EditBook from "./components/admin/books/EditBook.vue"

const routes = [
    {
        name:'Home',
        path:'/',
        component: Home
    },{
        name:'Login',
        path:'/login',
        component: Login
    },{
        name:'Signup',
        path:'/signup',
        component: Signup
    },{
        name:'Dashboard',
        path:'/dashboard',
        component: Dashboard
    },
    {
        name:Users,
        path:'/admin/users',
        component: Users
    },
    {
        name:AddUser,
        path:'/admin/users/add',
        component: AddUser
    },
    {
        name:EditUser,
        path:'/admin/users/edit/:id',
        component: EditUser
    },
    {
        name: Books,
        path: '/admin/books',
        component: Books
    },
    {
        name: AddBook,
        path: '/admin/books/add',
        component: AddBook
    },{
        name:EditBook,
        path:'/admin/books/edit/:id',
        component: EditBook
    }
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;