<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <br><h2 class="titulo34">Friends</h2>
        <div class = "cont5">
            <div class = "BContainer5">
                <p class = "buscar5">Busca</p>
            </div>
                
            <div class = "PContainer5">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAmigo"><p class = "nombre5">Nombre</p></a>
                <div class = "Clogo5">
                    <img src="src\assets\flecha.png" class = "icon5" alt="tick">
                </div>
            </div>
            <div class = "PContainer5">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAmigo"><p class = "nombre5">Nombre</p></a>
                <div class = "Clogo5">
                    <img src="src\assets\flecha.png" class = "icon5" alt="tick">
                </div>
            </div>
            <div class = "PContainer5">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAmigo"><p class = "nombre5">Nombre</p></a>
                <div class = "Clogo5">
                    <img src="src\assets\flecha.png" class = "icon5" alt="tick">
                </div>
            </div>
            <div class="PContainer5">
                <img src="src/assets/usuario.png" class="perfil">
                <a href="PerfilAmigo">
                    <p class="nombre5">Nombre</p>
                </a>
                <div class="Clogo5">
                    <img src="src\assets\flecha.png" class="icon5" alt="tick">
                </div>
            </div>
            <div class="PContainer5">
                <img src="src/assets/usuario.png" class="perfil">
                <a href="PerfilAmigo">
                    <p class="nombre5">Nombre</p>
                </a>
                <div class="Clogo5">
                    <img src="src\assets\flecha.png" class="icon5" alt="tick">
                </div>
            </div>
            <div class="PContainer5">
                <img src="src/assets/usuario.png" class="perfil">
                <a href="PerfilAmigo">
                    <p class="nombre5">Nombre</p>
                </a>
                <div class="Clogo5">
                    <img src="src\assets\flecha.png" class="icon5" alt="tick">
                </div>
            </div>
        </div>
        <div class="transparent6"></div>
    </main>

    <Footer2>

    </Footer2>
</template>

<style>
.titulo34{
    padding-left: 2%;
}
.cont5{
    margin-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}

.BContainer5{
    margin-bottom: 2%;
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;

}
.buscar5{
    display: flex;
    padding-left: 5%;
}
.PContainer5{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo5{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}
.icon5{
    
    width: 16px;
    height: 16px;
    margin-left: 10%;
    margin-right: 10%;
}
</style>