<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>

<template>
    <Header2>

    </Header2>

    <main>
    <article class="FCont">

        <section class = "First">
            
            <img src="src/assets/ImagenesEventos/deporte.png" alt="Fiesta" width="400" height="300">
            <h2>Descripcion</h2>
        </section>

        <section class = "Second">
            
            <p>Competición de atletismo, donde podemos ver a los mejores corredores de catalunya pelera por una posición para los campeonatos de españa.</p>
        </section >

        <section class = "Third">
            <div>
                <h2>Puntualo</h2>

            </div>
        </section>

        <section class = "Four">
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" width="35" height="25">
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" width="35" height="25">
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" width="35" height="25">
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" width="35" height="25">
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" width="35" height="25">
        </section>

        <section class ="Last">
            <img class ="IC" src="\src\assets\chat.png" alt="chat" width="25" height="25">
            <img class ="IC" src="\src\assets\add.png" alt="add" width="25" height="25">
            <img class ="IC" src="\src\assets\renviar.png" alt="share" width="45" height="25">
        </section>

    </article>
    <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.FCont{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 2%;
    
}
.First{
    display: flex;
    align-items: center;
    flex-direction: column;

}

.Last{
    width: 100%;
    display: flex;
    justify-content: space-around;

}
.Second{
    width: 90%;
    padding: 4%;
    border-radius: 150px;
    border: 1px solid black;
    
}
.Four{
    display: flex;
    flex-direction: row;
    padding-bottom: 2%;

}



</style>