<script>

const token = localStorage.getItem('accessToken');
const event_id = window.localStorage.getItem('event');
const user_id = localStorage.getItem('userId');

export default {
  name: "App",
  data() {
    return {
      data: {},
      data2: {},
      editing: false,
      nameediting: false,
      showPart: false,
      response: null,
      participating: false,
    }
  },
  beforeMount(){
    this.participate();
    this.getEvents();
    
  },
  methods: {
    async participate(){
        try{
            const response = await fetch (`http://puigmal.salle.url.edu/api/v2/events/${event_id}/assistances/${user_id}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data2 = data);
           
            this.participating= true;
            
           
            console.log(this.data2[0].event_id);
            console.log(this.data2[0].user_id);
           
        } catch(error){
            this.participating = false;
            console.log(error);
        }
        
        

    },

    getEvents(){     
      
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/events/${event_id}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);

            console.log(response);                 
            console.log(event_id);
            
           
    },
    editMode(){
        this.editing = true;
    },
    editModeOff(){
        this.editing = false;
    },
    editingName(){
        this.nameediting = true;
    },
    editingNameCancel(){
        this.nameediting = false;
    },
    async editName(){
        const response = await fetch(`http://puigmal.salle.url.edu/api/v2/events/${event_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: this.name,
            
        })
      });
      if (!response.ok) {
          
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.nameediting = false;
        location.reload();
      }
    },
    async participar(){
        const response = await fetch(`http://puigmal.salle.url.edu/api/v2/events/${event_id}/assistances`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
          console.log(event_id)
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.showPart = true;
        setTimeout(()=>{
            this.showPart = false;
            location.reload();
        },3500);
        console.log(response.serverStatus);
      }
    },
    
    async puntuar(){
       
      try {
        const response = await fetch(`http://puigmal.salle.url.edu/api/v2/assistances/${user_id}/${event_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            puntuation: this.puntuation,
            comentary: this.comentary,
            
        })
        });
      location.reload();  
      } catch (error) {
        
      }
    },
  }
};

</script>






<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>

<template>
    <Header2>

    </Header2>
    
    <main v-for= "event in data">
        <div class="apuntado" v-if="showPart">
            ¡Te has apuntado correctamente!
        </div>
        <div class="all">
            <div class="background">
                <img  :src=  "event.image" alt="img"> 
            </div>
        <section class = "margenevento">
            <h2 v-if="!nameediting">{{event.name}}</h2>
            <input type="text" v-model="name" v-if="nameediting">
            <button class = "editar" v-if="editing && !nameediting" v-on:click="editingName()">Editar</button>
            <button class = "editar" v-if="nameediting" v-on:click="editName()">OK</button>
            <button class = "editar" v-if="nameediting" v-on:click="editingNameCancel()">CANCEL</button>
            <button class = "editar0" v-if="!editing && (user_id == event.owner_id)" v-on:click="editMode()">Editar</button>
            <button class = "editar0" v-if="editing" v-on:click="editModeOff()">OK</button>
        </section>
        <article class="FCont"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->

            <div class="datosIm">

                <div class = "datos">
                    <div class="lugar">
                        <b>Lugar: </b> {{ event.location }} 
                        <button class = "editar" v-if="editing">Editar</button>
                    </div>
                    <div class="lugar" v-if = "editLugar">
                        <b>Lugar: </b> <input type="text" v-model="lugar">
                        <button class = "editar" v-if="editing">Editar</button>
                    </div>
                    <div class="tipo">
                        <b>Tipo: </b> {{ event.type }} 
                        <button class = "editar" v-if="editing">Editar</button>
                    </div>
                    <div class="descripcion">
                       <b>Descripción: </b> {{ event.description }} 
                       <button class = "editar" v-if="editing">Editar</button> 
                    </div>
                    <div class="dataInicio">
                        <b>Data de inicio: </b> {{ event.eventStart_date.substring(0,10) }}
                        <button class = "editar" v-if="editing">Editar</button>
                    </div>
                     <div class="dataFin">
                        <b>Data de fin: </b> {{ event.eventEnd_date.substring(0,10) }}
                        <button class = "editar" v-if="editing">Editar</button>
                     </div>
                     <div class="nparticipantes">
                        <b>Numero de partipantes: </b> {{ event.n_participators }}
                        <button class = "editar" v-if="editing">Editar</button>
                     </div>
                     <br>
                     <button class="participar" v-on:click="participar()" v-if="!participating">PARTICIPAR</button> 
                     <b v-if="participating">¡Ya estás apuntado!</b>
                </div>
                
                     
            </div>
            
            
                
           
            
        
            <div class="part" v-for= "event2 in data2">
                
            <section class = "Third"><!--Con el secction separamos las secciones que no interesan-->
                    <h2>Puntúalo</h2>
                </section>
                
                <section class = "Four"><!--Con el secction separamos las secciones que no interesan-->
                    

                    <input v-model="puntuation" type="number" id="tentacles" name="tentacles"
                    min="0" max="10">
                    <button class = "editar" v-on:click="puntuar()" >Puntuar</button>
                    <h2>Puntuation: </h2>{{ event2.puntuation }}
                    <h2>Comentary: </h2>{{ event2.comentary }}
                    <input v-model="comentary">
                    <button class = "editar" v-on:click="puntuar()" >Enviar</button>
                </section>

            

                
                </div>
            

        </article>
        </div>

        
    
    </main>
    <Footer2>

    </Footer2>
    
</template>

<style scoped>

.apuntado{
    position: fixed;
    right:-16rem;
    bottom: 6rem;
    background: white;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;    
    border: 1px solid black;
    animation: aparecer 4s ease;
    z-index: 1;
}

@keyframes aparecer {
    0%{
       right: -16rem; 
    }
    50%{
        right: 0;
    }
    100%{
        right: -16rem;
    }
}

.rectanguloN{
        
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: black;
    opacity: 70%;
    bottom: 0;
    z-index: 6;
}

.participar{
    width: 10rem;
    cursor:pointer;
}

.editar0{
    position: absolute;
    right:1rem;
}
.datos{
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: .3rem;
}
.editar{
    border: 1px solid black;
    border-radius: 50px;
}
.background img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.background{
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    width: 100%;
    height: 120%;
    object-fit: cover;
}

.all{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.part{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
.datosIm img{
    aspect-ratio: 16/9;
    width: 500px;
    object-fit: cover;
    
}
.datosIm{
    display: flex;    
    gap: 20rem;
    font-size: 20px;
    align-items: center;    
    margin-left: 5rem;
    
        
}

b{
    font-size: 30px;
}

.margenevento input{
    width: 10rem;
}
.margenevento{
    margin-left: 2%;
    margin-top: 4%;
    display: flex;
    align-items: center;
    gap: .5rem;
}
.FCont{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3rem;
    
   
    
}
.First{
    display: flex;
    align-items: center;
    flex-direction: column;
    
}

.Last{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    
}
.Second{
    width: 90%;
    padding: 4%;
    border-radius: 150px;
    border: 1px solid black;
    display:flex;
    justify-content: center;
}
.Four{
    
    padding-bottom: 2%;

}

@Media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
    p{
        font-size: 30px;
    }
    .Second{
        width:80%;
    }
}

@Media (max-width: 1080px){
    .datos{
        margin-left: 0rem;
    }
    .datosIm{
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        width: 100%;
        margin-left: 0rem;
        margin-top: 5rem;
    }
    b{
        font-size: 20px;
    }
    .datosIm img{
        width: 200px;
        aspect-ratio: 1/1;
    }
    .part{
        width: 100%;
    }
    .FCont{
        gap: 2rem;
    }
}


</style>