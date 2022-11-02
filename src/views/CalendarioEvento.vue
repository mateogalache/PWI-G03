<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue';

</script>


<template>
    
    <Header3>
            
    </Header3>

    <div class = "container">
        <div class = "rectanguloredondeadeo2">           
            Buscar evento...
        </div>
        <div class = "rectanguloredondeadeo3">           
            Filtro
        </div>
        <div class="fondo">
            <div class="popup"> 
                <div class="popup2">
                    Lugar...
                </div>
                <div class="popup2">
                    Fecha Inicio...
                    <div class="calendario">
                        <img src = "src/assets/calendar.png"
                        width="15" height="15" alt="Botón calendario">
                    </div>
                </div>
                <div class="popup3">
                    <b>Aplicar</b>
                </div>
                <div class="popup4">
                    <b>Cancelar</b>
                </div>
            </div>
        </div>
        
    </div>

    <Footer2>
            
    </Footer2>

</template>


<style scoped>
    .container{
        height: 472px;
        margin: 7em;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .fondo{
        background-color: lightgrey;
        height: 500px;
        width: 300px;
        padding: 2em;
        margin-top: 1px;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .popup{
        background-color: white;
        height: 60px;
        width: 200px;
        padding: 2em;
        border-radius: 30px;
        justify-content: center;
        align-items: top;
        display: flex;
        flex-direction: column;
    }

    .popup2{
        color: gray;
        height: 25px;
        width: 200px;
        background-color: transparent;
        border: 1px solid grey;
        border-radius: 1px;
        margin-top: 10px;
        justify-content: left;
        align-items: top;
        display: flex;
    }

    .popup3{
        color: gray;
        height: 25px;
        width: 75px;
        background-color: transparent;
        border: 1px solid grey;
        align-items:top;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        float: left;

    }

    .popup4{
        color: gray;
        height: 25px;
        width: 75px;
        background-color: transparent;
        border: 1px solid grey;
        align-items:top;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        float: left;
    }


    .rectanguloredondeadeo2{
        display: flex;
        color: gray;
        height: 25px;
        width: 350px;
        background-color: transparent;
        border: 1px solid grey;
        align-items:center;
        padding: 3px;
        border-radius: 50px;
        margin-top: -70px;
        margin-left: -20px;
    }

    .rectanguloredondeadeo3{
        color: white;
        height: 25px;
        width: 75px;
        background-color: grey;
        border: 1px solid grey;
        display: flex;
        align-items:center;
        justify-content: center;
        border-radius: 50px;
        margin: 15px;
        margin-left: 275px;
    }

    .calendario{
        margin-left: 80px;
    }

</style>