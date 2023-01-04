<script>

const token = localStorage.getItem('accessToken');
const email = localStorage.getItem('email');

export default {
  name: "App",
  data() {
    return {
      data: {},
      data2:{},
      imageLoad: true,
      savedId: null,
      endIndex: 10,
      
    }
  },
  beforeMount(){
    this.saveEvent();
    this.getEvents();
    this.getUser();
  },
  methods: {
    
    async getUser(){
        const response = await fetch (`http://puigmal.salle.url.edu/api/v2/users/search?s=${email}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data2 = data);

            console.log(this.data2[0].id);
            localStorage.setItem('userId',this.data2[0].id);
             
    },
     getEvents(){

        
      
        const response = fetch ('http://puigmal.salle.url.edu/api/v2/events/best',{
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
        <h2></h2>
    </section>
    <br>    
        <div class="container">
            <div class="eventocontainer" id = "event">               
                <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)" :key="events.id"  v-if="imageLoad" v-on:click="saveEvent(events.id)">
                        <img  :src=  "events.image" alt="img" v-bind:error="errorImages">
                        <div class="infoEvent">
                            <small><span>Lugar:</span> {{events.location}}</small>   
                            <small><span>Fecha:</span> {{events.eventStart_date.substring(0,10)}}</small> 
                        </div>
                        <div class="eventName">
                            {{events.name}}
                            
                        </div>
                        <div class="puntuation">
                            {{ parseFloat(events.avg_score).toFixed(2) }}
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

    .margenhome{
        display: flex;
        margin-left: 2%;
    }

    .margenhome h2{
        position: relative;
        
    }

    .margenhome h2:after{
        content:"Eventos destacados";
        animation: word 10s ease;
    }

    @keyframes word {
        0%{
            content: "Bienvenido/a a SalleEvents"
        }
       
        49%{
            content: "Bienvenido/a a SaleEvents"
        }
        50%{
            content: "Eventos destacados"
        }
        100%{
            content: "Eventos destacados"
        }
    }





    .margenhome h2:before{
        height: 100%;
        width:  200%;
        background: rgb(192, 227, 238);
        content: '';
        position: absolute;
        left:100%;
        animation: show 10s ease-in-out;
        
    }

    @keyframes show {
        0%{
            left:0;
        }
        25%{
            left:105%;
        }
        50%{
            left:0;
        }
        75%{
            left:105%;
        }
        100%{
            left:105%;
        }
    }


    small span{
        font-weight: bold;
    }
    small{
        font-size: 20px;
        transition: all 300ms ease;
    }

    .evento:hover .infoEvent{
        display: flex;
    }
    .infoEvent{
        position: absolute;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        text-align: center;
        transition: all 300s ease;
    }
    .puntuation{
        position: absolute;
        right: 4rem;
        top: 0rem;
        background: var(--main-bg-color);
        color: white !important;
        font-size: 15px;
        width: 3rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
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
        background: linear-gradient(white,var(--main-bg-color));
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--main-bg-color);
        position: relative;
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
    .evento{
        width: 20%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
       position: relative;
       transition: all 3s ease;
    }

    img{
        transition: all 300ms ease;
    }
    
    .evento:hover img{
        opacity: .2; 
         
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
        background: rgb(192, 227, 238);
    }
    

    .container{
        margin-left: 2rem;
        margin-bottom: 2rem;
        margin-right: 2rem;
        background: rgb(95, 158, 160,.3);
        padding: 1rem;
        border: 3px solid var(--main-bg-color);
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

        .puntuation{
            right:1.75rem;
        }
        .evento{
            width: 100%;
        }
        .centra{
            gap: 1rem;
        }

   }
</style>
