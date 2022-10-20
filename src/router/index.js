import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'
const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router