<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <br><h2 class="titulo34">Amigos</h2>
        <article class = "cont6">
            <div class = "BContainer6">
                <p class = "buscar">Busca</p>
            </div>
                
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil" >
                <a href="PerfilAjeno"><p class = "nombre6">Laura</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil" >
                <a href="PerfilAjeno"><p class = "nombre6">Javier</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil" >
                <a href="PerfilAjeno"><p class = "nombre6">Antonio</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil" >
                <a href="PerfilAjeno"><p class = "nombre6">Maria</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil" >
                <a href="PerfilAjeno"><p class = "nombre6">Carlos</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </div>
            </section>
        </article>
        <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.titulo34{
    padding-left: 2%;
    padding-right: 2%;
}
.cont6{
    margin-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}

.BContainer6{
    margin-bottom: 5%;
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;

}

.PContainer6{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 98%;
    justify-content: space-between;
    padding-left: 2%;

}
.Clogo6{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}

@Media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
}
</style>