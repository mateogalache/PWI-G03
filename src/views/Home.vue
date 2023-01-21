<script>
//Guradamos en constantes el token y el mail
//El token lo necesitamos como header para tener acceso a difrentes sitios de la API
//El mail lo utilizaremos para coger el id del usuario ya que este es necesario en muchas páginas y el home al ser la primera nos aseguramos de ya tener guardado el id.
const token = localStorage.getItem('accessToken'); 
const email = localStorage.getItem('email');


export default {
  name: "App",
  data() {
    return {
      data: [], //Data donde guardaremos los eventos
      endIndex: 10, //Varible que define cuantos eventos queremos ver en pantalla.
      
    }
  },
  //Funciones que queremos que se hagan cuando se cargue la página, por lo tanto no depende de nada de lo que hagamos en esta 
  beforeMount(){   
    this.getEvents();     
  },
  mounted(){
    //La primera vez que entras a la página no se conecta bien a la API para coger los eventos (desconocemos porque) entonces hacemos una función para recragar la página 
    //si es la primera vez que entra a la página.
    (function()
        {
        if( window.localStorage )
        {
            if( !localStorage.getItem('firstLoad') )
            {
            localStorage['firstLoad'] = true;
            window.location.reload();
            }  
            else
            localStorage.removeItem('firstLoad');
        }
        })();
  },
  
    methods: {
    
    //Función para coger la información de los eventos mejor valorados
     async getEvents(){     
        const response = await fetch ('http://puigmal.salle.url.edu/api/v2/events/best',{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}` //Ponemos el token en el header para poder acceder
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data); //Guardamos la data que nos devuelve en nuestra variable 'data'

                            
            
            
           
    },
    
    //Función para guardar en el LocalStorage el id del evento en el que hemos clickado
    saveEvent(id){
        this.savedId = id; //Le pasamos como parametro el id del evento y lo guardamos en la variable 'saveId' que luego la guardamos en el LocalStorage
        window.localStorage.setItem('event',this.savedId);
        console.log(id);
    },
    //Función para ver más eventos, aumentado endIndex.
    showMore(){
        this.endIndex = this.endIndex + 10;       
    },
    //Función para ver menos eventos, disminuyendo endIndex.
    showLess(){
        this.endIndex  =  this.endIndex - 10;        
    }    
  }
};
</script>

<script setup>
//Importamos el header y el footer
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>




<template>

<Header3>
        
</Header3>

<main>
    <br>
    <div class = "margenhome"> <!--Clase para poner margenes al título-->
        <h2></h2> <!--El título tiene una animación hecha en el css, así que el contenido está explicado en esa sección-->
    </div>
    <br>    
    <article class="container">
        <section class="eventocontainer" id = "event">
            <!--Utilizamos v-for para mostrar en bucle los la información que queramos de los eventos-->               
            <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)" :key="events.id"   v-on:click="saveEvent(events.id)"> <!--Cuando clickemos se guardará el id del evento clickado con la función saveEvent-->
                    <img  :src=  "events.image" alt="img"> <!--Mostramos la imagen del evento-->
                    <div class="infoEvent">
                        <small><span>Lugar:</span> {{events.location}}</small>   
                        <small><span>Fecha:</span> {{events.eventStart_date.substring(0,10)}}</small> <!--Mostramos la data de cuando empieza el evento, uitilizamos la función de substring para sólo mostrar los diez primeros dígitos ya que son los únicos que nos interesan-->
                    </div>
                    <div class="eventName">
                        {{events.name}}
                        
                    </div>
                    <div class="puntuation">
                        {{ parseFloat(events.avg_score).toFixed(2) }} 
                        <!--Qeueremos mostrar la puntuación de cada evento, pero nos devuelve 4 decimales, para sólo mostrar dos utilizamos toFixed(2) 
                            que para utilizarlo necesitamos que el valor sea un float por lo que utilizamos parseFloat para transformarlo en float-->
                    </div>
            </a>          
        </section> 
        <section class="centra">
            <!--Tenemos dos botones que nos permitirán mostrar más o menos eventos (no los tenemos con tag de button ya que nos tranformaba el diseño y no podiamos cambiarlo)-->
            <div class="mostrarMas" v-on:click="showMore()">
                <b>Mostrar más</b>
            </div> 
            <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)"> <!--Solo se muestra si endIndex es mayor que diez así no se mostrará cuando solo haya diez-->
                <b>Mostrar menos</b>
            </div> 
        </section>
    </article>             
        
    
    

    

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

    /*Para hacer la animación del título ponemos un :after del tag de h2 con el contenido que queremos al final */
    /*Después inicamos una animación con keyframes y decimos el valor que queremos que tenga el contenido en cada fase */
    .margenhome h2:after{
        content:"Eventos destacados";
        animation: word 10s ease;
    }

    @keyframes word {
        0%{
            content: "Bienvenido/a a SalleEvents"
        }
       
        49%{
            content: "Bienvenido/a a SalleEvents"
        }
        50%{
            content: "Eventos destacados"
        }
        100%{
            content: "Eventos destacados"
        }
    }



    /*Para hacer que las palabras se vean poco a poco hemos puesto un rectangulo del mismo color que el fondo que se mueve de izquierda a derecha del texto para mostrarlo
    u ocultarlo */

    .margenhome h2:before{
        height: 100%;
        width:  200%;
        background: var(--secundary-bg-color);
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
        background: var(--secundary-bg-color);
    }
    

    .container{
        margin-left: 2rem;
        margin-bottom: 2rem;
        margin-right: 2rem;
        background: var(--third-bg-color);
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
