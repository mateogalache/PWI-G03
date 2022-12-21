<script>

const token = localStorage.getItem('accessToken');

export default {
  name: "App",
  data() {
    return {
      data: {},
      imageLoad: true,
      savedId: null,
      endIndex: 10
    }
  },
  beforeMount(){
    this.saveEvent();
    this.getEvents();
  },
  methods: {
     getEvents(){

        
      
        const response = fetch ('http://puigmal.salle.url.edu/api/v2/events',{
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

<Header3>
        
</Header3>

<main>
    <br>
    <section class = "margenhome">
        <h2>Eventos Destacados</h2>
    </section>
    <br>    
        <div class="container">
            <div class="eventocontainer" id = "event">               
                <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)" :key="events.id"  v-if="imageLoad" v-on:click="saveEvent(events.id)">
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
        </div>     
        
    
    

    

</main>

        
<Footer2>
        
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
        display: flex;
        justify-content: center;
    }

    .mostrarMas:hover,.mostrarMenos:hover{
        color: white;
        background: black;
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

    *{
        list-style: none;
    }
    main{
        overflow: hidden;
    }
    .margenhome{
        margin-left: 2%;
    }

    .container{
        margin-left: 2rem;
        margin-bottom: 2rem;
        margin-right: 2rem;
        background-color: lightgrey;
        padding: 1rem;
    }

    


    

   

   img{
       aspect-ratio: 1/1;
       width: 200px;
       margin: 1em;
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
        }   
   }
   @media (max-width: 1080px){
        .evento{
            width: 100%;
        }

   }
</style>
