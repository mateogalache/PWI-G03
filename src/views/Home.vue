<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header3>
        
</Header3>

<main>
    <br>
    <b>&nbsp;&nbsp;Eventos Destacados</b>
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



    .container{
       
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
       margin-top: -15px;
       text-align: center;
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

   @media (min-width:1080px){
       
       .eventocontainer{
           background-color: lightgrey;
           display: flex;
           flex-direction: column;
           padding: 1em;
           margin-top: -5px;
           width: 575px;
           margin-left: -10px;
           text-align: center;
           margin-top: 60px;
       }

       .parejas{
           display: flex;
           justify-content: space-around;
       }
   }
</style>
