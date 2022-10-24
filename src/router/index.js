import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Perfil from '../views/Perfil.vue'
import Borrarperfil from '../views/Borrarperfil.vue'
import Cerrarsesion from '../views/Cerrarsesion.vue'
import Estadisticas from '../views/Estadisticas.vue'
import Pending from '../views/Pending.vue'
import Datos from '../views/Datos.vue'
import Sending from '../views/Sending.vue'
import SearchFriend from '../views/BuscaAmigo.vue'
import ListaAmigos from '../views/ListaAmigos.vue'
import ListaAmigosAjena from '../views/ListaAmigosAjena.vue'
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
    {
        path: '/Pending',
        name: 'Pending',
        component: Pending
    },
    {
        path: '/Sending',
        name: 'Sending',
        component: Sending
    },
    {
        path: '/SearchFriend',
        name: 'SearchFriend',
        component: SearchFriend
    },
    {
        path: '/ListaAmigos',
        name: 'ListaAmigos',
        component: ListaAmigos
    },
    {
        path: '/ListaAmigosAjena',
        name: 'ListaAmigosAjena',
        component: ListaAmigosAjena
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router