<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <article class = "cont6">
            <h3>Friends</h3>
            <div class = "BContainer6">
                <p class = "buscar6">Busca</p>
            </div>
                
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre6">Laura</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon6" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre6">Javier</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon6" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre6">Antonio</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon6" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre6">Maria</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon6" alt="tick">
                </div>
            </section>
            <section class = "PContainer6">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre6">Carlos</p></a>
                <div class = "Clogo6">
                    <img src="src\assets\flecha.png" class = "icon6" alt="tick">
                </div>
            </section>
        </article>
        <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.cont6{

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
.buscar6{
    display: flex;
    padding-left: 5%;
}
.PContainer6{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo6{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}
.icon6{
    
    width: 16px;
    height: 16px;
    margin-left: 10%;
    margin-right: 10%;
}

</style>