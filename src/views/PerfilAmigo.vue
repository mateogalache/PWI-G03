<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<script>

const token = localStorage.getItem('accessToken'); //Cogemos el email para coger la informacion de un usuario ya que el email es unico
const id = localStorage.getItem('friend'); //Cogemos el id del amigo del local storage

export default {
  name: "App",
  data() {
    return {
      data: {},
      notrequest: true,
    }
  },
  beforeMount(){

    console.log(id);
    this.getData();
  },
  methods: {
    
    //hacer un metodo que mire que son amigos y quita o pone el boton.
       

    getData(){        
        //Nos devuelve la informacion de un usuario en funcion de una id
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/${id}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);
            console.log(response);   
        
    },
   
    //Hacemos la llamada que elimina el usuario seleccionado de nuestros amigos
    eliminarAmigo(id){
        this.savedId = id;
        window.localStorage.setItem('friend',this.savedId);
        console.log(id)
        console.log(this.savedId)
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/friends/${this.savedId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            console.log(response)

            
        },
      //funcion para guardar el id del usuario que queremos ver su información
      savePerson(id) {
          this.savedId = id;
          window.localStorage.setItem('friend', this.savedId);

      },
        
  }
};

</script>
<template>
    <Header2>
        
    </Header2>
    <!--Pagina cuandro entras al perfil de un amigo-->
    <main  v-for="info in data" >
        <br>
        <section class = "margenamigo">
            <h2>Datos</h2>
        </section>
       
       
       <div class = "cont">
            <img :src=info.image class = "Redondap">
            
        </div>
        <br/>
        <div class = "cont">
             <a href="PerfilAjeno"><button v-on:click = "eliminarAmigo(info.id)" class = "boton">Eliminar Amigo</button></a>
                
            </div>
        
        <br/>
        <div class = "cont">
            
            <div class = "rectangulo1">
                                    
                    <p class="gray">{{info.name}}</p>
                    
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                    <p class="gray">{{info.last_name}}</p>
                   
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1"> 
                               
                <p class="gray">Eventos</p>
                <div class = "Clogo">
                    <a href="Events"><img src="src\assets\flecha.png" v-on:click="savePerson(info.id)" class = "icon" alt="tick"></a>
                </div>    
            </div>    
            </div>
            
       

  <div class="transparent6"></div><!--usamos este div para poder hacer scroll por la pagina y no se quede cortado la informacion-->
  </main>
  <Footer2>
      
  </Footer2>
</template>
<style scoped>

.gray{
    color: gray;
}
.boton{
    display: flex;
        width: 120px;
        height: 20px;
        background-color: rgb(104, 100, 100);
        border-radius: 22px;
        justify-self: center;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        color: white;
        font-size: 15px;
        font-weight: bold;
        margin-top: 5%;
}

.margenamigo{
    margin-left: 2%;
}
.rectangulo1{
    height: 30px;
    width: 300px;
    background-color: rgba(200, 200, 200, .5);
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 50px;
    
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
.Clogo{
    margin-left: 5%;
}

@media (min-width: 1080px){
   
    h2{
        font-size: 40px;
    }
    .Redondap{
        width: 200px;
        height: 200px;
        border-radius: 150px;
        border: 1px solid black;
    }
    
    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }
    
   
   
    .rectangulo1{
        width: 700px;
        height: 50px;
        font-size: 20px;
        display: flex;
        
        justify-content: center;
        align-items: center;
        



    }
}
</style>