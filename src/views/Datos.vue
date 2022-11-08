<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>
        
    </Header2>
    <main>
        <br>
       <h2>Datos</h2>
       <br/><br/>
       <div class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">
            
        </div>
        <p class = "cont">Cambiar foto de perfil</p>
        <br/>
        <div class = "cont">
            <div class = "rectangulo5">
                                    
                    <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nombre</FONT></p>
                    
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo5">                
                    <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apellidos</FONT></p>
                    
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo5">                
                    <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</FONT></p>
                    
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo5">                
                    <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contraseña</FONT></p>
                    
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            
       

        
    </main>
    <Footer2>
        
    </Footer2>
  </template>
<style>
.separacion{
    display:flex;
    
}
.rectangulo5{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 50px;
}
.rectangulo2{
    height: 20px;
    width: 80px;
    background-color: grey;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 20px;
    border-radius: 25px;
}



 .Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}

.cont{
    display: flex;
    justify-content: center;
   align-items: center;

}
.estrellas{
    width: 10px;
    height: 10px;
    justify-content: space-around;
    display: flex;
    background-color: transparent;
}  
    
@media (min-width:1080px){
    .rectangulo5{
        width: 1000px;
        justify-content: space-between;
               
    }
    .rectangulo2{
        margin-right: 20px;
    }
}



</style>