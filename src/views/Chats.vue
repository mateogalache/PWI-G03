<script setup>
import Footer2 from '../components/Footer2.vue'
import Header from '../components/Header.vue'
import Header3 from '../components/Header3.vue';

</script>
<template>

    <Header3>
        
    </Header3>

    <main>
        <div class = "cont">
            <h3>Chats</h3>
            <div class = "BContainer">
                <p class = "buscar">Busca</p>
            </div>
                
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <div class="chat">
                    <b class = "nombre">Laura</b>
                    <p class = "mensaje">Hola Laura vienes al cine hoy?</p>
                </div>
                
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <div class="chat">
                    <b class = "nombre">Antonio</b>
                    <p class = "mensaje">Me debes una Antonio</p>
                </div>
                <div class = "Clogo">
                    <a href='Chat'><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
                </div>
            </div>
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <div class="chat">
                    <b class = "nombre">Javier</b>
                    <p class = "mensaje">Ey Javi hemos quedado en media hora</p>
                </div>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <div class="chat">
                    <b class = "nombre">Maria</b>
                    <p class = "mensaje">Que tal estas Maria?</p>
                </div>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <div class="chat">
                    <b class = "nombre">Carlos</b>
                    <p class = "mensaje">Hola Carlos vienes a comer hoy?</p>
                </div>
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

.perfil{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 5%;
    
}
.nombre{
    display: flex;
    margin-right: 20%;
    margin-top: 5%;
    
}
</style>