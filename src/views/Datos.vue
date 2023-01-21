<script>

const token = localStorage.getItem('accessToken'); //Cogemos token del localstorage para utilizarlo como header en el fetch
const email = localStorage.getItem('email'); //Cogemos el email para coger la inforamacion de un usuario ya que el email es unico

export default {
  name: "App",
  data() {
    return {
      data: {},  //Data del usuario 
      doEditImage: false,  //Booleano para mostrar o no input para editar la imagen
      editDoneImage: true, //Booleano para mostrar o no input para editar la imagen
      doEditName: false, //Booleano para editar el nombre
      editDoneName: true, //Booleano para editar el nombre
      doEditLast: false, //Booleano para editar apellidos
      editDoneLast: true, //Booleano para editar apellidos
      doEditEmail: false, //Booleano para editar email
      editDoneEmail: true, //Booleano para editar email
      doEditPassword: false, //Booleano para editar contraseña
      editDonePassword: true,  //Booleano para editar contraseña
    }
  },
  beforeMount(){
    //Funciones que queremos cuando cargue la página
    this.getData(); 
  },
  methods: {
    //Función para coger la informacion del usuario
     getData(){        
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/search?s=${email}`,{
            headers: {
                "Content-Type": "application/json", //Tipo de data
                'Authorization': `Bearer ${token}` //Token para tener acceso
            },
        })            
            .then(response => response.json())
            .then(data => this.data = data);  //Ponemos la data en nuestra variable    
    },
    //Funcion para mostrar input para cambiar la imagen
    changeImage(){
        this.doEditImage = true;
        this.editDoneImage = false;
    },
    async postImage(){
      //Función que cambia la imagen en la API
        const response = await fetch('http://puigmal.salle.url.edu/api/v2/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            image: this.image,
            
        })
      });
      if (!response.ok) {
            console.log(this.image);
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        //Si se hace correctamente se cierra el input y recarga la página para actualizar la información
        this.doEditImage = false;
        this.editDoneImage = true;
        location.reload();
      }
    },
    //Función para editar nombre en la API
    async postName(){
        const response = await fetch('http://puigmal.salle.url.edu/api/v2/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: this.name,
            
        })
      });
      if (!response.ok) {
            console.log(this.name);
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.doEditName = false;
        this.editDoneName = true;
        location.reload();
      }
    },
    //Función para mostrar input para editar el nombre
    changeName(){
        this.doEditName = true;
        this.editDoneName = false;
    },
    //Función para subir el apellido
    async postLast(){
        const response = await fetch('http://puigmal.salle.url.edu/api/v2/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            last_name: this.last_name,
            
        })
      });
      if (!response.ok) {
            console.log(this.las_name);
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.doEditLast = false;
        this.editDoneLast = true;
        location.reload();
      }
    },
    //Función para mostrar input para editar apellido
    changeLast(){
        this.doEditLast = true;
        this.editDoneLast = false;
    },
    //Función para editar email en la API
    async postEmail(){
        const response = await fetch('http://puigmal.salle.url.edu/api/v2/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            email: this.email,
            
        })
      });
      if (!response.ok) {
            console.log(this.email);
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.doEditEmail = false;
        this.editDoneEmail = true;
        window.localStorage.setItem('email',this.email);
        location.reload();
      }
    },
    //Función para mostrar el input para mostrar input para cambiar el email
    changeEmail(){
        this.doEditEmail = true;
        this.editDoneEmail = false;
    },
    //Función para editar el password en la API
    async postPassword(){
        const response = await fetch('http://puigmal.salle.url.edu/api/v2/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            password: this.password,
            
        })
      });
      if (!response.ok) {
            console.log(this.email);
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
      }
      else{ 
        this.doEditPassword = false;
        this.editDonePassword = true;        
        location.reload();
      }
    },
    //Función para mostrar input para editar la contraseña
    changePassword(){
        this.doEditPassword = true;
        this.editDonePassword = false;
    },
    
  }
};
//Para editar la información, en este caso lo hemos hecho individualmente por cada información porque creiamos que quedaba mejor, en cambio en eventos con un solo click se puede editar todo.
</script>

<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>
    
    </Header2>
    <!-- Al igual que el perfil esta página tiene una estructura muy parecida en todas las partes por lo que se divide en article, section y en este caso en vez de botones ponemos nav
        ya que nos servirá para poder navegar por las diferentes opciones de cada dato-->
    <main>
        <br>
        <div class = margendatos>
            <h2>Datos</h2>
        </div>
        
        <article class = "datos" v-for="info in data"> <!--v-for para mostrar en loop la información que hay en data-->
            <section class = foto>
                <img :src=   "info.image" >
                <button class = "editar" v-on:click="changeImage()" v-if="editDoneImage"><b>Editar</b></button>
                <div class="editImage" v-if="doEditImage">
                    <input type="text" ref="image" v-model="image">
                    <button class = "editConfirm" v-on:click="postImage()">OK</button>
                </div>                
              </section>
              <!--Estructura de section con div dentro para dividir de elementos generales a más pequeños-->
            <section class = info>
                <div class="name info1">
                    <h3 v-if="editDoneName">{{info.name}}</h3> <!--h3 para poner letra un poco más grande que p-->
                    <input type="text" placeholder="Nuevo nombre" v-model="name" v-if="doEditName"> <!---v-model para subir el contenido del input al script y ese subirlo a la api-->
                    <button class = "editar" v-if="editDoneName" v-on:click="changeName()"><b>Editar</b></button> <!--v-on:click para iniciar función / v-if para mostrar solo si el booleano es true-->
                    <button class = "editConfirm" v-on:click="postName()" v-if="doEditName">OK</button>
                </div>
                <div class="last_name info1">
                    <h3 v-if="editDoneLast">{{info.last_name}}</h3>
                    <input type="text" placeholder="Nuevos apellidos" v-model="last_name" v-if="doEditLast">
                    <button class = "editar" v-if="editDoneLast" v-on:click="changeLast()"><b>Editar</b></button>
                    <button class = "editConfirm" v-on:click="postLast()" v-if="doEditLast">OK</button>
                </div>
                <div class="email info1">
                    <h3 v-if="editDoneEmail">{{info.email}}</h3>
                    <input type="text" placeholder="Mail" v-model="email" v-if="doEditEmail">
                    <button class = "editar" v-if="editDoneEmail" v-on:click="changeEmail()"><b>Editar</b></button>
                    <button class = "editConfirm" v-on:click="postEmail()" v-if="doEditEmail">OK</button>
                </div>
                <div class = "password info1">
                    <h3 v-if="editDonePassword">········</h3>
                    <input type="text" placeholder="Nueva contraseña" v-model="password" v-if="doEditPassword">
                    <button class = "editar" v-if="editDonePassword" v-on:click="changePassword()"><b>Editar</b></button>
                    <button class = "editConfirm" v-on:click="postPassword()" v-if="doEditPassword">OK</button>
                </div>
            </section>
        </article>
      </main>
    <Footer2>
        
    </Footer2>
</template>

<style scoped>
.info1 input{
    outline: none;
    border: none;
    background: none;
    color: black;
}
.editImage input{
   border-radius: 50px; 
}
.editConfirm{
    border-radius: 50%;
    aspect-ratio: 1/1;
    cursor: pointer;
    transition: all 300ms ease;
}
.editConfirm:hover{
    background: green;
    color: white;
}
.editImage{
    display: flex;
    gap: 1rem;
}

.editar:hover{
    background: black;
    color:white;
}
.info{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.info1{
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    border: 2px solid black;
    border-radius: 50px;
    padding: 5px;
    background: rgb(231, 231, 231,0.8);
}
.foto{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    
}

img{
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 250px;
    border: 2px solid black;
    object-fit: cover;
}
.datos{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
}

.editar{
    cursor:pointer;
    background: gray;
    color: black;
    border: 1px solid black;
    border-radius: 50px;
    width: 5rem;
    transition: all 300ms ease;
    cursor: pointer;
}
.margendatos{
    margin-left: 2%;
}

@Media (min-width: 1080px){
    .info1{
        width: 50%;
    }
}



</style>