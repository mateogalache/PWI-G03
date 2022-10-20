<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
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
.cont{
    display: flex;
    justify-content: center;
   align-items: center;

}



</style>