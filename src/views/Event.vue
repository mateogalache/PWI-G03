<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>

<template>
    <Header2>

    </Header2>

    <main>
    <section class = "margenevento">
    <h2>Nombre del evento</h2></section>
    <article class="FCont">

        <section class = "First">
            
            <img src="src/assets/ImagenesEventos/deporte.png" alt="Fiesta" width="400" height="300">
            <h2>Descripción</h2>
        </section>

        <section class = "Second">
            
            <p>Competición de atletismo, donde podemos ver a los mejores corredores de catalunya pelear por una posición para los campeonatos de españa.</p>
        </section >

        <section class = "Third">
            <div>
                <h2>Puntúalo</h2>

            </div>
        </section>

        <section class = "Four">
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" >
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" >
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" >
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" >
            <img class = "star" src="\src\assets\estrella.png" alt = "chat" >
        </section>

        <section class ="Last">
            <img class ="IC" src="\src\assets\chat.png" alt="chat" >
            <img class ="IC" src="\src\assets\add.png" alt="add" >
            <a href="CompartirEventoAmigos"><img src="\src\assets\renviar.png" alt="share" width="45" height="25"></a>
        </section>

    </article>
    <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.margenevento{
    margin-left: 2%;
    margin-top: 2%;
}
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
    display:flex;
    justify-content: center;
}
.Four{
    display: flex;
    flex-direction: row;
    padding-bottom: 2%;

}

@Media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
    p{
        font-size: 30px;
    }
    .Second{
        width:80%;
    }
}


</style>