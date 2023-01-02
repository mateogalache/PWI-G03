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
      flag: false,
      flag2: false,
      flag3: false,
      isshow: false,

      
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

    show(){
        
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
    </section>
    <section class = "container5">
              
        <section class="eventocontainer5">
            <div class="botones">
                <button class = "btn finished" v-on:click="showFinished()">Terminados</button>
                <button class = "btn future" v-on:click="showFuture()">Próximo</button>
                <button class = "btn current" v-on:click="showCurrent()">En progreso</button>
            </div>
            <div class="eventocontainer" id = "event" >               
                <a href="Event" class="evento" v-for="events in data" v-if="!flag && !flag2 && !flag3"  v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a>

                <a href="Event" class="evento" v-for="events in data2" v-if="flag && !flag2 && !flag3" v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a>
                
                <a href="Event" class="evento" v-for="events in data3" v-if="!flag && flag2 && !flag3" v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a> 

                <a href="Event" class="evento" v-for="events in data4" v-if="!flag && !flag2 && flag3" v-on:click="saveEvent(events.id)">
                        <div>
                            <img  :src=  "events.image" alt="img" >
                            <div class="eventName">
                             {{events.name}}
                            </div>
                        </div>
                </a> 
            </div>
            <div class="centra">
               <div class="mostrarMas" v-on:click="showMore()" v-if="(endIndex < data.length)">
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

    .centra{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }

    .botones{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10rem;
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
        width: 20%;
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

    .margenmis{
        margin-left: 2%;
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


}
</style>
