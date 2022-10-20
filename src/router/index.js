import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
//import Contact from '../views/Contact.vue'
//import footer from '../components/footer.vue'
const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    }
    

    /*{
        path: '/',
        name: 'footer',
        component: footer,
    }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router