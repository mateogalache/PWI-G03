<script>


const baseURL = "http://puigmal.salle.url.edu/api/v2"; //definimos la url base de la api en una variable para luego utilizar en el FETCH.



export default {
  name: "App",
  data() {
    //definimos las variables que utilizaremos, en este caso para subir a la api, estas variables cogen el valor de los input donde hemos puesto v-model para linkearlo con estas.
    return {
      name: '',
      last_name: '',
      email: '',
      password: '',
      image: '',
    }
  },
  methods: {
    //Iniciamos la funcion para hacer el registro
    async postRegister() {      
      
        
        const res = await fetch(`${baseURL}/users`, { //hacemos fetch a la url base de la api + /users para registrar ahi nuestro usuario
          method: "post", //utilizaremos el metodo de post ya que queremos subir datos a la api
          headers: {
            "Content-Type": "application/json", //indicamos el tipo de contenido de la api
           
          },
          //aqui pondremos los elementos que queremos subir, para ello ponemos el nombre de la key que tienen en la API y luego lo igualamos a nuestras variables que 
          //cogemos de los input con v-model.
          body: JSON.stringify({ 
            name: this.name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            image: this.image,

        })
        });
        console.log(res);
        //Si no se ha podido hacer el registro por algun error, enseñaremos por la consola que error es para poder solucionarlo.
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        //Si no hay ningún error nos enviará a la página de Login.
        else{
          this.$router.push({name:'Login'});
        }

        
        
      
    }
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
        <div class="cont"> <!--Hacemos un div ya que simplemente queremos colocar una imagen y ponemos class = cont para colocarlo en el centro-->
          <img src = "src/assets/sallevents.png" width = "150" height = "75" >
        </div>
        
        <article class = "cont"> <!--Utilizamos article ya que dentro pondremos secciones y otros tags para englobar.-->
          <section class = "centro1"> <!--Utilizamos section para definir una seccion dentro de article donde habrá más tags.-->
            <h2><b>Datos personales</b></h2> <!--Queremos poner un título en grande y negrito, le ponemos h2 y b-->
            <form id = "myForm"> <!--Como vamos a poner inputs los englobamos en un form-->   
              <!--Hacemos inputs con un título cada uno, además como se ha explicado en el script les ponemos un v-model para poderlos utilizarlos en el script y subirlos a la API.-->           
              <p><label>Nombre*</label></p>
              <input type="text" class = "texto"  v-model="name">
              <p><label>Apellidos*</label></p>
              <input type="text" class = "texto"   v-model="last_name">
              <p><label>Email*</label></p>
              <input type="text" class = "texto"  v-model="email">
              <p><label>Contraseña*</label></p>
              <input type="password" class = "texto"  v-model="password"> <!--Type password para que en vez de letras se vean puntos cuando se escribe.-->
              <p><label>Foto de perfil*</label></p>
              <input type="text" class = "texto"  v-model="image">
              <br/><br/>
            </form> 
          </section>
        </article>
    
       
        <div class="cont">
          <button v-on:click = "postRegister()" class="Iniciar" id = "registrar" type = "submit"> <!--v-on:click para que cuando le demos click al boton de registrar se inicie la funcion que queremos-->
                  <b>Registrar</b>
          </button>          
        </div>

        <aside class="rightcuenta"> <!--Utilizamos aside para un elemento apartado de los demás que cumple otra función distinta-->
          ¿Ya tienes cuenta? <a href="Login" class="yacuenta">&nbsp;!Inicia sesión!</a>
        </aside>
        

      <section class = "transparent9"></section>
      
      </body>
        
    </main>
    
    <Footer>
        
    </Footer>
</template>
<style scoped>

  
  .rightcuenta{
    margin-top: 1rem;
    display: flex;
    justify-content: end;
  }
  .yacuenta{
    color: var(--main-bg-color);
  }

  button b{
    color: white;
  }
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
