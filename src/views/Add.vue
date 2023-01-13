<script>

const token = localStorage.getItem('accessToken'); //Cogemos el token del localstorage

export default {
  name: "App",
  data() {
    return {
        //Definimos la variables que pasaremos a la API
      name:'',
      image:'',
      location:'',
      description:'',
      eventEnd_date: '',
      eventStart_date: '',
      type: '',
      n_participators: '',
      goodAdd: false, //Booleano para mostrar notificacion si se ha creado bien el evento
    }
  },
  methods: {
    async postEvent() {
      const response = await fetch('http://puigmal.salle.url.edu/api/v2/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify({
            //Pasamos los valores de los input con v-model
            name: this.name,
            image: this.image,
            location: this.location,
            description: this.description,
            eventStart_date: this.eventStart_date,
            eventEnd_date: this.eventEnd_date,
            n_participators: this.n_participators,
            type: this.type,
            latitude: null,
            longitude: null
        })
      });
      const data = await response.json();
      // Save the token in local storage
      
      
      if (!response.ok) {
            console.log(this.n_participators);
            const message = `An error has occured: ${response.status} - ${response.statusText}`;
            throw new Error(message);
          
      }
      else{
        //Si se ha hecho correctamente, mostramos la notificacion y llamamos a la funcion clearEvent
        this.goodAdd = true;
        this.clearEvent();
      }
      
    },
    //Función que limpia todos los valores de los input(ya sea porque se ha creado uno correctamente o porque se ha clickado reiniciar)
    clearEvent(){
      this.name ='';
      this.image ='';
      this.location ='';
      this.description ='';
      this.eventEnd_date = '';
      this.eventStart_date = '';
      this.type = '';
      this. n_participators = '';
    },

  }
}
</script>


<script setup>
//Importamos header y footer
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>

<template>

    <Header3> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)---> 
            
    </Header3>
    <main> <!--Estamos indicando que esa etiqueta es un contenido principal-->
        
        <div class = "subtitulo"> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos,
                                        es la herramienta para unir elementos cuando no podemos asociar significado semántico a este conjunto.-->       
            <h2>Crear Evento</h2>
                
        </div>
        <div class="goodAdd" v-if="goodAdd">
            ¡Evento creado correctamente!
        </div>

        <section class = "container"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado-->

            
                
            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Nombre Evento" placeholder="Nombre Evento" v-model="name">           
            </div>

            <div class = "rectanguloredondeadeo"> 
                <input type="text" class="sinborde" name="Tipo Evento" placeholder="Tipo Evento" v-model="type">           
            </div>

            <div class = "rectanguloredondeadeo"> 
                <p>Día de inicio </p>
                <input type="date" class="sinborde" name="Día de inicio" placeholder="Día de inicio" v-model="eventStart_date">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <p>Día de finalización </p>
                <input type="date" class="sinborde" name="Día de fin" placeholder="Día de fin" v-model="eventEnd_date">                     
            </div>

            <div class = "rectanguloredondeadeo">
                
                <input type="text" class="sinborde" name="Descripción" placeholder="Descripción" v-model="description">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Lugar" placeholder="Lugar" v-model="location">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Nº de participantes" placeholder="Nº de participantes"  v-model="n_participators">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Imagen" placeholder="Imagen" v-model="image">                     
            </div>
            
            <section class="parejabotones">
            </section>
                    <div class = "reiniciar" v-on:click="clearEvent()">           
                            <p style="color: black">Reiniciar</p>
                    </div>

                    <div class = "crear" v-on:click="postEvent()">           
                            <p style="color: black">Crear</p>
                    </div>
        </section> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado-->
    </main>
    <Footer2> <!--Nos permite identificar al pie de la página (que no forma parte del contenido único)-->
        
    </Footer2>
    
</template>

<style scoped>

    .goodAdd{
        position: fixed;
        bottom: 10rem;
        right: -16rem;
        padding: 1.5rem;
        border: 2px solid var(--main-bg-color);
        background: var(--secundary-bg-color);
        animation: good 3s ease;
    }
    @keyframes good{
        0%,100%{
            right: '';
        }
        50%{
            right:0;
        }
    }

    input[type="date"]{
        width: 35%;
    }

    input{
        width: 100%;
        outline: none;
    }

    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .rectanguloredondeadeo{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 50px;
    margin: 25px;
    color: gray;
    }
    .reiniciar{
    height: 30px;
    width: 100px;
    background-color: transparent;
    border: 1px solid grey;
    align-items:center;
    justify-content: center;
    padding: 5px;
    text-align: center;
    display: flex;
    border-radius: 50px;
    margin: 25px;
    margin-right: 225px;
    cursor:pointer;
    }
    .crear{
    height: 30px;
    width: 100px;
    background-color: transparent;
    border: 1px solid grey;
    align-items:center;
    justify-content: center;
    padding: 5px;
    display: flex;
    text-align: center;
    border-radius: 50px;
    margin: 25px;
    margin-left: 225px;
    margin-top: -67px;
    cursor:pointer;
    }

    .subtitulo{
        margin-left: 2%;
        
    }

    .sinborde {
        border: 0;
        background-color: transparent;
    }

    .parejabotones{
        display: flex;
        justify-content: space-around;
    }

    @media (min-width:1080px){
        input[type="date"]{
            width:22%;
        }
        h2{
            font-size: 40px;
        }

        .container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-top: 5%;
        }
        

        .rectanguloredondeadeo{
            height: 40px;
            width: 550px;
            background-color: transparent;
            border: 1px solid grey;
            display: flex;
            align-items:center;
            justify-content: space-between;
            padding: 5px;
            text-align: center;
            border-radius: 50px;
            margin: 20px;
        }

        .reiniciar{
            height: 30px;
            width: 200px;
            background-color: transparent;
            border: 1px solid grey;
            align-items:center;
            justify-content: center;
            padding: 4px;
            text-align: center;
            display: flex;
            border-radius: 50px;
            margin-right: 350px;
        }
    .crear{
            height: 30px;
            width: 200px;
            background-color: transparent;
            border: 1px solid grey;
            align-items:center;
            justify-content: center;
            padding: 4px;
            display: flex;
            text-align: center;
            border-radius: 50px;
            margin-left: 350px;
        }
    }
</style>