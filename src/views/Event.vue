<script>

const token = localStorage.getItem('accessToken');
const event_id = window.localStorage.getItem('event');
const user_id = localStorage.getItem('userId');

export default {
  name: "App",
  data() {
    return {
      data: {},
      editing: false,
      nameediting: false,
    }
  },
  beforeMount(){
    
    this.getEvents();
  },
  methods: {
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
            console.log(this.image);
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.nameediting = false;
        location.reload();
      }
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
                     
                </div>
                
                        
            </div>
        
            <div class="part">
            <section class = "Third"><!--Con el secction separamos las secciones que no interesan-->
                    <h2>Puntúalo</h2>
                </section>

                <section class = "Four"><!--Con el secction separamos las secciones que no interesan-->
                    <table> <!--Usamos una tabla ya que queremos listar las 5 estrellas en fila asi que hacemos una tabla de 1 fila y 5 columnas-->
                        <tr>
                            <td><img class="star" src="\src\assets\estrella.png" alt="chat"></td>
                            <td><img class="star" src="\src\assets\estrella.png" alt="chat"></td>
                            <td><img class="star" src="\src\assets\estrella.png" alt="chat"></td>
                            <td><img class="star" src="\src\assets\estrella.png" alt="chat"></td>
                            <td><img class="star" src="\src\assets\estrella.png" alt="chat"></td>
                        </tr>
                    </table>
                </section>
            

                <section class ="Last"><!--Con el secction separamos las secciones que no interesan-->
                    <img class ="IC" src="\src\assets\chat.png" alt="chat" >
                    <img class ="IC" src="\src\assets\add.png" alt="add" >
                    <a href="CompartirEventoAmigos"><img src="\src\assets\renviar.png" alt="share" width="45" height="25"></a>
                </section> 
                </div>
            

        </article>
        </div>

        
    
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>

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
    height: 90vh;
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
    margin-right: 10rem;
        
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
    gap: 5rem;
    
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