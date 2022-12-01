<script lang = "ts">
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

const baseURL = "http://puigmal.salle.url.edu/api/v2";



export default {
  name: "App",
  data() {
    return {
      postResult: null
    }
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
  async postLogin() {
    
      const postData = {
        
        email: this.$refs.email.value,
        password: this.$refs.password.value,
        
      };
      
      try {
        
        const res = await fetch(`${baseURL}/users`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(postData),
        });
        console.log(res);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          data: data,
        };

        this.postResult = this.fortmatResponse(result);
        
      } catch (err) {
        this.postResult = err.message;
      }
    }
    },

    clearPostOutput() {
      this.postResult = null;
    }
  }



</script>
<template >
    <Header>
        
    </Header>
    <main id="Login">
        
        <picture class = "background"> </picture> <!--Ponemos el tag de picture para definir una imagen-->

        <body class = "iniciarsesioncontainer"> <!-- Al estar todo dentro de un recuadro lo identificamos como body-->
            <article class = "recuadrocentro">
                <section class = "recuadro"></section>
            </article> 

            <article class="contlogin">        
                <img src = "src/assets/sallevents.png" class= "imglogo">
            </article>
            <br>
        
            <article class="contlogin">        
                <section class = "center0">
                    <h2><b>Iniciar sesión</b></h2>              
                    <p><label>Email*</label></p>
                    <input type="text" class = "texto" ref = "email">
                    <p><label>Contraseña*</label></p>
                    <input type="password" class = "texto" ref = "password">
                    <p><small>¿Has olvidado tu contraseña?</small></p>
                </section>
            </article>
            <br>
    
            <article class="contlogin"> 
                <a href = "Home"><button v-on:click = "postLogin()" class="Iniciar">
                <b class = white>Iniciar Sesión</b>
                </button></a>
            </article>

            <article class="contlogin">
                <section class = "center0">
                    <p class = "ntc">¿No tienes cuenta?<a HREF="Register"> <span> Regístrate</span></a></p>
                </section>
            </article>
      
            <section class = "transparent9"></section>

        </body>

    </main>

    <Footer>
        
    </Footer>
  </template>
<style scoped>

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
    position:fixed;
    width: 100%;
    height: 100%;
    background-image: url("src/assets/fondo.png");
    z-index: -3;
    }
    
}




    
    





</style>