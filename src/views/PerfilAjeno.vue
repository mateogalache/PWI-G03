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
            <img src = "https://cdn.icon-icons.com/icons2/2574/PNG/512/profile_picture_user_icon_153847.png" class = "Redondap">
            <button class = "boton">Añadir amigo</button>
        </div>
        
        <br/>
        <div class = "cont">
            
            <div class = "rectangulo1">
                                    
                    <p><FONT color = "grey">Laura</FONT></p>
                    
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                    <p><FONT color = "grey">Garcia Cortes</FONT></p>
                   
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                <p><FONT color = "grey">Amistades</FONT></p>
                <div class = "Clogo">
                    <a href="ListaAmigosAjena"><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
                </div>
                
            </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                <p><FONT color = "grey">Eventos</FONT></p>
                <div class = "Clogo">
                    <a href="ListaAmigosAjena"><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
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
    background-color: rgba(200, 200, 200, .5);
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-around;
    border-radius: 50px;
    
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
.boton{
    display: flex;
    width: 120px;
    height: 20px;
    background-color: rgb(104, 100, 100);
    border-radius: 22px;
    justify-self: center;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-top: 5%;
}

@media (min-width: 1080px){
    h2{
        font-size: 50px;
    }
    .Redondap{
        width: 200px;
        height: 200px;
        border-radius: 150px;
        border: 1px solid black;
    }
    .Clogo{
        width: 20px;
        height: 20px;
        margin-left: auto;

    }
    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1%;
    }
   
    .boton{
        width: 180px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        
        

    }
    .rectangulo1{
        width: 700px;
        height: 50px;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0%;



    }
}





</style>