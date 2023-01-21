<script>

const token = localStorage.getItem('accessToken');
const id = localStorage.getItem('friend');

export default {
  name: "App",
  data() {
    return {
      data: {},
      data2: {},
      notrequest: true,
    }
  },
  beforeMount(){

    
    this.getData();
    
  },
  methods: {
    
    //hacer un metodo que mire que son amigos y quita o pone el boton.
    friends(){
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/friends`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data2 => this.data2 = data2);
            
            for (var clave in data2.id){
            // Controlando que json realmente tenga esa propiedad
                if (id == clave) {
                    // Mostrando en pantalla la clave junto a su valor
                    console.log("estos dos son amigos "+clave +" y tu mismo");
                    this.notrequest = false;
                    
                }
            }
    },  

    getData(){        
        
        //Nos devuelve la informacion del usuario en funcion de una id
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
    añadirAmigo(){

        //Llamada que permite enviar una solicitud de amistad a otro usuario, con su id
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/friends/${id}`,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            console.log(response);  
            this.notrequest = false;

    },
    
  }
};

</script>

<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>
    <Header2>
        
    </Header2>
    <!--Pagina igual que la del perfil amigo pero con el boton de añadir amigo -->
    <main v-for="info in data" >
        <section >
            <br>
            <section class = "margenamigo">
                <h2>Datos</h2>
            </section>
        
            <div class = "cont">
                    <img :src = info.image class = "Redondap">
                    
            </div>
            <div class = "cont">
                <button v-if="notrequest" v-on:click = "añadirAmigo()" class = "boton">Añadir amigo</button>  
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
                        <a href="Events"><img src="src\assets\flecha.png" v-on:click="savePerson(info.id)"  class = "icon" alt="tick"></a>
                    </div>    
                </div>    
            </div>
        </section>
  <div class="transparent6"></div>
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
    justify-content: center;
    
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
        justify-content: center;
        
    }
    
    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1%;
        
    }
    
   
   
    .rectangulo1{
        width: 700px;
        height: 50px;
        font-size: 20px;
        display: flex;
        
        justify-content: center;
        align-items: center;     
    }

    .boton{
        width: 350px;
        height: 40px;
    }   
}


</style>