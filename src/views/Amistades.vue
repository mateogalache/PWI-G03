<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2></Header2>
    <main>
        <h2>Amistades</h2>
        <div class="foto1">
            <img src='src/assets/FRENTE-NITIDA.webp' class="imgredonda">
        </div>
            <li class="botones">
               <ul><button class="boton1">Lista ></button></ul> 
                <ul><button class="boton2">Añadir amigos ></button></ul>
                <ul><button class="boton3">Request ></button></ul>
            </li>
           
    </main>
    <Footer2></Footer2>
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
        justify-content: space-between;
        align-items: center;
        margin-top: 5%;
        margin-bottom: 5%;
        width: 100%;
        height: 50%;
        
    }
    
   


</style>