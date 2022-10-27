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
            
            <img src="https://images.squarespace-cdn.com/content/v1/5f7b618b9a735b31389fb9d9/1602110375241-7DCPDD2U2OL94082FNE9/Fiestas-Universitarias_01.jpg?format=1000w" alt="Fiesta" width="400" height="300">
            <h2>Descripcion</h2>
        </section>

        <section class = "Second">
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quaerat non quidem cupiditate, voluptates explicabo aliquid voluptatibus enim ab aspernatur repudiandae necessitatibus magni voluptate saepe possimus fugit? Reprehenderit, quas labore!</p>
        </section >

        <section class = "Third">
            <div>
                <h2>Puntualo</h2>

            </div>
        </section>

        <section class ="Last">
            <img class ="IC" src="\src\assets\chat.png" alt="chat" width="25" height="25">
            <img class ="IC" src="\src\assets\add.png" alt="add" width="25" height="25">
            <img class ="IC" src="\src\assets\renviar.png" alt="share" width="45" height="25">
        </section>

    </article>
    </main>
    <Footer2>

    </Footer2>
</template>

<style>
.FCont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    
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
    width: 75%;
    padding: 4%;
    border-radius: 150px;
    border: 1px solid black;
    

}



</style>