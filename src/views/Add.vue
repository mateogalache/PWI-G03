<script>

const token = localStorage.getItem('accessToken');

export default {
  name: "App",
  data() {
    return {
      
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
            name: this.$refs.name.value,
            image: this.$refs.image.value,
            location: this.$refs.location.value,
            description: this.$refs.description.value,
            eventStart_date: this.$refs.eventStart_date.value,
            eventEnd_date: this.$refs.eventEnd_date.value,
            n_participators: this.n_participators,
            type: this.$refs.type.value,
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
      
    }
  }
}
</script>


<script setup>
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
        <section class = "container"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado-->

            
                
            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Nombre Evento" placeholder="Nombre Evento" ref="name">           
            </div>

            <div class = "rectanguloredondeadeo"> 
                <input type="text" class="sinborde" name="Tipo Evento" placeholder="Tipo Evento" ref="type">           
            </div>

            <div class = "rectanguloredondeadeo"> 
                <p>Día de inicio </p>
                <input type="date" class="sinborde" name="Día de inicio" placeholder="Día de inicio" ref="eventStart_date">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <p>Día de finalización </p>
                <input type="date" class="sinborde" name="Día de fin" placeholder="Día de fin" ref="eventEnd_date">                     
            </div>

            <div class = "rectanguloredondeadeo">
                
                <input type="text" class="sinborde" name="Descripción" placeholder="Descripción" ref="description">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Lugar" placeholder="Lugar" ref="location">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Nº de participantes" placeholder="Nº de participantes" ref="n_partipators" v-model="n_participators">                     
            </div>

            <div class = "rectanguloredondeadeo">
                <input type="text" class="sinborde" name="Imagen" placeholder="Imagen" ref="image">                     
            </div>
            
            <section class="parejabotones">
            </section>
                    <div class = "reiniciar">           
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