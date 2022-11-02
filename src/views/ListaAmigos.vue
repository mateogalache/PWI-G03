<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <br><b>Friends</b>
        <div class = "cont">
           
            
            
            <div class = "BContainer">
                <p class = "buscar">Busca</p>
            </div>
                
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <p class = "nombre">Nombre</p>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <p class = "nombre">Nombre</p>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <p class = "nombre">Nombre</p>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
        </div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style>
.cont{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}

.BContainer{
    margin-bottom: 5%;
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;

}
.buscar{
    display: flex;
    padding-left: 5%;
}
.PContainer{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}
.icon{
    
    width: 16px;
    height: 16px;
    margin-left: 10%;
    margin-right: 10%;
}
.nombre{
    padding-left: 10%;
}
</style>