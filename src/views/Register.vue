<script lang = "ts">
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

/*
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit',function(e){
  e.preventDefault();

  const formData = new FormData(myForm);

  fetch('http://puigmal.salle.url.edu/api/v2/api/users/login',{
      method: 'POST',
      body: formData,
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

});
      
*/

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
  async postRegister() {
    
      const postData = {
        name: this.$refs.post_name.value,
        last_name: this.$refs.post_last_name.value,
        email: this.$refs.post_email.value,
        password: this.$refs.post_password.value,
        image: this.$refs.post_image.value,
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
        else{
          this.$router.push({name:'Login'});
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
<template>
    <Header>
        
    </Header>
    <main>
      <picture class = "background2"></picture> <!--Ponemos el tag de picture para definir una imagen-->
      
      <section class = "recuadro2"></section> <!-- Al estar todo dentro de un recuadro lo identificamos como body-->
      <body class = "registercentro">
        <br>
        <section class="cont">
        <img src = "src/assets/sallevents.png" width = "150" height = "75" >
        </section>
        
        <article class = "cont">
          <section class = "centro1">
            <h2><b>Datos personales</b></h2>
            <form id = "myForm">               
            <p><label>Nombre*</label></p>
            <input type="text" class = "texto" id = "name"  name = "name" ref = "post_name">
            <p><label>Apellidos*</label></p>
            <input type="text" class = "texto" id = "last_name" name = "last_name" ref = "post_last_name">
            <p><label>Email*</label></p>
            <input type="text" class = "texto" id = "email" name = "email" ref = "post_email">
            <p><label>Contraseña*</label></p>
            <input type="password" class = "texto" id = "password" name = "password" ref = "post_password">
            <p><label>Foto de perfil*</label></p>
            <input type="text" class = "texto" id = "image" name = "image" ref = "post_image">
            <br/><br/>
          </form> 
          </section>
        </article>
    
       
        <article class="cont">
        <button v-on:click = "postRegister()" class="Iniciar" id = "registrar" type = "submit">
                 <b><FONT COLOR="white">Registrar</FONT></b>
        </button>
        
          
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
  .background2{
      margin-top: -5rem;
      position:fixed;
      width: 100%;
      height: 100%;
      background-image: url("src/assets/fondo.png");
      z-index: -3;
  }
  .recuadro2{
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%,-50%);
      width: 600px;
      height: 700px;
      border: 2px solid black;
      justify-content: center;
      border-radius: 50px;
      box-shadow: 5px 2px 2px black;
      z-index: -2;
      background-color: white;
      
  }
  .transparent9{
      display:flex;
      width: 100%;
      height: 80px;
      background-color: transparent;
      
  }
  .centro1{
    display:block;
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
    cursor: pointer;    
  } 
  .cont{
      display: flex;
      justify-content: center;
    align-items: center;
  }
  .texto{
      width: 98%;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid black;
  }
  .registercentro{
    display:block;
    margin: 2%;
  } 
      
    @media (min-width: 1080px){
      .centro1{
        width: 500px;
      }
      .registercentro{
        margin: 0;
        position: absolute;
        top: 53%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    @media (max-width: 1080px){
      .recuadro2{
          display: none;
      }
      .background2{
          display:none;
      }
      
  }  
</style>
