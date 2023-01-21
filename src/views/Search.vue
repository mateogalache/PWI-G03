<script>
const token = localStorage.getItem('accessToken'); //Cogemos token del local storage




export default {
  name: "App",
  data() {
    return {
      data: [], //Data de los eventos en zona (Barcelona)
      data2: [], //Data de los eventos buscados
      endIndex: 10, //Numero de eventos que se pueden ver
      savedId: null, //Id de el evento clickado
      showZona: true, //Booleano para saber que eventos mostrar
      showBusqueda: false, //Booleano para saber que eventos mostrar
      //Valores de busqueda
      busqueda: '',
      location: '',
      date: '',
      //Booleano para mostrar popup de filtro
      filter: false,
      
    }
  },
  beforeMount(){    
    //Función que queremos que se haga cuando carga la página
    this.getEvents();    
  },
  
  
 
  methods: {
    //Función para coger todos los eventos en Barcelona
     async getEvents(){
       
            const response = await fetch (`http://puigmal.salle.url.edu/api/v2/events/search?location=Barcelona`,{
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Bearer ${token}`
                        },
                    })
                        
                        .then(response => response.json())
                        .then(data => this.data = data);
                        
            
            
           
    },
   //Función para guardar el id del evento clickado
    saveEvent(id){
        this.savedId = id;
        window.localStorage.setItem('event',this.savedId);
        console.log(id);     
    },
    //Función para augmentar cuantos eventos se ven
    showMore(){
        this.endIndex = this.endIndex + 10;
        
    },
    //Función para disminuir cuantos eventos se ven
    showLess(){
        this.endIndex  =  this.endIndex - 10;
        
    },
    //Las sisugientes funciones hacen todas lo mismo: coger los eventos según la busqueda del usuario.
    //El ususario puede buscar por tres filtros por lo que hemos puesto todas las posiibles combinaciones
    async busquedaEventos() {
        
        
        if (!this.busqueda && this.location && this.date){
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?location=${this.location}&date=${this.date}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        }
        else if (!this.location && this.date && this.busqueda){
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?keyword=${this.busqueda}&date=${this.date}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        } 
        else if (!this.date && this.busqueda && this.location){
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?keyword=${this.busqueda}&location=${this.location}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        }
        else if (!this.date && !this.location){
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?keyword=${this.busqueda}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        }
        else if (!this.date && !this.busqueda){
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?location=${this.location}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        } 
        else if (!this.buqueda && !this.location){
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?date=${this.date}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        }
        else{
            
            const url = `http://puigmal.salle.url.edu/api/v2/events/search?keyword=${this.busqueda}&location=${this.location}&date=${this.date}`;
            try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
      } catch (error) {
        console.error(error);
      }
        }
        
    },
    //Función para mostrar filtro
    showFilter(){
        this.filter = true;
    },
    //Función para cerrar filtro
    leaveFilter(){
        this.filter = false;
    },
    //Función para limpiar el filtro
    clearFilter(){
        this.filter = false;
        this.location = '';
        this.date = '';
    },
     
    
  }
};
</script>




<script setup>
//Importamos header y footer
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header3> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
        
</Header3>

<main>

    <div class="filtro" v-if="filter">
        <h3><b>FILTRAR</b></h3>
        <input type="text" v-model="location" placeholder="Lugar del evento">
        <input type="date" v-model="date" placeholed="Data de inicio">
        <div class="botones">
            <button v-on:click="leaveFilter()">ACEPTAR</button>
            <button v-on:click="clearFilter()">CANCELAR</button>
        </div>
    </div>

    <div class="margenleft">
        <h2>Buscar eventos</h2>
    </div>
    <section class = "container"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->

        
        <section class = "rectanguloredondeadeo2" >           
            <input type="text" class="sinborde" name="Buscar Evento" placeholder="Buscar Evento" v-model="busqueda">
            <div class="busqueda">
                <div class="element">
                    <img src="src/assets/search.png" alt="img" v-on:click= "busquedaEventos()">
                </div>
                
               <aside class="filtrobutton" v-on:click="showFilter()">          
                    Filtro
               </aside> 
            </div>
            
        </section>           
        
        
       
        <section class="eventocontainer" > <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
            <div class="subtitulo" v-if="showZona">
                <b>En tu zona</b>
            </div>

            <div class="subtitulo" v-if="showBusqueda">
                <b>Eventos disponibles</b>
            </div>

            <div class="evento1">
                <a href="Event" class="evento" v-for="events in data.slice(0,endIndex)" :key="events.id"   v-on:click="saveEvent(events.id)" v-if="showZona" >
                        <img  :src=  "events.image" alt="img" >
                        <div class="eventName">
                            {{events.name}}
                        </div>
                </a>
                <a href="Event" class="evento" v-for="events in data2.slice(0,endIndex)" :key="events.id"   v-on:click="saveEvent(events.id)" v-if = "showBusqueda" >
                        <img  :src=  "events.image" alt="img" >
                        <div class="eventName">
                            {{events.name}}
                            {{events.owner_id}}
                        </div>
                </a>
            </div>
           
            <div class="centra" >
               <div class="mostrarMas" v-on:click="showMore()"  v-if="!((endIndex > data2.length) && showBusqueda)">
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

<section class = "rectanguloN" v-if="filter"></section>

</template>

<style scoped>

    .barra{
        border: 3px solid var(--main-bg-color);
    }
    .evento img{
        object-fit: cover;
        background: linear-gradient(white,var(--main-bg-color));
        border: 1px solid var(--main-bg-color);
        
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
    .filtrobutton:hover{
        background: var(--main-bg-color);
        color: white;
    }
    .filtrobutton{
        font-size: 18px;
        font-weight: bolder;
        cursor: pointer;
        border-radius: 50px;
        padding-left: .5rem;
        padding-right: .5rem;
        border: 2px solid var(--main-bg-color);
        color: black;
        transition: all 300ms ease;
    }
    

    .element{
        border: 2px solid black;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .element img{
        width: 18px;
        height: 18px;        
        object-fit: cover;
    }
    .rec{
        height: 1rem;
    }
    .his{
        position: absolute;
        right: 0.5rem;
        bottom: -1.1rem;
        color: black;
        font-size: 12px;
        cursor: pointer;
    }
    .rectanguloN{
        
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: black;
        opacity: 70%;
        bottom: 0;
        z-index:500;
    }

    .botones button:hover{
        background: var(--main-bg-color);
        color: white;
    }

    .botones button{
        border-radius: 20px;
        padding: 5px;
        border: 1px solid var(--main-bg-color);
        cursor: pointer;
        background: white;
        transition: all 300ms ease;
    }

    .botones{
        display: flex;
        gap: 1rem;
        margin-bottom: 0.5rem;
    }

    .filtro input{
        width: 95%;
    }
    .filtro{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 501;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: white;
        padding: 1rem;
        border: 1px solid var(--main-bg-color);
        border-radius: 20px;
        width: 17rem;
        height: 12rem;
        gap: 1rem;
    }
    .margenleft{
        margin-left: 3rem;
    }
    *{
        text-decoration: none;
    }
    
    .busqueda button{
        text-decoration: none;
        color: black;
        border-radius: 50px;
        border: 2px solid black;
        width: 4rem;
        height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .busqueda{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;      
    }
    
    b{
        font-size: 20px;
    }
    .centra{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }
    
    .mostrarMas,.mostrarMenos{
        cursor:pointer;
        margin-top: 2rem;
        border-radius: 50px;
        border: 2px solid var(--main-bg-color);
        width: 12rem;
        transition: all 300ms ease;
    }

    .mostrarMas:hover,.mostrarMenos:hover{
        color: white;
        background: var(--main-bg-color);
    }

    input{
        outline: none;
        width: 72%;
    }
    .evento1{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
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
    }
    .container{
       
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .eventocontainer{
        background: var(--secundary-bg-color);
        display: flex;
        flex-direction: column;
        padding: 2em;
        margin-top: -15px;
        text-align: center;
        border: 3px solid var(--main-bg-color);
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
       position: relative;
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
        h2{
            font-size: 30px;
        }
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
            background-color: var(--secundary-bg-color);
            border: 1px solid grey;
            display: flex;
            align-items:center;
            padding: 5px;
            border-radius: 50px;
            margin: 25px;
            margin-right: 100px;
            border: 3px solid var(--main-bg-color);
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
    @Media (max-width: 1080px){
        .margenleft{
            margin-left: 2rem;
        }
        .centra{
            gap: 1rem;
        }
        .centra *{
            width: 9rem;
        }
        .busqueda{
            gap: 0.2rem;
        }
        
    }

</style>