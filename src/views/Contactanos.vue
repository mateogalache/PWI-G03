<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue';

</script>


<template>
    
    <Header3> <!--Nos permite identificar la cabecera de la página (que no forma parte del contenido único)--> 
            
    </Header3>

    <main> <!--Estamos indicando que esa etiqueta es un contenido principal-->

        <section id="containercontactanos"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->

            <section id="eventocontainer1"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                    <br>

                    <div id="titulo"> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 
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

                    <section id ="popup1"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                        <h2 id = "textoo">Reportar<br> un problema</h2>
                        <div id = textoo2>
                             Deje aquí su sugerencia o problema<br>
                             que ha tenido con la apliación.<br>
                            Le contacremos lo más rápido posible.
                        </div>
                        <div id = "botones">           
                            Reportar
                        </div>
                    </section>

                    <section id ="popup2"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                        <h3 id = "textoo">Contactar con el servicio<br>de atención al cliente</h3>
                        <div id = textoo2>
                             Estamos esperando para ayudarle a<br>
                             usted y a su equipo<br>
                        </div>
                        <div id = "botones">           
                            Contactar
                        </div>
                    </section>
                    <br>
                    <br>
                    <br>
                
        
                    
                    <section id="eventocontainer2"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                            <section id="izquierda">
                                
                                <b>SallEvents</b><br>
                                <small>Diagonal, 108, 5to 2nd</small><br><br>
                                <small>SallEvents@gmail.com</small><br><br>
                                <small>679456280</small><br>
                                <br>
                                <img id = img1 src="src/assets/ImagenesEventos/redes_sociales.png" 
                                width="100" height="20" alt="RedesSociales">

                            </section>
                            
                            <section id="derecha"> <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                                <img id = img2 src="src/assets/ImagenesEventos/mapa.png" 
                                 width="150" height="150" alt="Mapa">
                            </section>

                          
                    </section>
                    <br>
                    <br>
            </section>  
        </section>

        <div class="transparent6"></div> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 
    </main>
    
    
    <Footer2> <!--Nos permite identificar al pie de la página (que no forma parte del contenido único)-->
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

    #popup1{
        background-color: white;
        height: 125px;
        width: 200px;
        border-radius: 10px;
        margin: 8px;
        border: 1px solid grey;
    }

    #popup2{
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
            text-align: center;
        }

        #eventocontainer2{
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-bottom: -40px;
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
            font-size: small;
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

        #popup1{
            background-color: white;
            height: 175px;
            width: 300px;
            border-radius: 10px;
            border: 1px solid grey;
            margin-right: 500px;
            margin-top: 50px;
        }

        #popup2{
            background-color: white;
            height: 175px;
            width: 300px;
            border-radius: 10px;
            border: 1px solid grey;
            margin-left: 500px;
            margin-top: -185px;
            padding: 1px;
        }

        #botones{
            height: 22px;
            width: 88px;
            background-color: grey;
            border: 1px solid grey;
            align-items:center;
            justify-content: center;
            padding: 5px;
            text-align: center;
            display: flex;
            border-radius: 50px;
            font-size: large;
            color: #F3F3F3;
            margin-top: 20px;
        }

        #img1{
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
            margin-left: -650px;
            width: 150px;
            height: 30px;
        }

        #img2{
            -webkit-filter: grayscale(100%);
            filter: opacity(0%);
        }

        #izquierda{
            float: center;
            margin-left: 330px;
            font-size: x-large ; 
            margin-top: -50px; 
                   
        }

        #derecha{
            float: right;
        }
    }
 
</style>