<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>

<template>

    <Header3>
            
    </Header3>
    <main>
        <br><br/><br/><br/>
<div class = "container">

    <div class = "subtitulo">           
            <h2 style="color: black">Crear Evento</h2>
    </div>
        <br><br/>
    <div class = "rectanguloredondeadeo">
        <input type="text" class="sinborde" name="Nombre Evento" placeholder="Nombre Evento">           
    </div>

    <div class = "rectanguloredondeadeo"> 
        <input type="text" class="sinborde" name="Tipo Evento" placeholder="Tipo Evento">           
    </div>

    <div class = "rectanguloredondeadeo"> 
        <input type="text" class="sinborde" name="Dia Evento" placeholder="Dia Evento">                     
    </div>

    <div class = "rectanguloredondeadeo">
        <input type="text" class="sinborde" name="Localización" placeholder="Localización">                     
    </div>

    <div class = "rectanguloredondeadeo">
        <input type="text" class="sinborde" name="Descripción" placeholder="Descripción">                     
    </div>
    <br><br>
    <div class="parejabotones">

        </div>
        <div class = "reiniciar">           
                <p style="color: black">Reiniciar</p>
        </div>

        <div class = "crear">           
                <p style="color: black">Crear</p>
        </div>
</div>
</main>
    <Footer2>
        
    </Footer2>
    
</template>

<style scoped>

    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .rectanguloredondeadeo{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items:center;
    justify-content: left;
    padding: 5px;
    text-align: center;
    border-radius: 50px;
    margin: 25px;
    }
    .reiniciar{
    height: 30px;
    width: 100px;
    background-color: transparent;
    border: 1px solid grey;
    align-items:center;
    justify-content: center;
    padding: 5px;
    text-align: center;
    display: flex;
    border-radius: 50px;
    margin: 25px;
    margin-right: 225px;
    }
    .crear{
    height: 30px;
    width: 100px;
    background-color: transparent;
    border: 1px solid grey;
    align-items:center;
    justify-content: center;
    padding: 5px;
    display: flex;
    text-align: center;
    border-radius: 50px;
    margin: 25px;
    margin-left: 225px;
    margin-top: -67px;
    }

    .subtitulo{
        margin-right: 250px;
        margin-top: -40px;
    }

    .sinborde {
        border: 0;
        background-color: transparent;
    }

    .parejabotones{
        display: flex;
        justify-content: space-around;
    }

    @media (min-width:1080px){

        .container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .subtitulo{
            display: flex;
            margin: 0 auto;
            margin-top: -30px;
            font-size: x-large;
        }

        .rectanguloredondeadeo{
            height: 30px;
            width: 450px;
            background-color: transparent;
            border: 1px solid grey;
            display: flex;
            align-items:center;
            justify-content: left;
            padding: 5px;
            text-align: center;
            border-radius: 50px;
            margin: 20px;
        }

        .reiniciar{
            height: 30px;
            width: 150px;
            background-color: transparent;
            border: 1px solid grey;
            align-items:center;
            justify-content: center;
            padding: 4px;
            text-align: center;
            display: flex;
            border-radius: 50px;
            margin-right: 225px;
        }
    .crear{
            height: 30px;
            width: 150px;
            background-color: transparent;
            border: 1px solid grey;
            align-items:center;
            justify-content: center;
            padding: 4px;
            display: flex;
            text-align: center;
            border-radius: 50px;
            margin-left: 225px;
        }
    }
</style>