<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

</script>
<template>

    <Header>
        
    </Header>

    <main>
        <div class = "cont">
            <div class = "BContainer">
                <button class="Send">
                    <b>Send request</b>
                </button>

                <button class="Pending">
                    <b>Pending request</b>
                </button>
                
            </div >
                
            <div class = "PContainer">
                <p class = "nombre">Nombre</p>
                <div class = "Clogo">
                    <img src="src\assets\tick.png" class = "icon" alt="tick">
                    <img src="src\assets\cross.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <p class = "nombre">Nombre</p>
                <div class = "Clogo">
                    <img src="src\assets\tick.png" class = "icon" alt="tick">
                    <img src="src\assets\cross.png" class = "icon" alt="tick">
                </div>
            </div>
            <div class = "PContainer">
                <p class = "nombre">Nombre</p>
                <div class = "Clogo">
                    <img src="src\assets\tick.png" class = "icon" alt="tick">
                    <img src="src\assets\cross.png" class = "icon" alt="tick">
                </div>
            </div>
        </div>
    </main>
    <Footer>

    </Footer>
</template>

<style>
.cont{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.BContainer{
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
.PContainer{
    margin-top: 5%;
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
.nombre{
    padding-left: 10%;
}
</style>