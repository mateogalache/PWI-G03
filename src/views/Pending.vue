<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <div class = "cont2">
            <div class = "BContainer3">
                <button class="Send">
                    <a href = "Sending"><b>Send request</b></a>
                </button>

                <button class="Pending">
                    <a href = "Pending"><b>Pending request</b></a>
                </button>
            </div >
                
                
            <div class = "PContainer3">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <div class = "Clogo2">
                    <img src="src\assets\tick.png" class = "icon2" alt="tick">
                    <img src="src\assets\cross.png" class = "icon2" alt="tick">
                </div>
            </div>
            <div class = "PContainer3">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <div class = "Clogo2">
                    <img src="src\assets\tick.png" class = "icon2" alt="tick">
                    <img src="src\assets\cross.png" class = "icon2" alt="tick">
                </div>
            </div>
            <div class = "PContainer3">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <div class = "Clogo2">
                    <img src="src\assets\tick.png" class = "icon2" alt="tick">
                    <img src="src\assets\cross.png" class = "icon2" alt="tick">
                </div>
            </div>
        </div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style>
.cont2{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.BContainer3{
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    

}
.Send{
    width: 100%;
}
.Pending{
    width: 100%;
}
.PContainer3{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo2{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}
.icon2{
    
    width: 16px;
    height: 16px;
    margin-left: 10%;
    margin-right: 10%;
}

</style>