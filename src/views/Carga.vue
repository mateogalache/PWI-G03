<script>
export default{
    name: "app",
    data(){

    },
    mounted(){
        const token = localStorage.getItem('accessToken');
        if(token){
            setTimeout(() =>{
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
        <article class = centropantalla> <!--Article para hacer una seccion grande y luego ponemos un section para una parte donde tenemos el contenido-->
            <section class = "imagencentro">
                <img src = "src/assets/sallevents.png" > <!--Ponemos el tag de img para cargar una imagen-->
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
