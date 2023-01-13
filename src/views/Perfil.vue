<script>

const token = localStorage.getItem('accessToken'); //Cogemos el token del local storage
const email = localStorage.getItem('email'); //Cogemos el email del local storage

export default {
  name: "App",
  data() {
    return {
      data: {}, //Data para recoger los datos del usuario
      borrar: false, //Booleano para enseñar popup de borrar perfil
      recAct: false, //Booleano para mostrar rectangulo negro de fondo
      cerrar: false, //Booleano para mostrar popup de cerrar sesion

    }
  },
  beforeMount(){
    //Funciones que queremos cuando cargue la página
    this.getProfileImage();
  },
  methods: {
    //Función que coge los datos del usuario. En este caso hemos cogido los datos con el email ya que es único, pero también se puede con el id.
     getProfileImage(){        
      
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/search?s=${email}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}` //Accesstoken para poder acceder
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);

            console.log(response);            
            
            
           
    },
    //Función para mostrar el popup de borrar perfil
    borrarPopup(){
        this.borrar = true;
        this.recAct = true;
    },
    //Función para salir de un popup(borrar perfil/cerrar sesión)
    leavePopup(){
        this.borrar = false;
        this.recAct = false;
        this.cerrar = false;
    },
    //Función para mostrar el popup de cerrar sesion
    cerrarPopup(){
        this.cerrar = true;
        this.recAct = true;
    },
    //Función que cierra la sesion: Borramos el accestoken del localstorage y redirigimos al login
    cerrarSesion(){
        localStorage.removeItem('accessToken');
        this.$router.push({name:'Login'});
    },
    //Función que borra el perfil
    async borrarPefil(){
        try{
            await fetch (`http://puigmal.salle.url.edu/api/v2/users`,{
                method: 'DELETE', //Utilizamos método DELETE para borrar.
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
            this.$router.push({name:'Login'}); //Una vez se ha podido borrar redirigimos al login.
        } catch (error){
            
        }
    }
    
  }
};

</script>




<script setup>
//Importamos el header y el footer
import Footer2 from '../components/Footer2.vue'
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

      <section class = "cont" v-for="profile in data"> <!--Mostramos la imagen del usuario-->
            
          <img :src=   "profile.image" class = "Redondap">
      </section>

      <p class = cont v-for="profile in data">{{ profile.name }}</p> <!--Mostramos nombre del usuario-->
      <br/>
     
      <section  class = "cont">
          <a href = "Datos"><button class="Rectanguloperfil">
              <p>Datos</p>
          </button></a>
      </section>
     
     <br/>
     <section class = "cont">
         <a href = "Estadisticas"><button class="Rectanguloperfil">
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
          <a href="MisEventos"><button class="Rectanguloperfil">
              <p>Mis eventos</p>
          </button></a>
      </section>
      <br/>
      <section class = "cont">
          <a href="EventsPart"><button class="Rectanguloperfil">
              <p>Eventos... participo</p>
          </button></a>
      </section>

     <br/>
     <section class = "cont">
          <button class="Rectanguloperfil" v-on:click="borrarPopup()"> <!--Activa función que hace true el booleano "borrar" para enseñar el popup de borrar perfil-->
              <p>Borrar perfil</p>
          </button>
      </section>

      <div class="borrarPerfil" v-if="borrar"> <!--Pop up para borrar el perfil.-->
        <b>¿Seguro que quieres borrar el perfil?</b>
        <div class="botones">
            <button v-on:click="borrarPefil()">ACEPTAR</button> <!--Si aceptamos se borra el perfil-->
            <button v-on:click="leavePopup()">CANCELAR</button> <!--Si cancelamos simplemente salimos del popup-->
        </div>
      </div>

      <div class="borrarPerfil" v-if="cerrar"> <!--Pop up para cerrar la sesion.-->
        <b>¿Seguro que quieres cerrar la sesión?</b>
        <div class="botones">
            <button v-on:click="cerrarSesion()">ACEPTAR</button> <!--Si aceptamos se cierra la sesion-->
            <button v-on:click="leavePopup()">CANCELAR</button> <!--Si cancelamos simplemente salimos del popup-->
        </div>
      </div>

     <br/>
     <section class = "cont">        
          <button class="Rectanguloperfil" v-on:click="cerrarPopup()">  <!--Activa función que hace true el booleano "cerrar" para enseñar el popup de cerrar sesion-->
              <p>Cerrar sesión</p>
          </button>
      </section>
     <br/><br/>

     
      
  </main>

  <Footer2>
      
  </Footer2>
 
  <section class = "rectanguloN" v-if="recAct"></section> <!--Rectangulo negro para dar contraste entre el popup y el resto-->


</template>
 
<style scoped>


.botones *:hover{
    color: white;
    background: black;
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