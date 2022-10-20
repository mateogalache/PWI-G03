
<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
    <main>
        <Header></Header>
        <Footer></Footer>
        
    </main>
</template>

.HContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: cadetblue;
}
.FContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: cadetblue;
    align-items: center;
    flex-wrap: wrap;
    
}
.Fright{
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    padding-left: 8%;
    
    
    
}

.Fleft{
    display: flex;
    justify-items: center;
    padding-right: 15%;
    padding-left: 10%;
}

</style>