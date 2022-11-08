<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>

<template>

    <Header3>
            
    </Header3>

        <main>
            <div class = "containercea">

                <div class="eventocontainercea">
                    <h1>Amistades</h1>

                        <ul>
                        <li>Más interacción:
                            <br><br>
                            <ol>
                                <li><button class="btn success">José Manuel</button></li>
                                <li><button class="btn success">Carlos</button></li>
                                <li><button class="btn success">Javier</button></li>
                                <li><button class="btn success">Sandra</button></li>  
                            </ol>
                        </li>
                        <br>
                        <li>Más olvidados:
                            <br><br>
                            <ol>
                                <li><button class="btn success">Fran</button></li>
                                <li><button class="btn success">Carla</button> </li>
                                <li><button class="btn success">Ana</button></li>
                                <li><button class="btn success">Sergio</button></li>
                            </ol>
                        </li>
                        <br>
                        <li>Favoritos:
                            <br><br>
                            <ol>
                                <li><button class="btn success">Mateo</button></li>
                                <li><button class="btn success">Sócrates</button> </li>
                                <li><button class="btn success">Mario</button></li>
                                <li><button class="btn success">Fran</button></li>
                            </ol>
                        </li>
                        </ul>
                        
                        <br>
                        <div class = "botonenviar">           
                                    <p style="color: black">Enviar</p>
                            
                        </div>
                        <br>
                </div>
                    
            </div>
        </main>


    <Footer2>

    </Footer2>

</template>

<style scoped>

    .containercea{
        display: flex;
        text-align: center;
        padding: 1em;
    }

    .eventocontainercea{
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        padding: 1em;
        text-align: left;
        margin: 0 auto;
        width: 70%;        
    }

    .botonenviar{
        height: 30px;
        width: 100px;
        background-color: white;
        border: 1px solid grey;
        align-items:center;
        justify-content: center;
        padding: 3px;
        display: flex;
        border-radius: 50px;
        margin: 0 auto;
    }

</style>
