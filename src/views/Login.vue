<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template>
    <header class="HContainer">
        <h1 class="titulo">OPEN EVENTS</h1>
    </header>
    <main>
        <br>
        <b>Iniciar sesión</b><br>                
       <p>Email*</p>
       <hr>
       <p>Contraseña*</p>
       <hr>
       <p><small>¿Has olvidado tu contraseña?</small></p>
       <br>
    
        <div class="cont">
        <button class="Iniciar">
            <b><FONT COLOR="white">Iniciar Sesión</FONT></b>
        </button>
        </div>
        <p align = "right"><small>¿No tienes cuenta? Regístrate</small></p>
       

        
    </main>
    <Footer>
        
    </Footer>
  </template>
<style>

.Iniciar{
   display: flex;
   width:150px;
   height:50px;   
   background-color: rgb(104, 100, 100);
   border-radius:22px;   
   justify-self: center;
   justify-content: center;
   align-items: center;

   
} 
.HContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: cadetblue;
}
.FContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: cadetblue;
    align-items: center;
    flex-wrap: wrap;
    
}



</style>