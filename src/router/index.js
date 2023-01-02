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
import Amistades from '../views/Amistades.vue'
import Chats from '../views/Chats.vue'
import Chat from '../views/Chat.vue'
import PerfilAmigo from '../views/PerfilAmigo.vue'
import Event from '../views/Event.vue'
import PerfilAjeno from '../views/PerfilAjeno.vue'
import Add from '../views/Add.vue'
import Search from '../views/Search.vue'
import Home from '../views/Home.vue'
import TimeLineEvent from '../views/TimeLineEvent.vue'
import CalendarioEvento from '../views/CalendarioEvento.vue'
import MisEventos from '../views/MisEventos.vue'
import Events from '../views/Events.vue'
import Contactanos from '../views/Contactanos.vue'
import Calendario from '../views/Calendario.vue'
import Carga from '../views/Carga.vue'
import CompartirEventoAmigos from '../views/CompartirEventoAmigos.vue'
import EventsPart from '../views/EventsPart.vue'

/*Declaramos todas las vistas, para poder navegar por la web sin problemas y les ponemos nombre a las paginas.*/
const routes = [
    
    {
        path: '/Login',
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

    {
        path: '/Amistades',
        name: 'Amistades',
        component: Amistades
    },
    {
        path: '/Chats',
        name: 'Chats',
        component: Chats
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/Event',
        name: 'Event',
        component: Event
    },
    {
        path: '/PerfilAmigo',
        name: 'PerfilAmigo',
        component: PerfilAmigo
    },
    {
        path: '/PerfilAjeno',
        name: 'PerfilAjeno',
        component: PerfilAjeno
    },
    {
        path: '/Add',
        name: 'Add',
        component: Add
    },
    {
        path: '/Search',
        name: 'Search',
        component: Search
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/TimeLineEvent',
        name: 'TimeLineEvent',
        component: TimeLineEvent
    },
    {
        path: '/CalendarioEvento',
        name: 'CalendarioEvento',
        component: CalendarioEvento
    },
    {
        path: '/Events',
        name: 'Events',
        component: Events
    },

    {
        path: '/MisEventos',
        name: 'MisEventos',
        component: MisEventos
    },

    {
        path: '/Contactanos',
        name: 'Contactanos',
        component: Contactanos
    },

    {
        path: '/Calendario',
        name: 'Calendario',
        component: Calendario
    },

    {
        path: '/CompartirEventoAmigos',
        name: 'CompartirEventoAmigos',
        component: CompartirEventoAmigos
    },
    {
        path: '/',
        name: 'Carga',
        component: Carga
    },
    {
        path: '/EventsPart',
        name: 'EventsPart',
        component: EventsPart
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router