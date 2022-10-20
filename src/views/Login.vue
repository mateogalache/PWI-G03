<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
    <Header>
       
    </Header>
    <main>
        <br>
        <b>Iniciar sesión</b><br>                
       <p>Email*</p>
       <hr>
       <p>Contraseña*</p>
       <hr>
       <p><small>¿Has olvidado tu contraseña?</small></p>
       <br>
    
        <div>
        <button class="Iniciar">
            <b><FONT COLOR="white">Iniciar Sesión</FONT></b>
        </button>
        </div>
       

        
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
   justify-self: center;
   justify-content: center;
   align-items: center;
   
} 


</style>