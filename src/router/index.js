import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Amistades from '../views/Amistades.vue'
const routes = [
    
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Amistades',
        name: 'Amistades',
        component: Amistades
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router