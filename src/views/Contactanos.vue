<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue';

</script>


<template>
    
    <Header3>
            
    </Header3>
    <main>
        <div id="container1">
            <div id="eventocontainer1">

<<<<<<< HEAD
    <div class="containercontactanos">
        <div class="eventocontainer1">
=======
                <h1 id = "titulo">Contacta con nuestro equipo</h1>
                <div id = textoo aling = "center">
                    Nos encantan las preguntas y los comentarios <br>
                    y siempre estamos dispuestos a ayudar.<br><br>
>>>>>>> ff5295b231d09622098205c7d2d052ac109490ac

                    Aquí tienes algunas opciones para ponerte<br>
                    en contacto con nosotros
                </div>

                <div id ="popup">
                    <h2 id = "textoo">Reportar<br> un problema</h2>
                    <div id = textoo2>
                        Deje aquí su sugerencia o problema que ha tenido con la apliación.
                        Le contacremos lo más rápido posible.
                    </div>
                    <div id = "botones">           
                        Reportar
                    </div>
                </div>
<<<<<<< HEAD
            </div>
            <br><br/>
            <div class="container2">
                
                    <div>
                        <b>SallEvents</b><br>
                    
                    
                        Diagonal, 108, 5to 2nd
                    
                    
                        <img src="src/assets/ImagenesEventos/redes_sociales.png" 
                        width="100" height="20" alt="RedesSociales">
=======

                <div id="popup">
                    <h2 id = "textoo">Contactar con el servicio de atención al cliente</h2>
                    <div id = textoo3>
                        Estamos esperando para ayudarle a usted y a su equipo.
                    </div>
                    <div id = "botones">           
                        Contactar
                    </div>
                </div>

                <div id="container2">
                    <div id = "parejas">
                        <div>
                            <b>SallEvents</b><br>
                        </div>
                        <div>
                            Diagonal, 108, 5to 2nd
                        </div>
                        <div>
                            <img id="img" src="src/assets/ImagenesEventos/redes_sociales.png" 
                            width="100" height="20" alt="RedesSociales">
                        </div>
                        <img id="img" src="src/assets/ImagenesEventos/mapa.png" 
                        width="200" height="200" alt="Mapa">
>>>>>>> ff5295b231d09622098205c7d2d052ac109490ac
                    </div>
                </div>
            
        </div>
    </main>
    
    
    <Footer2>
    </Footer2>

</template>

<style scoped>

    #container1{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-right: 2%;
    }

    #eventocontainer1{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        justify-content: center;
        width: 95%;
        height: 95%;
        align-items: center;
    }

    #titulo{
        display: flex;
        font-size: large;
        justify-content: center;
    }

    #textoo{
        display: flex;
        font-size: small;
        justify-content: center;
        text-align: center;
    }

    #textoo2{
        display: flex;
        font-size: x-small;
        justify-content: center;
        text-align: center;
        margin: 10px;
    }

    #textoo3{
        display: flex;
        font-size: x-small;
        justify-content: center;
        text-align: center;
        margin: 15px;
    }

<<<<<<< HEAD
    .containercontactanos{
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
        margin-top: 10px;
        width: 350px;
        align-items: center;
        height: 100%;
    }

    .popup{
=======
    #popup{
>>>>>>> ff5295b231d09622098205c7d2d052ac109490ac
        background-color: white;
        height: 125px;
        width: 200px;
        border-radius: 10px;
        margin: 8px;
        border: 1px solid grey;
    }

    #botones{
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

    #container2{

        display: flex;
        
        align-items: center;
    }

    #parejas{
        display: flex;
        flex-direction: row;
    }

    #img{
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

 
</style>