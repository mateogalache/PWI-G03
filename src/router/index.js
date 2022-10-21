import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Perfil from '../views/Perfil.vue'
import Borrarperfil from '../views/Borrarperfil.vue'
import Cerrarsesion from '../views/Cerrarsesion.vue'
import Estadisticas from '../views/Estadisticas.vue'
import Datos from '../views/Datos.vue'
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
        path: '/Perfil',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/Borrarperfil',
        name: 'Borrarperfil',
        component: Borrarperfil
    },
    {
        path: '/Cerrarsesion',
        name: 'Cerrarsesion',
        component: Cerrarsesion
    },
    {
        path: '/Estadisticas',
        name: 'Estadisticas',
        component: Estadisticas
    },
    {
        path: '/Datos',
        name: 'Datos',
        component: Datos
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router