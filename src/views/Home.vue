<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header3>
        
</Header3>

<main>
    <br>
    <p><b>Eventos Destacados</b></p>
    <br><br><br>
    <div class = "container5">
              
        <div class="eventocontainer">
            <div class = "parejas">
            <a href="Event"><img src="src/assets/ImagenesEventos/deporte.png" 
                 alt="Botón atrás"></a>
                <img src="src/assets/ImagenesEventos/vino.png" 
                width="35" height="35" alt="Botón atrás">
            </div>

            <div class = "parejas">
                <img src="src/assets/ImagenesEventos/teatro.png" 
                 alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/libro.png" 
                alt="Botón atrás">
            </div>

            <div class = "parejas">
                <img src="src/assets/ImagenesEventos/comida.png" 
                alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/viajes.png" 
               alt="Botón atrás">
            </div>
        </div>
    </div>
    <div class="transparent6"></div>

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


    .parejas{
        display: flex;
        flex-direction: row;
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
       width: 140px;
       height: 140px;
       margin: 1em;
   }

   .parejas{
       display: flex;
       flex-direction: row;
   }


   @media (min-width:1080px){
       
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
           width: 90%;
           height: 550px;
           margin-left: -10px;
           margin-top: -50px;
           text-align: center;
       }

       .parejas{
           display: flex;
           justify-content: space-around;
           margin-bottom: 50px;
       }
   }
</style>
