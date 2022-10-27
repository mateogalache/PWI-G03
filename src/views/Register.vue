<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template>
    <Header>
        
    </Header>
    <main>
        <br><br/><br/>
        <div class="cont">
        <img src = "https://i.ibb.co/80sWyBS/sallevents.png" width = "200" height = "100" >
        </div>
        <br>
        <h2><b>Datos personales</b></h2>                
        <p><label>Nombre*</label></p>
        <input type="text" class = "texto">
        <p><label>Apellidos*</label></p>
        <input type="text" class = "texto">
        <p><label>Email*</label></p>
        <input type="text" class = "texto">
        <p><label>Contraseña*</label></p>
        <input type="text" class = "texto">
        <p><label>Foto de perfil*</label></p>
        <input type="text" class = "texto">
        <br/><br/><br/>
        
       
    
        <div class="cont">
        <a href = "Home"><button class="Iniciar">
            <b><FONT COLOR="white">Registrar</FONT></b>
        </button></a>
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