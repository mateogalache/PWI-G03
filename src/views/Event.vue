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
      
      showPart: false,
      response: null,
      participating: false,
      location: '',
      npart: '',
      type:'',
      name:'',
      endDate: '',
      startDate:'',
      description: '',
      image: '',
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
        this.location = this.data[0].location;
        this.type = this.data[0].type;
        this.description = this.data[0].description;
        this.startDate = this.data[0].eventStart_date.substring(0,10);
        this.endDate = this.data[0].eventEnd_date.substring(0,10);
        this.name = this.data[0].name;
        this.npart = this.data[0].n_participators;
        this.image = this.data[0].image;
    },
    
   
    async editEvent(){
        const response = await fetch(`http://puigmal.salle.url.edu/api/v2/events/${event_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: this.name,
            location: this.location,
            image: this.image,
            n_participators: this.npart,
            eventEnd_date: this.endDate,
            eventStart_date: this.startDate,
            description: this.description,
            type: this.type,

        })
      });
      if (!response.ok) {
          
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.editing = false;
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
      /*if (puntuation < 0 || puntuation > 10){
        console.log("La puntuación debe estar entre 0 y 10")
      }
      
      else if (puntuation >= 0 && puntuation <= 5 && comentary != "" && comentary != null && puntuation != "" && puntuation != null)
        {
            alert("¡Gracias por tu valoración!");

      }*/
    },
    async deleteevent(){
        try{
            await fetch (`http://puigmal.salle.url.edu/api/v2/events/${event_id}`,{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            this.$router.push({name:'MisEventos'});
        } catch (error){
            
        }
    },
    shareEvent(name, location, type, startDate){
        localStorage.setItem('shareEvent',`Evento: ${name} - ${location} - ${startDate.substring(0,10)}`);
    }
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
        <div class="background">
                <img  :src=  "event.image" alt="img"> 
        </div>
        <div class="apuntado" v-if="showPart">
            ¡Te has apuntado correctamente!
        </div>
        <div class="all">
            
        <section class = "margenevento">
            <h2 v-if="!editing">{{event.name}}</h2>
            <h2><input type="text" v-model="name" v-if="editing"></h2> 
            <div v-if="!editing && (user_id == event.owner_id)" class="rightedit">
                <button class="deleteevent" v-on:click="deleteevent()">Delete</button>
               <button class = "editar0" v-on:click="editMode()">Editar</button> 
            </div>
            
            <button class = "editar0" v-if="editing" v-on:click="editEvent()">OK</button>
        </section>
        <div class="changeImage" v-if="editing">
            <b>Cambia la imagen: </b> 
            <input type="text" v-model="image">
        </div>
        <article class="FCont"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->

            <div class="datosIm">

                <div class = "datos">
                    <div class="lugar">
                         <b>Lugar: </b> <small v-if="!editing"> {{ event.location }}</small>
                        <input type="text" v-model="location" v-if = "editing">
                    </div>
                    
                    <div class="tipo">
                        <b>Tipo: </b> <small v-if="!editing">{{ event.type }} </small>
                        <input type="text" v-model="type" v-if = "editing">
                    </div>
                    <div class="descripcion">
                       <b>Descripción: </b> <small v-if="!editing">{{ event.description }} </small>
                       <input type="text" v-model="description" v-if = "editing">
                    </div>
                    <div class="dataInicio">
                        <b>Data de inicio: </b> <small v-if="!editing">{{ event.eventStart_date.substring(0,10) }}</small>
                        <input type="date" v-model="startDate" v-if = "editing">
                    </div>
                     <div class="dataFin"> 
                        <b>Data de fin: </b> <small v-if="!editing">{{ event.eventEnd_date.substring(0,10) }}</small>
                        <input type="date" v-model="endDate" v-if = "editing">
                     </div>
                     <div class="nparticipantes">
                        <b>Número de participantes: </b> <small v-if="!editing">{{ event.n_participators }}</small>
                        <input type="number" v-model="npart" v-if = "editing">
                     </div>
                     <br>
                     <button class="participar" v-on:click="participar()" v-if="!participating">PARTICIPAR</button> 
                     <b v-if="participating">¡Ya estás apuntado!</b>
                     <a href="ShareEvent"><button class="share" v-on:click="shareEvent(event.name, event.location, event.type, event.eventStart_date)">COMPARTIR</button></a>
                </div>
                    
                     
            </div>
            
            
                
           
            
        
            <div class="part" v-for= "event2 in data2.slice(0,1)">
                
            <section class = "Third"><!--Con el secction separamos las secciones que no interesan-->
                    <h2>Puntúalo y Coméntalo</h2>
                </section>
                
                <section class = "Four"><!--Con el secction separamos las secciones que no interesan-->
                    

                    <input v-model="puntuation" type="number" id="punt" min="0" max="10" placeholder="0 a 10" list="lista">
                    <datalist id="lista">

                        <option value="0"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option value="7"></option>
                        <option value="8"></option>
                        <option value="9"></option>
                        <option value="10"></option>
                        </datalist>
                    
                    
                    
                    <h2></h2>
                    <input v-model="comentary" type="text" id="com" placeholder="Comentario">
                    <button class = "editar" v-on:click="puntuar()" >Enviar</button>
                    <div class="puntuacion">
                        <h2>Puntuation: </h2><h3>{{ event2.puntuation }}</h3>
                    </div>
                    <div class="comentario">
                        <h2>Comentary: </h2><h3>{{ event2.comentary }}</h3>
                    </div>
                    
                    
                </section>

            

                
                </div>
            

        </article>
        </div>

        
    
    </main>
    <Footer2>

    </Footer2>
    
</template>

<style scoped>


.share{
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid var(--main-bg-color);
    color: black;
    background: var(--secundary-bg-color);
    transition: all 300ms ease;
}


.participar{
    color: white;
    border-radius: 10px;
    border: 2px solid var(--main-bg-color);
    background: var(--main-bg-color);
    width: 10rem;
    cursor:pointer;
    transition: all 300ms ease;
}
.editar0{
    background: green;
    color: white;
    cursor:pointer;
}
.deleteevent{
    background: red;
    color: white;
    cursor:pointer;
}
.rightedit{
    position: absolute;
    right: 2rem;
    display: flex;
    gap: 2rem;
}
.comentario,.puntuacion{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.changeImage{
    margin-left: 0.5rem;
}
#punt{
    width: 4rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    margin-left: 50px;
    
}
#com{
    width: 8rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

.margenevento h2 input{
    width: 15rem;
}

input{
    border: none;
    border-bottom: 1px solid black;
    background: none;
}

.nparticipantes input{
    width: 2rem;
    text-align: center;
}

small{
    font-size: 20px;
}

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
    height: 105%;
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
    .margenevento h2 input{
        width: 20rem;
    }
    .changeImage{
        margin-left: 2rem;
    }
    .changeImage input{
        width: 30rem;
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