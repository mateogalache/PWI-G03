<script setup>
import Footer2 from '../components/Footer2.vue'

import Header3 from '../components/Header3.vue'
</script>


<template>


<Header3> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
        
</Header3>

<main> <!--Estamos indicando que esa etiqueta es un contenido principal-->
    <section class = "container">

        <div class = "rectanguloredondeadeo2">  <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 
            Buscar Evento         
            <input type="text" class="sinborde" name="Buscar Evento" placeholder="Buscar Evento">
        </div>
        <div class = "rectanguloredondeadeo3">           
            Filtro
        </div>
        <div class = "rectanguloredondeadeo4">           
            <input type="text" class="sinborde" name="Historial" placeholder="Historial">
        </div>

        <section class="eventocontainer"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
            <div class="subtitulo">
                En tu zona
            </div>

            <section class = "parejas">
            <a href="Event"> <img src="src/assets/ImagenesEventos/deporte.png" 
                width="35" height="35" alt="Botón atrás"></a>
                <img src="src/assets/ImagenesEventos/vino.png" 
                width="35" height="35" alt="Botón atrás">
            </section>

            <section class = "parejas">
                <img src="src/assets/ImagenesEventos/teatro.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/libro.png" 
                width="35" height="35" alt="Botón atrás">
            </section>

            <section class = "parejas">
                <img src="src/assets/ImagenesEventos/comida.png" 
                width="35" height="35" alt="Botón atrás">
                <img src="src/assets/ImagenesEventos/viajes.png" 
                width="35" height="35" alt="Botón atrás">
            </section>
            
        </section>
        
        <section class="popup">  <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                
                <div class="popup2"> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 
                    <input type="text" class="sinborde" name="Lugar" placeholder="Lugar">
                </div>

                <section class="popup2">
                    <input type="text" class="sinborde" name="Fecha Inicio" placeholder="Fecha Inicio">
                        <a href = "calendario"><div class="imga">
                            <img src = "src/assets/calendar.png" style="width:20px !important; height:20px !important;">
                        </div></a>
                </section>

                <section class="botones2">
                    <a href = "search"><div class="popup3">
                        <b>Aplicar</b>
                    </div></a>
                    <a href = "search"><div class="popup3">
                        <b>Cancelar</b>
                    </div></a>
                
        </section>
        </section>
                <div> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos--> 
                <img class="calendario" src = "src/assets/calendario.jpeg" style="width:300px !important; height:300px !important; ">
                </div> 
    </section>
           

</main>

        
<Footer2> <!--Nos permite identificar al pie de la página (que no forma parte del contenido único)-->
        
</Footer2>

<a href = "calendarioevento"><div class="rectanguloopacidad"></div></a>
    


</template>

<style scoped>
    .calendario{
        position: absolute;
        transform: translate(-50%,-50%);
        top:60%;
        left: 49.25%;
        z-index: 5;
        
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

    .rectanguloopacidad{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: black;
        opacity: 70%;
        bottom: 0;
    }

    .popup{
        background-color: white;
        height: 100px;
        width: 220px;
        padding: 2em;
        border-radius: 30px;
        justify-content: center;
        align-items: top;
        display: flex;
        flex-direction: column;
        position: absolute;
        top:40%;
        left:50%;
        transform: translate(-50%,-50%);
        
    }

    .popup2{
        color: gray;
        height: 25px;
        width: 200px;
        background-color: transparent;
        border: 1px solid grey;
        border-radius: 1px;
        margin-top: 10px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .popup3{
        color: black;
        height: 25px;
        width: 75px;
        background-color: transparent;
        border: 1px solid grey;
        border-radius: 8px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

	.imga{
        height: 200%;
        width: 10%;
    }

    .botones2{
        display: flex;
        justify-content: space-around;
    }

    .sinborde {
        border: 0;
        background-color: transparent;
    }

    @media (min-width:1080px){
        .rectanguloredondeadeo2{
            color: gray;
            height: 25px;
            width: 700px;
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
                margin-left: 775px;
                margin-top: -57px;
        }

        .rectanguloredondeadeo4{
            color: gray;
            height: 50px;
            width: 700px;
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
        .eventocontainer{
            background-color: lightgrey;
            display: flex;
            flex-direction: column;
            padding: 1em;
            margin-top: -5px;
            width: 675px;
            margin-left: -75px;
            text-align: center;
        }

        .parejas{
            display: flex;
            justify-content: space-around;
        }
    }


</style>
