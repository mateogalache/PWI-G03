<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue';

</script>


<template>
    
    <Header3>
            
    </Header3>
    <main>
        <div id="containercontactanos">
            <div id="eventocontainer1">
                    <br>
                    <div id="titulo">
                        <b>Contacta con nuestro equipo</b>
                        <br>
                        <br>
                    </div>
                    <div id="textoo">
                        Nos encantan las preguntas y los comentarios,<br>
                        y siempre estamos dispuestos a ayudar<br><br>
                        Aquí tienes algunas opciones para ponerte
                        en<br>
                        contacto con nosotros
                    </div>        

                    <div id ="popup">
                        <h2 id = "textoo">Reportar<br> un problema</h2>
                        <div id = textoo2>
                             Deje aquí su sugerencia o problema<br>
                             que ha tenido con la apliación.<br>
                            Le contacremos lo más rápido posible.
                        </div>
                        <div id = "botones">           
                            Reportar
                        </div>
                    </div>

                    <div id ="popup">
                        <h3 id = "textoo">Contactar con el servicio<br>de atención al cliente</h3>
                        <div id = textoo2>
                             Estamos esperando para ayudarle a<br>
                             usted y a su equipo<br>
                        </div>
                        <div id = "botones">           
                            Contactar
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                
        
                    
                    <div id="eventocontainer2">
                            <div id="izquierda">
                                
                                <b>SallEvents</b><br>
                                <small>Diagonal, 108, 5to 2nd</small><br><br>
                                <small>SallEvents@gmail.com</small><br><br>
                                <small>679456280</small><br>
                                <br>
                                <img id = img1 src="src/assets/ImagenesEventos/redes_sociales.png" 
                                width="100" height="20" alt="RedesSociales">

                            </div>
                            
                            <div id="derecha">
                                <img id = img2 src="src/assets/ImagenesEventos/mapa.png" 
                                 width="150" height="150" alt="Mapa">
                            </div>

                          
                    </div>
                    <br>
                    <br>
            </div>
            <br><br/>     
        </div>  
    </main>
    
    
    <Footer2>
    </Footer2>

</template>

<style scoped>

    #containercontactanos{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
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

    #eventocontainer2{
        display: flex;
        justify-content: space-around;
        margin-bottom: 2%;
        width: 100%;
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

    #textoo4{
        display: flex;
        font-size: small;
        text-align: left;
    }

    #textoo5{
        display: flex;
        font-size: x-small;
        justify-content: left;
    }

    #popup{
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

    #img1{
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        margin-left: 0 auto;
    }

    #img2{
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    #izquierda{
        float: left;
    }

    #derecha{
        float: right;
    }


    @media (min-width:1080px){
        
        #containercontactanos{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
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

    #eventocontainer2{
        display: flex;
        justify-content: space-around;
        margin-bottom: 2%;
        width: 100%;
    }

    #titulo{
        display: flex;
        font-size: xx-large;
        justify-content: center;
    }

    #textoo{
        display: flex;
        font-size: large;
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

    #textoo4{
        display: flex;
        font-size: small;
        text-align: left;
    }

    #textoo5{
        display: flex;
        font-size: x-small;
        justify-content: left;
    }

    #popup{
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

    #img1{
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        margin-left: 0 auto;
    }

    #img2{
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    #izquierda{
        float: left;
    }

    #derecha{
        float: right;
    }
    }
 
</style>