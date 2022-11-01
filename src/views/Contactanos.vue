<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue';

</script>


<template>
    
    <Header3>
            
    </Header3>

    <div class="container1">
        <div class="eventocontainer1">

            <h1 class = "titulo">Contacta con nuestro equipo</h1>
            <div class = textoo aling = "center">
                Nos encantan las preguntas y los comentarios <br>
                y siempre estamos dispuestos a ayudar.<br><br>

                Aquí tienes algunas opciones para ponerte<br>
                en contacto con nosotros
            </div>

            <div class="popup">
                <h2 class = "textoo">Reportar<br> un problema</h2>
                <div class = textoo2>
                    Deje aquí su sugerencia o problema que ha tenido con la apliación.
                    Le contacremos lo más rápido posible.
                </div>
                <div class = "botones">           
                    Reportar
                </div>
            </div>

            <div class="popup">
                <h2 class = "textoo">Contactar con el servicio de atención al cliente</h2>
                <div class = textoo3>
                    Estamos esperando para ayudarle a usted y a su equipo.
                </div>
                <div class = "botones">           
                    Contactar
                </div>
            </div>

            <div class="container2">
                <div class = "parejas">
                    <div>
                        <b>SallEvents</b><br>
                    </div>
                    <div>
                        Diagonal, 108, 5to 2nd
                    </div>
                    <div>
                        <img src="src/assets/ImagenesEventos/redes_sociales.png" 
                        width="100" height="20" alt="RedesSociales">
                    </div>
                    <img src="src/assets/ImagenesEventos/mapa.png" 
                    width="200" height="200" alt="Mapa">
                </div>
            </div>
        </div>
    </div>
    
    <Footer2>
    </Footer2>

</template>

<style scoped>
    .titulo{
        display: flex;
        font-size: large;
        justify-content: center;
    }

    .textoo{
        display: flex;
        font-size: small;
        justify-content: center;
        text-align: center;
    }

    .textoo2{
        display: flex;
        font-size: x-small;
        justify-content: center;
        text-align: center;
        margin: 10px;
    }

    .textoo3{
        display: flex;
        font-size: x-small;
        justify-content: center;
        text-align: center;
        margin: 15px;
    }

    .container1{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .eventocontainer1{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin-top: 40px;
        width: 350px;
        align-items: center;
    }

    .popup{
        background-color: white;
        height: 125px;
        width: 200px;
        border-radius: 10px;
        margin: 8px;
        border: 1px solid grey;
    }

    .botones{
        height: 12px;
        width: 68px;
        background-color: grey;
        border: 1px solid grey;
        align-items:center;
        justify-content: center;
        padding: 5px;
        text-align: center;
        display: flex;
        border-radius: 50px;
        font-size: small;
        color: #F3F3F3;
        margin: 0 auto;
    }

    .container2{

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .parejas{
        display: flex;
        flex-direction: row;
    }

 
</style>