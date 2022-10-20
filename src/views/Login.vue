<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template>
    <Header>
        
    </Header>
    <main>
        <br>
        <div class="cont">
        <img src = "https://the-eshow.com/madrid19/wp-content/uploads/2017/03/laSalle.jpg" width = "100" height = "100" >
        </div>
        <br>
        <b>Iniciar sesión</b><br>                
        <p><label>Email*</label></p>
        <input type="text" class = "texto">
        <p><label>Contraseña*</label></p>
        <input type="text" class = "texto">
       <p><small>¿Has olvidado tu contraseña?</small></p>
       <br>
    
        <div class="cont">
        <button class="Iniciar">
            <b><FONT COLOR="white">Iniciar Sesión</FONT></b>
        </button>
        </div>
        <a HREF="Inicio"><p align = "right"><small>¿No tienes cuenta? Regístrate</small></p></a>
       

        
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
 .texto{
    width: 98%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;

 }
    
    
    




</style>