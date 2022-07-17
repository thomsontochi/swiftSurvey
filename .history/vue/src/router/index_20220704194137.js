import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from 

const routes = [

    {
        path: "/",
        name: "dashboard",
        component: Dashboard
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