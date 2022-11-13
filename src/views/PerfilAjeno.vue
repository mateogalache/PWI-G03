<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>
        
    </Header2>
    <!--Pagina igual que la del perfil amigo pero con el boton de añadir amigo -->
    <main>
        <br>
        <section class = "margenamigo">
            <h2>Datos</h2>
        </section>
       
        
       
       <div class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">
            
        </div>
        <div class = "cont">
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
                    <a href="Events"><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
                </div>    
            </div>    
            </div>
            
       

  <div class="transparent6"></div>
  </main>
  <Footer2>
      
  </Footer2>
</template>
<style scoped>
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


.margenamigo{
    margin-left: 2%;
}
.rectangulo1{
    height: 30px;
    width: 300px;
    background-color: rgba(200, 200, 200, .5);
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 50px;
    
}



 .Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    justify-content: center;
    
}

.cont{
    display: flex;
    justify-content: center;
    align-items: center;

}
.Clogo{
    margin-left: 5%;
}

@media (min-width: 1080px){
   
    h2{
        font-size: 40px;
    }
    .Redondap{
        width: 200px;
        height: 200px;
        border-radius: 150px;
        border: 1px solid black;
        justify-content: center;
        margin-left: 30%;
    }
<<<<<<< HEAD
    
=======
    .Clogo{
        width: 20px;
        height: 20px;
        margin-left: 50%;
        

    }
>>>>>>> 85236e52b84bf31dc771ccf80f50ec00be20e899
    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1%;
        
    }
    
   
   
    .rectangulo1{
        width: 700px;
        height: 50px;
        font-size: 20px;
        display: flex;
<<<<<<< HEAD
        
        justify-content: center;
        align-items: center;     
=======
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0%;
        



>>>>>>> 85236e52b84bf31dc771ccf80f50ec00be20e899
    }

    .boton{
        width: 350px;
        height: 40px;
    }   
}


</style>