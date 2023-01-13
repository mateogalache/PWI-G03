<script>
//El funcionamiento del login será parecido al register.
export default {
  name: "App",
  data() {
    //Definimos variables
    return {
      showError: false, //booleano para mostrar mensaje de error.
      //inputs para hacer post.
      email: '',
      password: '',
    }
  },
  methods: {
    async postLogin() {
      const response = await fetch('http://puigmal.salle.url.edu/api/v2/users/login', { //Hacemos fetch a la url correcta de la API
        method: 'POST', //Utilizaremos post para subir elementos a la API
        headers: {
          'Content-Type': 'application/json' //Tipo de contenido de la API
        },
        //Valores que subiremos
        body: JSON.stringify({
            email: this.email,
            password: this.password,
        })
      });
      //Cogemos la data que devuelve la API, en este caso devolverá el accesToken
      const data = await response.json();
      
      
      
      if (!response.ok) {
        
        //Si no se puede hacer login el booleano será true y esto activará el popup de error.
            this.showError = true;
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
          
      }
      else{ 
        //Si el login se ha hecho correctamente guardamos el accesToken y el mail(que utilizaremos para entrar al perfil) en el LocalStorage
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('email',this.email);
        //La página se redirigirá al home.
        this.$router.push({name:'Home'});
      }
    },
    //Función para salir del popup de error.
    exitError(){
        this.showError = false; 
    }
  }
}

</script>
<template >
    <Header>
        
    </Header>
    <main id="Login">     

        <div class ="error" v-if="showError"> <!--Popup de error que solo aparece cuando showError es true que es cuando no se ha podido hacer login-->
            <b>Email o contraseña incorrectos</b>
            <button v-on:click="exitError()">ACEPTAR</button> <!--Para salir del popup activamos una función que devuelve el booleano a false.-->
        </div>
        
        <picture class = "background"> </picture> <!--Ponemos el tag de picture para definir una imagen-->

        <body class = "iniciarsesioncontainer"> <!-- Al estar todo dentro de un recuadro lo identificamos como body-->
            <article class = "recuadrocentro"> <!--Recuadro que solo aparece en pantalla grande-->
                <section class = "recuadro"></section>
            </article> 

            <!--Seguimos una estructura parecida al register-->

            <article class="contlogin">        
                <img src = "src/assets/sallevents.png" class= "imglogo">
            </article>
            <br>
        
            <article class="contlogin">        
                <form class = "center0">
                    <h2><b>Iniciar sesión</b></h2>              
                    <p><label>Email*</label></p>
                    <input type="text" class = "texto" v-model = "email">
                    <p><label>Contraseña*</label></p>
                    <input type="password" class = "texto" v-model = "password">
                    <p><small>¿Has olvidado tu contraseña?</small></p>
                </form>
            </article>
            <br>
    
            <article class="contlogin"> 
                <button v-on:click = "postLogin()" class="Iniciar"> <!--Cuando se clicke a iniciar sesión se activará la funcion de postLogin-->
                <b class = white>Iniciar Sesión</b>
                </button>
            </article>

            <aside class="contlogin">
                <section class = "center0">
                    <p class = "ntc">¿No tienes cuenta?<a HREF="Register"> <span> Regístrate</span></a></p>
                </section>
            </aside>
      
            <div class = "transparent9" ></div> <!--Ponemos un elemento para que quede mejor ordenado el diseño-->

        </body>

    </main>
    
    <Footer>
        
    </Footer>
    <!--Ponemos un rectangulo negro encima de todo menos del popup(utilizando z-index en el css) y se muestra solo cuando showError es true para que se vea mejor 
    el popup por encima del resto.-->
    <div class="oscuro" v-if="showError"></div> 
  </template>

<style scoped>


.oscuro{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: black;
    opacity: 70%;
    bottom: 0;
}

.error button{
    border-radius: 50px;
    background: gray;
}

.error{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 20rem;
    height: 10rem;
    border: 2px solid black;
    gap: 2rem;
    font-size: 20px;
    border-radius: 50px;
    background: white;
    z-index: 1;
}

*{
    text-decoration: none;
    
}
.ntc{
    display: flex;
    justify-content: end;
    color: black;
    margin-bottom: 2px;
    gap: 5px;
}

.ntc span{
    color: var(--main-bg-color);
}
.transparent9{
    display:flex;
    width: 100%;
    height: 80px;
    background-color: transparent;
    
}
.recuadrocentro{
    display:grid;    
    place-content: center;
}


.center0{
   width: 100%;
   
}
.Iniciar{
   display: flex;
   width:150px;
   height:50px;   
   background-color: rgb(104, 100, 100);
   border-radius:22px;   
   justify-self: center;
   justify-content: center;
   align-items: center;

   
} 

.texto{
    width: 98%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;

  }   

.contlogin{
    display: flex;
    justify-content: center;
   align-items: center;
}
    
.iniciarsesioncontainer{
    display: block;
    margin: 2%;
}
.imglogo{
    width : 300px;
    margin-top: 5%;
}
@media (min-width: 1080px){
    .center0{
        width: 500px;
        
    }
    .iniciarsesioncontainer{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .imglogo{
    width : 300px;
    margin-top: 25%;
    }
    .recuadro{
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    width: 540px;
    height: 590px;
    border: 2px solid black;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 5px 2px 2px black;
    z-index: -2;
    background-color: white;
    
    }
    .background{
    margin-top: -5rem;
    position:fixed;
    width: 100%;
    height: 100vh;
    background-image: url("src/assets/fondo.png");
    z-index: -3;
    }
    .error{
        top: 55%;
        left: 52.5%;
    }
    
}




    
    





</style>