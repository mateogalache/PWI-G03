<script setup>
import Footer2 from '../components/Footer2.vue'
import Header3 from '../components/Header3.vue'
</script>

<template>

    <Header3>
            
    </Header3>

        <main> <!--Estamos indicando que esa etiqueta es un contenido principal-->
            <article class = "containercea"> <!--Usamos article porque varios items representan un listado-->

                <section class="eventocontainercea"><!--Con el secction separamos las secciones que no interesan-->
                    <h1>Amistades</h1>

                        <ul>
                        <li class="subtitulos">Más interacción:
                            <br><br>
                            <ol>
                                <li><button>José Manuel</button></li>
                                <li><button>Carlos</button></li>
                                <li><button>Javier</button></li>
                                <li><button>Sandra</button></li>  
                            </ol>
                        </li>
                        <br>
                        <li>Más olvidados:
                            <br><br>
                            <ol>
                                <li><button>Fran</button></li>
                                <li><button>Carla</button> </li>
                                <li><button>Ana</button></li>
                                <li><button>Sergio</button></li>
                            </ol>
                        </li>
                        <br>
                        <li>Favoritos:
                            <br><br>
                            <ol>
                                <li><button>Mateo</button></li>
                                <li><button>Sócrates</button> </li>
                                <li><button>Mario</button></li>
                                <li><button>Fran</button></li>
                            </ol>
                        </li>
                        </ul>
                        
                        <br>
                        <section class = "botonenviar"> <!--Usamos section porque  su contenido está relacionado y forma parte de un mismo significado. También podríamos usar div-->
                                    <p style="color: black">Enviar</p>
                        </section>
                        <br>
                </section>
                    
            </article>
            <div class="transparent6"></div><!--usamos este div para poder hacer scroll por la pagina y no se quede cortado la informacion-->

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

    @media (min-width:1080px){
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
            text-align: left    ;
            margin-top: -6px;
            width: 95%;        
        }

        .botonenviar{
            height: 40px;
            width: 110px;
            background-color: white;
            border: 1px solid grey;
            align-items:center;
            justify-content: center;
            padding: 1px;
            display: flex;
            border-radius: 50px;
            margin: 0 auto;
        }

        .subtitulos{
            margin: 0 auto;
        }
    }

</style>
