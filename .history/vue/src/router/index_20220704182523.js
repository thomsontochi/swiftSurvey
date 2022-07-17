import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        path: '/',
        name: 'Login'
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;