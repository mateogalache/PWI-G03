<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>
        
    </Header2>
    <main>
        <br>
       <b>&nbsp;&nbsp;&nbsp;Datos</b>
       <br/><br/>
       <div class = "cont">
            <img src = "https://cdn.icon-icons.com/icons2/2574/PNG/512/profile_picture_user_icon_153847.png" class = "Redondap">
            
        </div>
        <p class = "cont">Cambiar foto de perfil</p>
        <br/>
        <div class = "cont">
            <div class = "rectangulo1">
                                    
                    <p><FONT color = "grey">Nombre</FONT></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                    <p><FONT color = "grey">Apellidos</FONT></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                    <p><FONT color = "grey">Email</FONT></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                    <p><FONT color = "grey">Contraseña</FONT></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
.rectangulo1{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-around;
    border-radius: 50px;
}
.rectangulo2{
    height: 20px;
    width: 80px;
    background-color: grey;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-around;
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
    




</style>