<script>

export default{
    name: "app",
    mounted(){
        //En la página de carga cogemos el token del localStorage, si este existe directamente iremos al home, si no existe iremos al Login
        const token = localStorage.getItem('accessToken'); 
        if(token){
            setTimeout(() =>{ //Utilizamos setTimeout para que tarde 3 segundos en realizarse así le damos un efecto de carga.
                this.$router.push('/Home');
            },3000);
        }
        else{
            setTimeout(() =>{
                this.$router.push('/Login');
            },3000);
        }
    }
}

</script>


<template>
    
    <main>            
        <img class="img" src = "src/assets/sallevents.png" > <!--Ponemos el tag de img para cargar una imagen-->
        <div class="loadline"></div> <!--Linea para ahcer la animación de carga-->        
    </main>
    
</template>

<style scoped>

img{
    width: 15rem;
    aspect-ratio: 10/4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}

.loadline{
    width:15rem;
    height: .25rem;
    background: var(--main-bg-color);
    top: calc(50% + 15rem/4);
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    animation: load 3s ease;
   
}

@keyframes load {
    0%{
        width:0;
    }
    100%{
        width:'';
    }
}

@media (min-width: 1080px) {
    img{
        width: 50rem;
    }
    .loadline{
        width: 50rem;
        top: calc(50% + 50rem/4);
    }
}

</style>
