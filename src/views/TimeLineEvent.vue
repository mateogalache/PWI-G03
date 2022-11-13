<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>
<!--Pagina para ver el calendario de eventos-->
    <main>
        <div class = "cont">
            <h2>Calendar</h2>
            <img src="src/assets/calendario.jpeg" class = "calendar">
            
        </div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>

.cont{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}
.calendar{
    width: 100%;
    height: 100%;
}

@Media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
}

</style>