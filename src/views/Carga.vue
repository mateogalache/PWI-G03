<script setup>

</script>


<template>
    
    <main>
        


    <div class = centropantalla>
        <div class = "imagencentro">
            <img src = "https://i.ibb.co/80sWyBS/sallevents.png" >
            <meta http-equiv="refresh" content="3; url = /Login">
           
        </div>
    </div>   
    </main>
    
</template>

<style>
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

@media(min-width: 850px){
    .imagencentro{
        width: 100%;
        height: 100%;
    }
    .centropantalla{
        left: 50%;  
    }
}


</style>
