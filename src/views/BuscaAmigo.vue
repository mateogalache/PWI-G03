<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<script>
const token = localStorage.getItem('accessToken'); //Cogemos token del local storage

export default {
  name: "App",
  
  data() {
    return {
      data: [],
      data2: [],
      endIndex: 10,
      savedId: null,
      showZona: true,
      showBusqueda: false,
      name:'',
      filter: false,
      historial: false,
      records:[],
      record: null,
      
        example: "Hello world",
    }
  },
    
  beforeMount(){
    
    //llamamos a la funcion que nos devuelve todos los usuarios
    this.getPeople();
    
  },
  
 
methods: {
    handleClick() {
        
    },
    async getPeople(){
        //hacemos la llamada para obetener los usuarios
        const response = await fetch (`http://puigmal.salle.url.edu/api/v2/users`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);
            
                                              
           
    },
    
    //funcion para guardar el id del usuario que queremos ver su información
    savePerson(id){
        this.savedId = id;
        window.localStorage.setItem('friend',this.savedId);   
    
    },

    //funcion para ampliar el rango de usuarios
    showMore(){
        this.endIndex = this.endIndex + 10;
        
    },
    //funcion para reducir el rando de usuarios
    showLess(){
        this.endIndex  =  this.endIndex - 10;
        
    },

    //Llamada para obener los usuarios que cumplan la condicion del nombre dado
    async busquedaFriend() {
        
        const url = `http://puigmal.salle.url.edu/api/v2/users/search?s=${this.name}`;
        try {
        const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        
        })
        .then(response => response.json())
        .then(data => this.data2 = data);
        
        //muestra la busqueda y no todos los usuarios
            this.$emit("click", this.showBusqueda = true, this.showZona = false);
        } catch (error) {
        console.error(error);
        }
      
    } 
        
    },
    
};
</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        
        <article class = "cont4"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <h2 class = "titulo4">Buscar Amigos</h2>
            
        
            <!--Usamos section y input para hacer la parte del buscador, con una imagen para hacer el buscador que llame a la funcion de busqueda-->
            <section class = "BContainer4" >           
            <input type="text" class="sinborde" name="Buscar persona" placeholder="Buscar persona" v-model="name">
                <div class="busqueda">
                    <div class="element">
                        <img src="src/assets/search.png" alt="img" @click= "busquedaFriend()">
                    </div>
                </div>
            </section>
            <!--Nos muestra esta llamada al abrir la pagina sin ningun tipo de filtro-->
            <!--Muestra todos los usuarios que obtenemos de la llamada a la api y mostramos su imagen y su nombre y si clicamos nos envia al perfil de la persona-->
            <div  v-for="people in data.slice(0,endIndex)" :key="people.id"   v-on:click="savePerson(people.id)" v-if="showZona" >
                <div class="PContainer4">
                    
                    <img  :src=  "people.image" class="perfil" alt="img" v-bind:error="errorImages" >
                    <div class ="nombre4">
                                {{people.name}}
                    </div>
                    <nav class = "Clogo4"> 
                    <a href="PerfilAjeno"><img src="src\assets\flecha.png" class = "icon" alt="tick"></a>
                    </nav>
                
                </div>
            </div>

            <!--El mismo caso anterior pero este solo se muestra cuando hacemos la llamada de la busqueda por nombre-->
            <a href="PerfilAjeno"  v-for="people in data2.slice(0,endIndex)" :key="people.id"   v-on:click="savePerson(people.id)" v-if="showBusqueda" >
                <div class="PContainer4">
                    
                    <img  :src=  "people.image" class="perfil" alt="img" v-bind:error="errorImages">
                    <div class ="nombre4">
                                {{people.name}}
                    </div>
                    <nav class = "Clogo4"> 
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </nav>
                
                </div>
            </a>
            
            <!--Dos botones que nos permiten navegar entre la cantidad de usuarios-->
            <div class="centra" >
               <div class="mostrarMas" v-on:click="showMore()"  v-if="!((endIndex > data2.length) && showBusqueda)">
                    <b>Mostrar más</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>

        </article>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.cont4{
    margin-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.perfil{
    border-radius: 50%;
}
.element{
        border: 2px solid black;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .element img{
        width: 18px;
        height: 18px;
        
        object-fit: cover;
    }
    .centra{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }
    
        .mostrarMas,
        .mostrarMenos {
            cursor: pointer;
            margin-top: 2rem;
            border-radius: 50px;
            border: 2px solid var(--main-bg-color);
            width: 10rem;
            transition: all 300ms ease;
            display: flex;
            justify-content: center;
    
        }
    
        .mostrarMas:hover,
        .mostrarMenos:hover {
            color: white;
            background: var(--main-bg-color);
        }

    input{
        outline: none;
        width: 72%;
    }
.sinborde {
        border: 0;
        background-color: transparent;
    }
.titulo4{
    margin-left: 0%;
}

.BContainer4{
    color: gray;
    height: 25px;
    
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items:center;
    padding: 5px;
    border-radius: 50px;
    
    margin-bottom:5%;
    
    justify-content: space-between;
    position: relative;
}
.busqueda button{
        text-decoration: none;
        color: black;
        border-radius: 50px;
        border: 2px solid black;
        width: 4rem;
        height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .busqueda{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;      
    }

.PContainer4{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
}
.Clogo4{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}

@Media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
}
</style>