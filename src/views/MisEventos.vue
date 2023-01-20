<script>

const token = localStorage.getItem('accessToken');
const email = localStorage.getItem('email');
const id = localStorage.getItem('userId');

export default {
  name: "App",
  data() {
    return {
      data: {}, 
      data2: {},
      data3: {},
      data4: {},
      imageLoad: true,
      savedId: null,
      endIndex: 10,
      flag: false, //Booleano para mostrar los eventos acabados
      flag2: false, //Booleano para mostrar los eventos en progueso
      flag3: false, //Booleano para mostrar los eventos futuros
      isshow: false,
      showF: false, //Booleano para mostrar filtro
       
       
       

      
    }
  },
  
  beforeMount(){
    this.saveEvent();
    this.getEvents();
    
  },
  
  
  methods: {
    
    async getEvents(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/events`;
        try{
            const response = await fetch(url,{
               headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(response => response.json())
            .then(data => this.data = data);
            console.log(id);
            
            console.log(response);  
                        
        } catch(error){
            console.error(error);
        }          

            
    },   
     
    saveEvent(id){
        this.savedId = id;
        window.localStorage.setItem('event',this.savedId);
        console.log(id);
    },
    showMore(){
        this.endIndex = this.endIndex + 10;
        
        
    },
    showLess(){
        this.endIndex  =  this.endIndex - 10;
        
    },

    
    async showFinished(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/events/finished`;
        try{
            const response = await fetch(url,{
               headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(response => response.json())
            .then(data => this.data2 = data); //La data de la URL lo guarde en la variable auxiliar y copia de data, llamada data2
            console.log(id);
            console.log(response);  
            this.flag = true;
            this.flag2= false;
            this.flag3= false;

           
        } catch(error){
            console.error(error);
        }  
    },

    async showCurrent(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/events/current`;
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
            this.flag = false;
            this.flag2= true;
            this.flag3= false;

            
        } catch(error){
            console.error(error);
        }  
    },

    async showFuture(){
        const url = `http://puigmal.salle.url.edu/api/v2/users/${id}/events/future`;
        try{
            const response = await fetch(url,{
               headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(response => response.json())
            .then(data => this.data4 = data);
            console.log(id);
            console.log(response);  
            this.flag = false;
            this.flag2= false;
            this.flag3= true;
            
        
        } catch(error){
            console.error(error);
        }  
    },

    //Función para mostrar y quitar el filtro
    async showFilter(){
        if (this.showF == true){
            this.showF = false;
        } else{
            this.showF = true;
        }
        
    },
  }
};
</script>

<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header3.vue'
</script>


<template>

<Header2> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
        
</Header2>

<main> <!--Estamos indicando que esa etiqueta es un contenido principal-->

    <br>
    <section class = "margenmis">
        <h2>Mis Eventos </h2>
        <div class = "orden">
            <div class="ordenar" v-on:click="showFilter()">
                    <p>Ordenar por...</p>
                    <div class="triangulo"></div> 
                </div>    
            <div class="eventocontainer2" v-if="showF">
                    <small v-on:click="showFinished()">Terminados</small>
                    <small v-on:click="showFuture()">Próximos</small>
                    <small v-on:click="showCurrent()">En progreso</small>
            </div>
        </div>
    </section>
    <div class="subtitulo" v-if="!flag && !flag2 && !flag3">
                <h3>Todos</h3> 
            </div>
            <div class="subtitulo" v-if="flag">
                <h3>Eventos acabados</h3> 
            </div>
            <div class="subtitulo" v-if="flag3">
                <h3>Eventos por empezar</h3> 
            </div>
            <div class="subtitulo" v-if="flag2">
                <h3>Eventos en progreso</h3> 
            </div>
    <section class = "container5">
            
        <section class="eventocontainer5">
           
            <div class="eventocontainer" id = "event" >               
                <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)" v-if="!flag && !flag2 && !flag3"  v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a>

                <a href="Event" class="evento" v-for="events in data2.slice(0,endIndex)" v-if="flag && !flag2 && !flag3" v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a>
                
                <a href="Event" class="evento" v-for="events in data3.slice(0,endIndex)" v-if="!flag && flag2 && !flag3" v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a> 

                <a href="Event" class="evento" v-for="events in data4.slice(0,endIndex)" v-if="!flag && !flag2 && flag3" v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a> 
            </div>
            <div class="centra" v-if="!flag && !flag2 && !flag3">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data.length) && (endIndex + 1 <= data.length)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
            <div class="centra" v-if="flag">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data2.length) && (endIndex + 1 <= data2.length)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
            <div class="centra" v-if="flag2">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data3.length) && (endIndex + 1 <= data3.length)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
            <div class="centra" v-if="flag3">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data4.length) && (endIndex + 1 <= data4.length)">
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

    .orden{
        position: relative;
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
       margin-top: 0.5rem;
    }

    

    .centra{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
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
        width: 50%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }
    .eventocontainer{
        display: flex;
        flex-wrap: wrap;
    }
    .eventName{
        margin-top: -0.5rem;
    }
    .eventocontainer *{
        cursor: pointer;
        text-decoration: none;
        color: black;
    }

    .eventocontainer2 *{
        cursor: pointer;
        text-decoration: none;
        color: black;
    }

    .margenmis{
        margin-left: 2%;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .container5{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .eventocontainer5{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin-top: 50px;
    }

    img{
        width: 140px;
        height: 140px;
        margin: 1em;
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

    .eventocontainer2 smallv:hover{
        background: var(--main-bg-color);
    }

    .eventocontainer2 small{
        border: 1px solid black;
        background: lightgray;
    
    }


    .eventocontainer2{
        
        position: absolute;
        top: 1.3rem;
        display: flex;
        justify-content: center;
        flex-direction: column;        
        width: 7rem;   
        margin-top: 0.5rem;
        
        padding-top: .5rem;
        padding-left: .5rem;
        padding-bottom: .1rem;
    }


    @media (min-width:1080px){
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
            background-color: lightgrey;
            display: flex;
            flex-direction: column;
            width: 80%;
        }

        .parejas{
            display: flex;
            justify-content: space-around;
        }

        .evento{
            width: 100%;
          
        }

}
</style>
