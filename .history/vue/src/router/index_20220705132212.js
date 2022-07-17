import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from "../views/Dashboard.vue"

const routes = [

    {
        path: "/",
        redirect:'/dashboard',
        name: "dashboard",
        component: D
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;