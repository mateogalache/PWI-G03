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
            <b style="color: black">Creación Evento</b>
    </div>
        <br><br/>
    <div class = "rectanguloredondeadeo">           
        <p style="color: grey">Nombre Evento</p>
    </div>

    <div class = "rectanguloredondeadeo">           
            <p style="color: grey">Tipo Evento</p>
    </div>

    <div class = "rectanguloredondeadeo">           
            <p style="color: grey">Dia Evento</p>
    </div>

    <div class = "rectanguloredondeadeo">           
            <p style="color: grey">Localización</p>
    </div>

    <div class = "rectanguloredondeadeo">           
            <p style="color: grey">Descripción</p>
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
</style>