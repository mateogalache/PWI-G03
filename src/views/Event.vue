<script>

const token = localStorage.getItem('accessToken');
const event_id = window.localStorage.getItem('event');

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
        <h2>{{event.name}}</h2></section>
        <article class="FCont"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->

            <div class="datosIm">

                <div class = "datos">
                    <b>Lugar: </b> {{ event.location }} <br>
                    <b>Tipo: </b> {{ event.type }} <br>
                    <b>Descripción: </b> {{ event.description }} <br>
                    <b>Data de inicio: </b> {{ event.eventStart_date.substring(0,10) }} <br>
                    <b>Data de fin: </b> {{ event.eventEnd_date.substring(0,10) }} <br>
                    <b>Numero de partipantes: </b> {{ event.n_participators }} <br>
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
    justify-content: center;
    gap: 20rem;
    font-size: 20px;
    align-items: center;    
    margin-left: 5rem;
    margin-right: 10rem;
    text-align: center;
    
}

b{
    font-size: 30px;
}


.margenevento{
    margin-left: 2%;
    margin-top: 2%;
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