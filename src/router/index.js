import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Contact from '../views/Contact.vue'
const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router