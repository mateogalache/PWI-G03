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
            
                <img class="img" src = "src/assets/sallevents.png" > <!--Ponemos el tag de img para cargar una imagen-->
                <div class="loadline"></div>
        
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
