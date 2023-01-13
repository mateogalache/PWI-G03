<script>
const user_id = localStorage.getItem('userId'); //Cogemos el id del usuario del local storage
const token = localStorage.getItem('accessToken'); //Cogemos el token del local storage

export default {
  name: "App",
  data() {
    return {
      data: {}, //Data del usuario
      data2: {}, //Data de las estadisticas del usuario
    }
  },
  //Funciones que queremos cuando cargue la página
  beforeMount(){
    this.getProfile();
    this.getStaistics();
  },
  methods: {
    //Función para coger la información de el usuario según su id.
    getProfile(){
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/${user_id}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}` //Accestoken para acceder a la información
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);

            console.log(response);
    },
    getStaistics(){
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/${user_id}/statistics`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data2 = data);

            console.log(response);
    },



  }
};


</script>


<script setup>
//Importamos header y footer
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template> 
  
  <Header2>
      
  </Header2>
  <!--Otra página con uns estructura muy marcada que se divide en article y section.-->
  <main >
      <br>
      <div class = "margenestadistica"> <!--Ponemos margen al título-->
          <h2>Estadísticas</h2>
        </div>
      <br/><br/>
      
        <article class = "cont" v-for = "profile in data"> <!--Mostramos los datos del perfil(Foto y el nombre)-->
            <img :src=  "profile.image" class = "Redondap">
            
        </article>
        <p class = "cont" v-for="profile in data">{{profile.name}}</p>
      
      
      <br/>
      <div v-for="statistics in data2"> <!--Mostramos las estadísticas del usuario-->
        <!--Hemos separado los tres apartados en articles que colocan el rectangulo en el centro y después en section definimos el rectangulo con la información de las
        estadísticas dentro-->
        <article class = "cont">
            <section class = "rectangulo4">
                <p class = "grey">Puntuación</p>
                <p class="separacion2">{{ statistics.avg_score }}</p>
            </section>    
        </article>

        <br><br/>

        <article class = "cont">
            <section class = "rectangulo4">                
                    <p class = "grey">Num. comentarios</p>
                    <p class = "separacion2">{{statistics.num_comments}}</p>
            </section>    
        </article>
        
        <br><br/>

        <article class = "cont">
            <section class = "rectangulo3">                
                <p class = "grey">Porcentaje <br>usuarios con menos<br>comentarios</p>                
                <p class="separacion2">{{statistics.percentage_commenters_below}}%</p>
                
            </section>    
        </article>
      </div>
      
     

      
  </main>
    
    

  <Footer2>
      
  </Footer2>
</template>
<style scoped>

.rectangulo3 p:first-child{
    margin-left: 1rem;
}

.rectangulo4 p:first-child{
    margin-left: 1rem;
}

img{
    object-fit: cover;
}

.margenestadistica{
    margin-left: 2%;
}
.separacion2{
    display:flex;
    margin-right: 20px;
}
.rectangulo4{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 50px;
}
.rectangulo3{
    height: 70px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 25px;
}



 .Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}

.cont{
    display: flex;
    justify-content: center;
   align-items: center;

}
.estrellas{
    width: 10px;
    height: 10px;
    justify-content: space-around;
    display: flex;
    background-color: transparent;
    margin-right: 40px;
}  

@media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
    .rectangulo4{
        width: 800px;
    }
    .rectangulo3{
        width:800px;
    }
    .Redondap{
        width: 200px;
        height: 200px;
    }
}




</style>