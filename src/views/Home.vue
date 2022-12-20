<script>
export default {
  name: "App",
  data() {
    return {
      data: {},
      
    }
  },
  beforeMount(){
    this.getEvents();
  },
  methods: {
     getEvents(){

        
      
        const response = fetch ('http://puigmal.salle.url.edu/api/v2/events',{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + window.localStorage.getItem('accesToken')
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);

            console.log(response);                    
            
            
           
    },
    
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
            <div class="eventocontainer" id = "event" v-for="events in data" :key="events.id" >
                <div class="evento">
                    <img  :src=   "events.image" >
                    <div class="eventName">
                        {{ events.name }}
                    </div>
                </div>
                
               
                
            </div> 
        </div>     
        
    
    

    

</main>

        
<Footer2>
        
</Footer2>

</template>

<style scoped>

    .eventName{
        margin-top: -0.5rem;
    }
    .eventocontainer *{
        cursor: pointer;
        
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
        
    }

    .eventocontainer{
        gap: -0.5rem;
        justify-content: center;
        display: flex;  
        align-items: center;
        flex-direction: column;     
       
    }


    .parejas{
        display: flex;
        flex-direction: row;
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
</style>
