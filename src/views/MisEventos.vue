<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header3> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
        
</Header3>

<main> <!--Estamos indicando que esa etiqueta es un contenido principal-->

    <br>
<<<<<<< HEAD
    <section class = "margenmis">
        <h2>Mis Eventos </h2>
    </section>
    <div class = "container5">
=======
    <b>&nbsp;&nbsp;Mis Eventos </b>
    <section class = "container5"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
>>>>>>> 85236e52b84bf31dc771ccf80f50ec00be20e899
              
        <section class="eventocontainer5">
            <section class = "parejas">
            <a href="Event"><img src="src/assets/ImagenesEventos/deporte.png" 
                alt="Botón atrás"></a>
                <img src="src/assets/ImagenesEventos/vino.png" 
               alt="Botón atrás">
            </section>

            <section class = "parejas">
                <img src="src/assets/ImagenesEventos/teatro.png" 
                alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/libro.png" 
                alt="Botón atrás">
            </section>

            <section class = "parejas">
                <img src="src/assets/ImagenesEventos/comida.png" 
                alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/viajes.png" 
                alt="Botón atrás">
            </section>
        </section>
    </section>
    <div class="transparent6"></div> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 

</main>

        
<Footer2> <!--Nos permite identificar al pie de la página (que no forma parte del contenido único)-->
        
</Footer2>

</template>

<style scoped>
    .margenmis{
        margin-left: 2%;
    }

    .container5{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .eventocontainer5{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin-top: 50px;
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


    @media (min-width:1080px){
        h2{
            font-size: 40px;
        }
 
        .container5{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
       
        .eventocontainer5{
            background-color: lightgrey;
            display: flex;
            flex-direction: column;
            width: 80%;
        }

        .parejas{
            display: flex;
            justify-content: space-around;
        }

}
</style>
