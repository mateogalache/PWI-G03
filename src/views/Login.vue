<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template>
    <Header>
        
    </Header>
    <main>
        <br><br/>
        <div class="contlogin">        
        <img src = "https://i.ibb.co/80sWyBS/sallevents.png" width = "200" height = "100" >
        </div>

        <br>
        <div class="contlogin">
        <div class = "center0">
            <h2><b>Iniciar sesión</b></h2>              
            <p><label>Email*</label></p>
            <input type="text" class = "texto">
            <p><label>Contraseña*</label></p>
            <input type="text" class = "texto">
            <p><small>¿Has olvidado tu contraseña?</small></p>
        </div>
       </div>
       <br>
    
       <div class="contlogin"> 
            <a href = "Home"><button class="Iniciar">
            <b><FONT COLOR="white">Iniciar Sesión</FONT></b>
            </button></a>
        </div>
        <div class="contlogin">
        <div class = "center0">
         <a HREF="Register"><p align = "right"><small>¿No tienes cuenta? Regístrate</small></p></a>
        </div>
       </div>
        
       
        
    </main>
    <Footer>
        
    </Footer>
  </template>
<style>

.center0{
   display: block;
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

 .texto{
    width: 98%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;

  }   

  .contlogin{
    display: flex;
    justify-content: center;
   align-items: center;
   

}
    
@media (min-width: 850px){
    .center0{
        width: 500px;
        
    }
    


    
    
}




</style>