<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <article class = "cont4">
            <h2 class = "titulo4">Buscar Amigos</h2>
            <section class = "BContainer4">
                <p class = "buscar">Buscar amigo....</p>
            </section>
                
            <section class = "PContainer4">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAmigo"><p class = "nombre4">Nombre</p></a>
                <div class = "Clogo4">
                    <img src="src\assets\flecha.png" class = "icon4" alt="tick">
                </div>
            </section>
            <section class = "PContainer4">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAmigo"><p class = "nombre4">Nombre</p></a>
                <div class = "Clogo4">
                    <img src="src\assets\flecha.png" class = "icon4" alt="tick">
                </div>
            </section>
            <section class = "PContainer4">
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAmigo"><p class = "nombre4">Nombre</p></a>
                <div class = "Clogo4">
                    <img src="src\assets\flecha.png" class = "icon4" alt="tick">
                </div>
            </section>
        </article>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>

.cont4{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.titulo4{
    margin-left: 0%;
}

.BContainer4{
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    margin-bottom: 2%;
}
.buscar4{
    display: flex;
    padding-left: 5%;
}
.PContainer4{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo4{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}
.icon4{
    
    width: 16px;
    height: 16px;
    margin-left: 10%;
    margin-right: 10%;
}

</style>