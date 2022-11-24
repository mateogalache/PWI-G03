<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>


<template>

<Header3>
        
</Header3>

<main>
    <div class = "container">

        <div class = "rectanguloredondeadeo2">           
            <input type="text" class="sinborde" name="Buscar Evento" placeholder="Buscar Evento">
            <a href = "calendarioevento"><div class = "rectanguloredondeadeo3">           
              Filtro
            </div></a>
        </div>           
        
        <div class = "rectanguloredondeadeo4"> 
            <input type="text" class="sinborde" name="Historial" placeholder="Historial">
       </div>
        
        <div class="eventocontainer">
            <div class="subtitulo">
                <b>En tu zona</b>
            </div>

            <div class = "parejas">
            <a href="Event"> <img src="src/assets/ImagenesEventos/deporte.png" 
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
    

    <section class="popup">  <!--Usamos section porque su contenido está relacionado y forma parte de un mismo significado aunque podriamos usar article-->
                
                <div class="popup2"> <!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article--> 
                    <input type="text" class="sinborde" name="Lugar" placeholder="Lugar">
                </div>

                <section class="popup2">
                    <div class = "datacontainer">
                        Fecha inicio
                        <input type = "date" class = "date">
                    </div>
                        <!--<a href = "calendario"><div class="imga">
                            <img src = "src/assets/calendar.png" style="width:20px !important; height:20px !important;">
                        </div></a>-->
                        
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
    
    <div class="transparent6"></div>

</main>

        
<Footer2>
        
</Footer2>

<div class = "rectanguloopacidad"></div>

</template>

<style scoped>



.date{
    width: 50%;
    height: 50%;
    background: transparent;
    border: none;
}

.datacontainer{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 3px;
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
        z-index:5;
        
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
        width: 80%;
        background-color: transparent;
        border: 1px solid grey;
        display: flex;
        align-items:center;
        padding: 5px;
        border-radius: 50px;
        margin: 5%;
        margin-top: 5%;
        justify-content: space-between;
       
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
        
       
    }

    .rectanguloredondeadeo4{
        color: gray;
        height: 50px;
        width: 80%;
        background-color: transparent;
        border: 1px solid grey;
        display: flex;
        align-items:top;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10%;
    }

    .sinborde {
        border: 0;
        background-color: transparent;
    }

    .rectanguloopacidad{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: black;
        opacity: 70%;
        bottom: 0;
    }


    @media (min-width:1080px){

        .container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .rectanguloredondeadeo2{
            color: gray;
            height: 25px;
            width: 90%;
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
            height: 25px;
            width: 75px;
            background-color: grey;
            border: 1px solid grey;
            display: flex;
            align-items:center;
            justify-content: center;
            border-radius: 50px;
            
        }

        .rectanguloredondeadeo4{
            color: gray;
            height: 50px;
            width: 90%;
            background-color: transparent;
            border: 1px solid grey;
            display: flex;
            align-items:top;
            border-radius: 5px;
            margin: 25px;
            margin-right: 100px;
            margin-top: -10px;
        }
        .eventocontainer{
            background-color: lightgrey;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            padding: 1em;
            width: 89%;
            text-align: center;
            margin-left: 3%;
            

        }

        .parejas{
            display: flex;
            justify-content: space-around;
        }
    }

</style>