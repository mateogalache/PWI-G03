<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>

    </Header2>
    <main>
        <h2>Amistades</h2>
        <div class="foto1">
            <img src='src/assets/FRENTE-NITIDA.webp' class="imgredonda">
        </div>
        
            <div class="botones">
                <p>Antonio</p>
                <a href="ListaAmigos"><button class="boton1">Lista ></button></a> 
                <a href="BuscaAmigo"><button class="boton1">Añadir amigos ></button></a>
                <a href="Pending"><button class="boton1">Request ></button></a>
            </div>
           
    </main>
    <Footer2>
        
    </Footer2>
</template>
<style>
    .imgredonda{        
    width:40%;
    height:40%;
    border-radius:150px;
    
    }
    .foto1{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }
    .botones{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    a{
        text-decoration: none;
    }
    
    .boton1{
        display: flex;
        width:200px;
        height:30px;   
        background-color: rgb(104, 100, 100);
        border-radius:22px;   
        justify-self: center;
        justify-content: center;
        align-items: center;
        margin-top: 20%;
        color: white;    
  
    } 
    .nombre{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    }
    
   


</style>