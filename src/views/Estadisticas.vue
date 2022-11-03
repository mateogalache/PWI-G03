<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <head>
        
    </head>
    <Header2>
        
    </Header2>
    <main>
        <br>
       <b>&nbsp;&nbsp;&nbsp;Estadísticas</b>
       <br/><br/>
       <div class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">
            
        </div>
        <p class = "cont">Nombre</p>
        <br/>
        <div class = "cont">
            <div class = "rectangulo4">
                                    
                    <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puntuación</FONT></p>
                    
                    <div class = "estrellas">
                        <img src = "https://cdn-icons-png.flaticon.com/512/616/616655.png">
                        <img src = "https://cdn-icons-png.flaticon.com/512/616/616655.png">
                        <img src = "https://cdn-icons-png.flaticon.com/512/616/616655.png">
                        <img src = "https://cdn-icons-png.flaticon.com/512/616/616655.png">
                        <img src = "https://cdn-icons-png.flaticon.com/512/616/616655.png">            
                    </div>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo4">                
                    <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Num. comentarios</FONT></p>
                    
                    <p class = "separacion2">156</p>
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo3">                
                <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Porcentaje <br
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usuarios con menos<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comentarios
                    </FONT></p>
                    <div class = "separacion2">
                    <p>48%</p>
                </div>
                </div>    
            </div>
       

        
    </main>
    <Footer2>
        
    </Footer2>
  </template>
<style>
.separacion2{
    display:flex;
    margin-right: 20px;
}
.rectangulo4{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 50px;
}
.rectangulo3{
    height: 70px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
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
    margin-right: 40px;
}  

@media (min-width: 1080px){
    .rectangulo4{
        width: 800px;
    }
    .rectangulo3{
        width:800px;
    }
}




</style>