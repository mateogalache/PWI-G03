<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header2>
        
</Header2>

<main>
    <div class = "container">
        <div class = "rectanguloredondeadeo2">           
            Buscar Evento
        </div>
        <div class = "rectanguloredondeadeo3">           
            Filtro
        </div>
        <div class = "rectanguloredondeadeo4">           
            Historial
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
        padding: 2em;
        margin-top: 20px;
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
    width: 275px;
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items:center;
    padding: 5px;
    border-radius: 50px;
    margin: 25px;
    margin-right: 100px;
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
    margin: 25px;
    margin-right: -275px;
    margin-top: -57px;
    }

    .rectanguloredondeadeo4{
    color: gray;
    height: 50px;
    width: 275px;
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items:top;
    padding: 5px;
    border-radius: 5px;
    margin: 25px;
    margin-right: 100px;
    margin-top: -10px;
    }

</style>