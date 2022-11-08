<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template>
    <Header>
        
    </Header>
    <main>
      <div class = "background"></div>
      
      <div class = "recuadro2"></div>
      <div class = "registercentro">
        <br>
        <div class="cont">
        <img src = "https://i.ibb.co/80sWyBS/sallevents.png" width = "150" height = "75" >
        </div>
        
        <div class = "cont">
        <div class = "centro1">
        <h2><b>Datos personales</b></h2>                
        <p><label>Nombre*</label></p>
        <input type="text" class = "texto">
        <p><label>Apellidos*</label></p>
        <input type="text" class = "texto">
        <p><label>Email*</label></p>
        <input type="text" class = "texto">
        <p><label>Contraseña*</label></p>
        <input type="password" class = "texto">
        <p><label>Foto de perfil*</label></p>
        <input type="text" class = "texto">
        <br/><br/>
        </div>
        </div>
    
        <div class="cont">
        <a href = "Home"><button class="Iniciar">
            <b><FONT COLOR="white">Registrar</FONT></b>
        </button></a>
        </div>
        <div class = "transparent9">

        </div>
      </div> 

        
    </main>
    <Footer>
        
    </Footer>
  </template>
<style>
.background2{
    position:fixed;
    width: 100%;
    height: 100%;
    background-image: url("src/assets/fondo.png");
    z-index: -3;
}
.recuadro2{
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    width: 600px;
    height: 700px;
    border: 2px solid black;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 5px 2px 2px black;
    z-index: -2;
    background-color: white;
    
}
.transparent9{
    display:flex;
    width: 100%;
    height: 80px;
    background-color: transparent;
    
}
.centro1{
  display:block;
  width: 100%;
}
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
 .registercentro{
  display:block;
 } 
    
  @media (min-width: 1080px){
    .centro1{
      width: 500px;
    }
    .registercentro{
      
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  @media (max-width: 1080px){
    .recuadro2{
        display: none;
    }
    .background2{
        display:none;
    }
    
}  
</style>
