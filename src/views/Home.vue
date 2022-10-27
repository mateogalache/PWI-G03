<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header2>
        
</Header2>

<main>
    <div class = "container">
        <div class = "titulo">           
            <p>Eventos Destacados</p>
        </div>
      
        <div class="eventocontainer">
            <div class = "parejas">
                <img src="src/assets/imagenes/Evento/deporte.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/imagenes/Evento/vino.png" 
                width="35" height="35" alt="Botón atrás">
            </div>

            <div class = "parejas">
                <img src="src/assets/imagenes/Evento/teatro.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/imagenes/Evento/libro.png" 
                width="35" height="35" alt="Botón atrás">
            </div>

            <div class = "parejas">
                <img src="src/assets/imagenes/Evento/comida.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/imagenes/Evento/viajes.png" 
                width="35" height="35" alt="Botón atrás">
            </div>
        </div>
    </div>

</main>

        
<Footer2>
        
</Footer2>

</template>

<style scoped>

    .container{
        margin: 7em;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .eventocontainer{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin-top: 40px;
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

    .titulo{
        margin-top: 30px;
        display: flex;
       
    }


</style>
