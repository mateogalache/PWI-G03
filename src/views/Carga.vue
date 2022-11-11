<script setup>

</script>


<template>
    
    <main>
        <article class = centropantalla> <!--Article para hacer una seccion grande y luego ponemos un section para una parte donde tenemos el contenido-->
            <section class = "imagencentro">
                <img src = "https://i.ibb.co/80sWyBS/sallevents.png" > <!--Ponemos el tag de img para cargar una imagen-->
                <meta http-equiv="refresh" content="3; url = /Login">  <!--El tag de meta nos servirá para pasar a otra página sin necesidad de clickar nada y pasará a la siguiente página en 3 segundos-->        
            </section>
        </article>   
    </main>
    
</template>

<style scoped>
.imagencentro{
    display: flex;
    width: 150px;
    height: 100px;
}
.centropantalla{
    top: 50%;
    left: 30%;
    transform: translate(-50%,-50%);
    position: absolute;
    transition: width 2s;
    transition-duration: 2s;
}

@media(min-width: 1080px){
    .imagencentro{
        width: 100%;
        height: 100%;
    }
    .centropantalla{
        left: 50%;  
    }
}


</style>
