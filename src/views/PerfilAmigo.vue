<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>
        
    </Header2>
    <!--Pagina cuandro entras al perfil de un amigo-->
    <main>
        <br>
       <h2>Datos</h2>
       <br/><br/>
       <div class = "cont">
            <img src = "https://cdn.icon-icons.com/icons2/2574/PNG/512/profile_picture_user_icon_153847.png" class = "Redondap">
            
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
            
       

  <div class="transparent6"></div><!--usamos este div para poder hacer scroll por la pagina y no se quede cortado la informacion-->
  </main>
  <Footer2>
      
  </Footer2>
</template>
<style scoped>
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

@media (min-width: 1080px){
   
    .Redondap{
        width: 200px;
        height: 200px;
        border-radius: 150px;
        border: 1px solid black;
    }
    .Clogo{
        width: 20px;
        height: 20px;
        margin-left: 50%
    }
    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }
    .icon{
        width: 20px;
        height: 20px;
        padding: auto;
    }
   
   
    .rectangulo1{
        width: 700px;
        height: 50px;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        



    }
}


</style>