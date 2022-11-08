<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header3.vue'
</script>


<template>

<Header2>
        
</Header2>

<main>
    <br>
    <h2>Mis eventos</h2>
    <div class = "container5">
              
        <div class="eventocontainer">
            <div class = "parejas">
            <a href="Event"><img src="src/assets/ImagenesEventos/deporte.png"
                width="35" height="35" alt="Botón atrás"></a>
                <img src="src/assets/ImagenesEventos/vino.png" 
                width="35" height="35" alt="Botón atrás">
            </div>

            <div class = "parejas">
                <img src="src/assets/ImagenesEventos/teatro.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/libro.png" 
                width="35" height="35" alt="Botón atrás">
            </div>

            <div class = "parejas">
                <img src="src/assets/ImagenesEventos/comida.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/viajes.png" 
                width="35" height="35" alt="Botón atrás">
            </div>
        </div>
    </div>

</main>

        
<Footer2>
        
</Footer2>

</template>

<style scoped>

    .container5{
        
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
