<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
import Header3 from '../components/Header3.vue';
</script>

<template>
 

 
    <Header3>
        
    </Header3>
    <main>
        
        <br>

        <div class = "contperfil">
            <h2>Perfil</h2> 
            <div class = "redondacolocacion">
                
                <a href = "Contactanos"><button class="Redondaperfil">
                    <p>i</p>           
                </button></a>
                   
            </div>     
        </div>
        <br/>
        <div class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">

        </div>
        <p class = cont>Nombre</p>
        <br/>


       
       <div  class = "cont">
        <a href = "Datos"><button class="Rectanguloperfil">
                <p><FONT color = "white">Datos</FONT></p>
            </button></a>
       </div>
       
       <br/>
       <div class = "cont">
           <a href = "Estadisticas"><button class="Rectanguloperfil">
                <p><FONT color = "white">Estadísticas</FONT></p>
            </button></a>
       </div>
       
       <br/>
       <div class = "cont">
            <a href = "Amistades"><button class="Rectanguloperfil">
                <p><FONT color = "white">Amistades</FONT></p>
            </button></a>
       </div>
       <br/>
       <div class = "cont">
            <a href = "Events"><button class="Rectanguloperfil">
                <p><FONT color = "white">Mis eventos</FONT></p>
            </button></a>
       </div>
       <br/>
       <div class = "cont">
            <a href = "Borrarperfil"><button class="Rectanguloperfil">
                <p><FONT color = "white">Borrar perfil</FONT></p>
            </button></a>
       </div>
       <br/>
       <div class = "cont">
        
            <a href = "Cerrarsesion"><button class="Rectanguloperfil">
                <p><FONT color = "white">Cerrar sesión</FONT></p>
            </button></a>
       </div>
       <br/><br/>
       <div class = "transparent6"></div>
       
       

    
        
   
        
      
       

        
    </main>
    <Footer2>
        
    </Footer2>
 
  </template>
 
<style>


.redondacolocacion{
    display: block;
    margin-top: 20px;
}
.Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}
.Redondaperfil{
    display:flex;
    width: 25px;
    height: 25px;
    border-radius: 150px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
}
.Rectanguloperfil{
   display: flex;
   width: 200px;
   height:30px;   
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

.contperfil{
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 8%;
   
}

@media (min-width:1080px){
    .Rectanguloperfil{
        width: 700px;
        
    }
    .Redondaperfil{
        width: 50px;
        height: 50px;
    }
}






</style>