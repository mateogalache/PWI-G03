<script>
const token = localStorage.getItem('accessToken');


export default {
  name: "App",
  data() {
    return {
      data: {},
      endIndex: 10,
      savedId: null
    }
  },
  beforeMount(){
    this.saveEvent();
    this.getEvents();
  },
  
  methods: {
     getEvents(){

        
      
        const response = fetch ('http://puigmal.salle.url.edu/api/v2/events/search?location=Barcelona',{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);

            console.log(response);                 
            
            
           
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
        
    }
    
  }
};
</script>




<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header3> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
        
</Header3>

<main>
    <section class = "container"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->

        <section class = "rectanguloredondeadeo2">           
            <input type="text" class="sinborde" name="Buscar Evento" placeholder="Buscar Evento">
            <a href = "calendarioevento"><div class = "rectanguloredondeadeo3">           
              Filtro
            </div></a>
        </section>           
        
        <section class = "rectanguloredondeadeo4"> 
            <input type="text" class="sinborde" name="Historial" placeholder="Historial">
        </section>
        
        <section class="eventocontainer"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
            <div class="subtitulo">
                <b>En tu zona</b>
            </div>

            <div class="evento1">
                <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)" :key="events.id"   v-on:click="saveEvent(events.id)">
                        <img  :src=  "events.image" alt="img" v-bind:error="errorImages">
                        <div class="eventName">
                            {{events.name}}
                        </div>
                </a>
            </div>
           
            <div class="centra">
               <div class="mostrarMas" v-on:click="showMore()">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>

            
        </section>
        
    </section>
    

</main>

        
<Footer2>  <!--Nos permite identificar al pie de la página (que no forma parte del contenido único)-->
        
</Footer2>

</template>

<style scoped>

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
        border: 2px solid black;
        width: 10rem;
        transition: all 300ms ease;
    }

    .mostrarMas:hover,.mostrarMenos:hover{
        color: white;
        background: black;
    }

    input{
        outline: none;
        width: 72%;
    }
    .evento1{
        display: flex;
        flex-wrap: wrap;
    }

    .evento{
        width: 50%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }
    .container{
       
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .eventocontainer{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        padding: 2em;
        margin-top: -15px;
        text-align: center;
        
    }

    img{
        width: 120px;
        height: 120px;
        margin: 1em;
    }

    .parejas{
        display: flex;
        flex-direction: row;
    }

    .rectanguloredondeadeo2{
        color: gray;
        height: 25px;
        width: 80%;
        background-color: transparent;
        border: 1px solid grey;
        display: flex;
        align-items:center;
        padding: 5px;
        border-radius: 50px;
        margin: 5%;
        margin-top: 5%;
        justify-content: space-between;
       
    }

    .rectanguloredondeadeo3{
        color: white;
        height: 25px;
        width: 75px;
        background-color: grey;
        border: 1px solid grey;
        display: flex;
        align-items:center;
        justify-content: center;
        border-radius: 50px;
        
       
    }

    .rectanguloredondeadeo4{
        color: gray;
        height: 50px;
        width: 80%;
        background-color: transparent;
        border: 1px solid grey;
        display: flex;
        align-items:top;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10%;
    }

    .sinborde {
        border: 0;
        background-color: transparent;
    }

    @media (min-width:1080px){
        input{
            width:90%;
        }
        .evento{
            width: 20%;
        }
        .container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .rectanguloredondeadeo2{
            color: gray;
            height: 25px;
            width: 90%;
            background-color: transparent;
            border: 1px solid grey;
            display: flex;
            align-items:center;
            padding: 5px;
            border-radius: 50px;
            margin: 25px;
            margin-right: 100px;
        }

        .rectanguloredondeadeo3{
            height: 25px;
            width: 75px;
            background-color: grey;
            border: 1px solid grey;
            display: flex;
            align-items:center;
            justify-content: center;
            border-radius: 50px;
            
        }

        .rectanguloredondeadeo4{
            color: gray;
            height: 50px;
            width: 90%;
            background-color: transparent;
            border: 1px solid grey;
            display: flex;
            align-items:top;
            border-radius: 5px;
            margin: 25px;
            margin-right: 100px;
            margin-top: -10px;
        }
        .eventocontainer{
            background-color: lightgrey;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            padding: 1em;
            width: 89%;
            text-align: center;
            margin-left: 3%;
            

        }

        .parejas{
            display: flex;
            justify-content: space-around;
        }
    }

</style>