<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>

<template>
 

 
    <Header2>
        
    </Header2>
    <main>
        
        <br>
        
        <div class = "contI">
            <b>&nbsp;&nbsp;&nbsp;Perfil</b> 
            <div class = "transparent">
                <button class="Redondai">
                    <p>i</p>           
                </button>
                <i>&nbsp;&nbsp;&nbsp;</i>    
            </div>     
        </div>
        <br/>
        <div class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">

        </div>
        <p class = cont>Nombre</p>
        <br/>


        <div class = "cont">
       <div class = "encima">
        
            <div class = "rectanguloB">
                <br/>
                <div class = cont> <p>¿Seguro que quieres cerrar la sesión? </p> </div><br/>
                <div class = "contI2">
                    <a href = "."><button class = "rectanguloC">
                        <p><FONT color = "white">Cerrar sesión</FONT></p>
                    </button></a>
                    <a href = "Perfil"><button class = "rectanguloC">
                        <p><FONT color = "white">Cancelar</FONT></p>
                    </button></a>
                </div>
            </div>
        </div>
        </div>


       <div class = "cont">
        <a href = "Datos"><button class="Rectanguloborrar">
                <p><FONT color = "white">Datos</FONT></p>
            </button></a>
       </div>
       
       <br/>
       <div class = "cont">
           <a href = "Estadisticas"><button class="Rectanguloborrar">
                <p><FONT color = "white">Estadísticas</FONT></p>
            </button></a>
       </div>
       
       <br/>
       <div class = "cont">
            <a href = "Amistades"><button class="Rectanguloborrar">
                <p><FONT color = "white">Amistades</FONT></p>
            </button></a>
       </div>
       <br/>
       <div class = "cont">
            <a href = "Events"><button class="Rectanguloborrar">
                <p><FONT color = "white">Mis eventos</FONT></p>
            </button></a>
       </div>
       <br/>
       <div class = "cont">
            <a href = "Borrarperfil"><button class="Rectanguloborrar">
                <p><FONT color = "white">Borrar perfil</FONT></p>
            </button></a>
       </div>
       <br/>
       <div class = "cont">
        
            <a href = "Cerrarsesion"><button class="Rectanguloborrar">
                <p><FONT color = "white">Cerrar sesión</FONT></p>
            </button></a>
       </div>
       <br/><br/>
      
       

    
        
   
        
      
       

        
    </main>
    <Footer2>
        
    </Footer2>
 <div class = "rectanguloN">
    
 </div>
  </template>
 
<style>
.transparent10{
    display:flex;
    width: 100%;
    height: 135px;
    background-color: transparent;
}
.transparent{
    display:flex;
}
.Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}
.Redondai{
    display:flex;
    width: 25px;
    height: 25px;
    border-radius: 150px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
}
.Rectanguloborrar{
   display: flex;
   width:200px;
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

.contI{
    display: flex;
    justify-content: space-between;
   
}
.contI2{
    display: flex;
    justify-content: space-around;
   
}
.rectanguloN{
      
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: black;
    opacity: 70%;
    bottom: 0;
    
}

.rectanguloB{
    
    width: 250px;
    height: 180px;
    background-color: white;
    border-radius: 30px;
   

}
.encima{
       
    position: fixed;
}    

.rectanguloC{
    display:flex;
    width: 100px;
    height: 50px;
    background-color: black;
    border-radius: 20px;
    justify-content: center;
    align-items:center;
}
@media (min-width:850px){
    .Rectanguloborrar{
        width: 1000px;
        
    }
    .transparent10{
        height: 24.5px;
    }
}


</style>