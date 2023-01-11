<script>

const token = localStorage.getItem('accessToken');
const email = localStorage.getItem('email');

export default {
  name: "App",
  data() {
    return {
      data: {},
      borrar: false,
      recAct: false,
      cerrar: false,

    }
  },
  beforeMount(){
    this.getProfileImage();
  },
  methods: {
    
     getProfileImage(){        
      
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/search?s=${email}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);

            console.log(response);            
            
            
           
    },
    misEventos(){
        localStorage.setItem('userId',this.data[0].id);
        console.log(this.data[0].id);
        this.$router.push({name:'MisEventos'});
        
        
    },
    eventPart(){
        localStorage.setItem('userId',this.data[0].id);
        console.log(this.data[0].id);
        this.$router.push({name:'EventsPart'});
        
        
    },
    estadisticas(){
        localStorage.setItem('userId',this.data[0].id);
        console.log(this.data[0].id);
        this.$router.push({name:'Estadisticas'});
    },
    borrarPopup(){
        this.borrar = true;
        this.recAct = true;
    },
    leavePopup(){
        this.borrar = false;
        this.recAct = false;
        this.cerrar = false;
    },
    cerrarPopup(){
        this.cerrar = true;
        this.recAct = true;
    },
    cerrarSesion(){
        localStorage.removeItem('accessToken');
        this.$router.push({name:'Login'});
    },
    async borrarPefil(){
        try{
            await fetch (`http://puigmal.salle.url.edu/api/v2/users`,{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            this.$router.push({name:'Login'});
        } catch (error){
            
        }
    }
    
  }
};

</script>




<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
import Header3 from '../components/Header3.vue'
</script>

<template>

  <Header3>
      
  </Header3>
  <!--Ponemos article para separar los diferentes contenidos dentro de la página, dentro de cada article tenemos el contenido donde las palabras están en p o h2 según su importancia
      como por ejemplo el título "Perfil" que está en h2. Además para separar los contenidos dentro del article ponemos section porque dentro de cada article era necesario separar 
      por secciones. Y como último tenemos los botones que nos sirven para representar botones donde el ususario puede "clickar".
      Al estar toda la página dividida de la misma manera no hacia falta comentar cada tag sino que hemos hecho un comentario general que define todas las partes de la página.-->
  
  <main>        
      <br>
      <article class = "contperfil">
          <h2>Perfil</h2> 
          <section class = "redondacolocacion">
              <a href = "Contactanos"><button class="Redondaperfil">
                  <p class = "igrande">i</p>           
              </button></a>                   
          </section>     
      </article>
      <br/>

      <section class = "cont" v-for="profile in data">
            
          <img :src=   "profile.image" class = "Redondap">
      </section>

      <p class = cont v-for="profile in data">{{ profile.name }}</p>
      <br/>
     
      <section  class = "cont">
          <a href = "Datos"><button class="Rectanguloperfil">
              <p>Datos</p>
          </button></a>
      </section>
     
     <br/>
     <section class = "cont">
         <a href = "Estadisticas"><button class="Rectanguloperfil" v-on:click="estadisticas()">
              <p>Estadísticas</p>
          </button></a>
      </section>
     
     <br/>
     <section class = "cont">
          <a href = "Amistades"><button class="Rectanguloperfil">
              <p>Amistades</p>
          </button></a>
      </section>

     <br/>
     <section class = "cont">
          <button class="Rectanguloperfil" v-on:click="misEventos()">
              <p>Mis eventos</p>
          </button>
      </section>
      <br/>
      <section class = "cont">
          <button class="Rectanguloperfil" v-on:click="eventPart()">
              <p>Eventos... participo</p>
          </button>
      </section>

     <br/>
     <section class = "cont">
          <button class="Rectanguloperfil" v-on:click="borrarPopup()">
              <p>Borrar perfil</p>
          </button>
      </section>

      <div class="borrarPerfil" v-if="borrar">
        <b>¿Seguro que quieres borrar el perfil?</b>
        <div class="botones">
            <button v-on:click="borrarPefil()">ACEPTAR</button>
            <button v-on:click="leavePopup()">CANCELAR</button>
        </div>
      </div>

      <div class="borrarPerfil" v-if="cerrar">
        <b>¿Seguro que quieres cerrar la sesión?</b>
        <div class="botones">
            <button v-on:click="cerrarSesion()">ACEPTAR</button>
            <button v-on:click="leavePopup()">CANCELAR</button>
        </div>
      </div>

     <br/>
     <section class = "cont">        
          <button class="Rectanguloperfil" v-on:click="cerrarPopup()">
              <p>Cerrar sesión</p>
          </button>
      </section>
     <br/><br/>

     <section class = "transparent6"></section>
      
  </main>

  <Footer2>
      
  </Footer2>
 
  <section class = "rectanguloN" v-if="recAct"></section>


</template>
 
<style scoped>


.botones *:hover{
    background: black;
    color: white;
}

.botones *{
    background: white;
    border: 1px solid black;
    padding: 0.5rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 300ms ease;
}

.botones{
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    
}

.borrarPerfil b{
    font-size: 20px;
}

.borrarPerfil{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 2rem;
    gap: 2rem;
    border: 2px solid black;
    border-radius: 50px;
    width: 20rem;
    height: 10rem;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 501;
}

.rectanguloN{
        
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: black;
        opacity: 70%;
        bottom: 0;
        z-index: 500;
    }

.cont .Rectanguloperfil:hover{
    opacity: 50%;
}

*{
    text-decoration: 0;
}

.cont p{
    color: white;
}

.redondacolocacion{
    display: block;
    margin-top: 20px;
}
.Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    object-fit: cover;
    
}
.Redondaperfil{
    display:flex;
    width: 25px;
    height: 25px;
    border-radius: 150px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.Rectanguloperfil{
   display: flex;
   width: 200px;
   height:30px;   
   background-color: rgb(104, 100, 100);
   border-radius:22px;   
   justify-self: center;
   justify-content: center;
   align-items: center;
   transition: all 300ms ease;   
   cursor: pointer;
} 
.cont{
    display: flex;
    justify-content: center;
   align-items: center;

}

.contperfil{
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 8%;
   
}

@media (min-width:1080px){
    .evento{
        width: 50%;
    }
    h2{
        font-size: 40px;
    }
    .Rectanguloperfil{
        width: 700px;
        
    }
    .Redondaperfil{
        width: 40px;
        height: 40px;
        border-color: black;
    }
    .redondacolocacion{
        margin-top: 40px;
    }
    .igrande{
        font-size:x-large;
    }
    .Redondap{
        height: 200px;
        width: 200px;
    }
   
}






</style>