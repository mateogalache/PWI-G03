<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<script>

const token = localStorage.getItem('accessToken');
const id = localStorage.getItem('friend');

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
    friends(){
        const response = fetch (`http://puigmal.salle.url.edu/api/v2/users`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);
            
            for (var clave in data.id){
            // Controlando que json realmente tenga esa propiedad
                if (id == clave) {
                    // Mostrando en pantalla la clave junto a su valor
                    console.log("estos dos son amigos "+clave +" y tu mismo");
                    this.notrequest = false;
                    
                }
            }
    },   

    getData(){        
        
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
            <img src = "src/assets/usuario.png" class = "Redondap">
            
        </div>
        
        <br/>
        <div class = "cont">
            
            <div class = "rectangulo1">
                                    
                    <p><FONT color = "grey">{{info.name}}</FONT></p>
                    
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                    <p><FONT color = "grey">{{info.last_name}}</FONT></p>
                   
                </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1">                
                <p><FONT color = "grey">Amistades</FONT></p>
                <div class = "Clogo">
                    <a href="ListaAmigosAjena"><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
                </div>
                
            </div>    
            </div>
            <br><br/>
            <div class = "cont">
            <div class = "rectangulo1"> 
                               
                <p><FONT color = "grey">Eventos</FONT></p>
                <div class = "Clogo">
                    <a href="Events"><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
                </div>    
            </div>    
            </div>
            
       

  <div class="transparent6"></div><!--usamos este div para poder hacer scroll por la pagina y no se quede cortado la informacion-->
  </main>
  <Footer2>
      
  </Footer2>
</template>
<style scoped>

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