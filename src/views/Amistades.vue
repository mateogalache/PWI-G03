<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>

<script>

const token = localStorage.getItem('accessToken'); //Cogemos el token del local storage
const id = localStorage.getItem('userId'); //Cogemos el token del local storage

export default {
    name: "App",
    data() {
        return {
            data: {},
            data2: {},
            notrequest: true,
        }
    },
    beforeMount() {


        this.getData();

    },
    methods: {
        getData() {

            //Nos devuelve la informacion del usuario en funcion de una id
            const response = fetch(`http://puigmal.salle.url.edu/api/v2/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            })

                .then(response => response.json())
                .then(data => this.data = data);
            console.log(response);


        },

    }
};

</script>
<template>
    <Header2>

    </Header2>
<!--Pagina para las amistades del usuario -->
    <main v-for= "info in data">
        <section class = "margenamistades">
           <h2>Amistades</h2> 
        </section>
        <section class = "cont"> <!--Mostramos la imagen del usuario-->
            
            <img :src= "info.image" class = "Redondap">
        </section>
        
            <div  class="botones">
                <p>{{ info.name }}</p>
                <a href="ListaAmigos"><button class="boton1">Lista ></button></a> 
                <a href="SearchFriend"><button class="boton1">Añadir amigos ></button></a>
                <a href="Pending"><button class="boton1">Request ></button></a>
            </div>
        <div class="transparent6"></div> <!--usamos este div para poder hacer scroll por la pagina y no se quede cortado la informacion-->
    </main>
    <Footer2>
        
    </Footer2>
</template>
<style scoped>
.margenamistades{
        margin-left: 2%;
    }
    .imgredonda{        
    width:40%;
    height:40%;
    border-radius:150px;
    
    }
 .Redondap {
     display: flex;
     width: 120px;
     height: 120px;
     border-radius: 150px;
     border: 1px solid black;
     object-fit: cover;

 }
 .cont {
     display: flex;
     justify-content: center;
     align-items: center;

 }
    .botones{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    a{
        text-decoration: none;
    }
    
    .boton1{
        display: flex;
        width:200px;
        height:30px;   
        background-color: rgb(104, 100, 100);
        border-radius:22px;   
        justify-self: center;
        justify-content: center;
        align-items: center;
        margin-top: 20%;
        color: white;    
  
    } 
   
    @media (min-width: 1080px){

    h2{
        font-size: 40px;
    }
    
    .botones p{
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }
    .botones{
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        
        

    }
    .boton1{
        width: 700px;
        height: 50px;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0%;



    }
        .Redondap {
            height: 200px;
            width: 200px;
        }
}
</style>