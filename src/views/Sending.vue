<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <div class = "cont23">
            <div class = "BContainer22">
                <button class="Send">
                    <a href = "Sending"><b>Send request</b></a>
                </button>

                <button class="Pending">
                    <a href = "Pending"><b>Pending request</b></a>
                </button>
            </div >
                
            <div class = "PContainer22">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer22">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer22">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <div class = "Clogo">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </div>
        </div>
    <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style>
.cont23{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.BContainer22{
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
.PContainer22{
    margin-top: 3%;
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

</style>