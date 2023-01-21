<script>

const token = localStorage.getItem('accessToken'); //Cogemos token del local storage
const id = localStorage.getItem('userId'); //Cogemos id del usuario del local storage
 
export default {
  name: "App",
  data() {
    return {
      data: [], //Data de los eventos que participo (todos)
      data2: [], //Data de los eventos que participo (acabados)
      data3: [], //Data de los eventos que participo (futuros)
      savedId: null, //Varibale para guardar id del evento clickado
      endIndex: 10, //Eventos que se muestran
      showF: false, //Booleano para mostrar filtro
      showAcabado: false, //Booleano para mostrar los eventos acabados
      showEmpezar: false, //Booleano para mostrar los eventos futuros
    }
  },
  
  beforeMount(){
    //Funciones que queremos cuando se cargue la página
    this.getEvents();    
  },
  
  
  methods: {
    //Función para coger todos los eventos en los que participa el usuario
    async getEvents(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/assistances`;
        try{
            const response = await fetch(url,{
               headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(response => response.json())
            .then(data => this.data = data);
             
                        
        } catch(error){
            console.error(error);
        }          
        
            
            

            
    },   
     //Función para coger el id del evento clickado
    saveEvent(id){
        this.savedId = id;
        window.localStorage.setItem('event',this.savedId);
        console.log(id);
    },
    //Función para mostrar más eventos
    showMore(){
        this.endIndex = this.endIndex + 10;
        
        
    },
    //Función para mostrar menos eventos
    showLess(){
        this.endIndex  =  this.endIndex - 10;
        
    }, 
    //Función para mostrar y quitar el filtro
    async showFilter(){
        if (this.showF == true){
            this.showF = false;
        } else{
            this.showF = true;
        }
        
    },
    //Función para coger los eventos en los que el usuario ha participado
    async getAcabado(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/assistances/finished`;
        try{
            const response = await fetch(url,{
               headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(response => response.json())
            .then(data => this.data2 = data);
            console.log(id);
            
            console.log(response);  
            this.showAcabado = true;
            this.showEmpezar = false;
                        
        } catch(error){
            console.error(error);
        } 
    },
    //Función para coger los eventos en los que el usuario participará
    async getEmpezar(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/assistances/future`;
        try{
            const response = await fetch(url,{
               headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(response => response.json())
            .then(data => this.data3 = data);
            console.log(id);
            
            console.log(response);  
            this.showAcabado = false;
            this.showEmpezar = true;
                        
        } catch(error){
            console.error(error);
        } 
    },
  }
};
</script>

<script setup>
//Importamos header y footer
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header3.vue'
</script>


<template>

<Header2> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
        
</Header2>

<main> <!--Estamos indicando que esa etiqueta es un contenido principal-->

    <br>
    <section class = "margenmis">
        <h2>Eventos que participo</h2>
        <div class = "orden">
           <div class="ordenar" v-on:click="showFilter()">
                <p>Ordenar por...</p>
                <div class="triangulo"></div> 
            </div>        
            <div class="filtros" v-if="showF">
                <small v-on:click="getAcabado()">Acabados</small>
                <small v-on:click="getEmpezar()">Por empezar</small>
            </div>
        </div>       
    </section>
    
    <div class="subtitulo" v-if="!showAcabado && !showEmpezar">
        <h3>Todos</h3> 
    </div>
    <div class="subtitulo" v-if="showAcabado">
        <h3>Eventos acabados</h3> 
    </div>
    <div class="subtitulo" v-if="showEmpezar">
        <h3>Eventos por empezar</h3> 
    </div>
    
    <section class = "container5">
            
        <section class="eventocontainer5">
            <div class="eventocontainer" id = "event" >               
                <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)"  v-on:click="saveEvent(events.id)" v-if="!showAcabado && !showEmpezar">
                        
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        
                </a>
                <a href="Event" class="evento" v-for="events in data2.slice(0,endIndex)"  v-on:click="saveEvent(events.id)" v-if="showAcabado">
                        
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        
                </a>  
                <a href="Event" class="evento" v-for="events in data3.slice(0,endIndex)"  v-on:click="saveEvent(events.id)" v-if="showEmpezar">
                        
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        
                </a>           
            </div>
            <div class="centra" v-if="!showAcabado && !showEmpezar">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data.length) && (endIndex + 1 <= data.length)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
            <div class="centra" v-if="showAcabado">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data2.length) && (endIndex + 1 <= data2.length)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
            <div class="centra" v-if="showEmpezar">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data3.length) && (endIndex + 1 <= data3.length)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
        </section>
    </section>
    <div class="transparent6"></div> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 

    
</main>

        
<Footer2> <!--Nos permite identificar al pie de la página (que no forma parte del contenido único)-->
        
</Footer2>

</template>

<style scoped>

  

    .evento img{
        object-fit: cover;
        background: linear-gradient(white,var(--main-bg-color));
        border: 1px solid var(--main-bg-color);
        width: 10rem;
        aspect-ratio: 1/1;
        
    }
    .evento img:after{            
        content: "NO IMAGE";
        position: absolute;
        transform: translate(-50%,-50%);
        color: black;
        top: 50%;
        left: 50%;
        z-index: 1;
    }
    .subtitulo  {
        margin-left: .5rem;        
    }
    *{
        user-select: none;
    }

    .orden{
        position: relative;
    }
    
    .filtros small{
        transition: all 300ms ease;
        cursor: pointer;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
        padding-left: .5rem;
       width: 7rem;
       margin-left: -.5rem;
        background: rgb(231, 230, 230);
       height: 2rem;
       display: flex;
       align-items: center;
       animation: desplegar .5s ease;
    }

    @keyframes desplegar {
        0%{
            height: 1px;
        }
        100%{
            height: '';
        }
    }

    .filtros small:hover{
        background: var(--main-bg-color);
    }

    .filtros{
        
        position: absolute;
        top: 1.3rem;
        display: flex;
        justify-content: center;
        flex-direction: column;        
        width: 7rem;       
        margin-top: -1rem;
        
        padding-top: .5rem;
        padding-left: .5rem;
        padding-bottom: .1rem;
    }
    
    .centra{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    
    .mostrarMas,.mostrarMenos{
        cursor:pointer;
        margin-top: 2rem;
        border-radius: 50px;
        border: 2px solid var(--main-bg-color);
        width: 10rem;
        transition: all 300ms ease;
        display: flex;
        justify-content: center;
        
    }

    .mostrarMas:hover,.mostrarMenos:hover{
        color: white;
        background: var(--main-bg-color);
    }

    .evento img{
        object-fit: cover;
    }
    .evento{
        position: relative;
        width: 50%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        color: black;
        gap: 1rem;
    }
    .eventocontainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;

    }
    .eventName{
        margin-top: -0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .eventocontainer *{
        cursor: pointer;
        text-decoration: none;
        color: black;
    }

    .triangulo{        
        transform: rotate(270deg) scale(.6);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: .1rem;
    }
   
    .ordenar{
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 50px;
        position: relative;
        height: 1rem;
        padding-left: .5rem;
        width: 7rem;
        cursor: pointer;
        background: white;
       z-index: 1;
    }
    .margenmis{
        margin-left: 2%;
        margin-right: 1rem;
        display: flex;
        
        justify-content: start;
        flex-direction: column;
    }

    .container5{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }

    .eventocontainer5{
        background-color: var(--secundary-bg-color);
        border: 3px solid var(--main-bg-color);
        display: flex;
        flex-direction: column;
        padding-left: 1em;
        padding-right: 1em;
        padding-bottom: 1em;
        justify-content: center;
        flex-wrap: wrap;
    }

    

    .parejas{
        display: flex;
        flex-direction: row;
    }

    .parejas:hover{
        filter: brightness(5px);
    }

    .titulo{
        margin-top: 30px;
        display: flex;
       
    }
    

    @media (min-width:1080px){
        .eventocontainer{
            justify-content: start;
        }
        .subtitulo{
            margin-left: 2.5rem;
            font-size: 20px;
        }
        .filtros{
            margin-top: -.5rem;
        }
        .ordenar{
            margin-top:.5rem;
        }
        .margenmis{
            flex-direction: row;
            align-items: center;
            gap: 2rem;
        }
        .evento{
            width: 20%;
        }
        h2{
            font-size: 40px;
        }
 
        .container5{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
       
        .eventocontainer5{
            
            display: flex;
            flex-direction: column;
            width: 90%;
            justify-content: start;
        }

        .parejas{
            display: flex;
            justify-content: space-around;
        }


}
</style>
