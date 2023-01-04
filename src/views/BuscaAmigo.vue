<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<script>
const token = localStorage.getItem('accessToken');

export default {
  name: "App",
  data() {
    return {
      data: {},
      data2: {},
      endIndex: 10,
      savedId: null,
      showZona: true,
      showBusqueda: false,
      name:'',
      filter: false,
      historial: false,
      records:[],
      record: null,
    }
  },
  beforeMount(){
    
    
    this.getPeople();
    
  },
  
 
methods: {
    async getPeople(){

        const response = await fetch (`http://puigmal.salle.url.edu/api/v2/users`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
            
            .then(response => response.json())
            .then(data => this.data = data);
            
            console.log(response);                                  
           
    },
   
    savePerson(id){
        this.savedId = id;
        window.localStorage.setItem('friend',this.savedId);
        console.log(this.savedId);    
    
    },
    showMore(){
        this.endIndex = this.endIndex + 10;
        
    },
    showLess(){
        this.endIndex  =  this.endIndex - 10;
        
    },
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
        
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
        } catch (error) {
        console.error(error);
        }
    
        // do something with the search results
        this.showBusqueda = true;
        this.showZona = false;
      
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
            
            <!--Esto se ha de convertir en un input
            -->
            <section class = "BContainer4" >           
            <input type="text" class="sinborde" name="Buscar persona" placeholder="Buscar persona" v-model="name">
                <div class="busqueda">
                    <div class="element">
                        <img src="src/assets/search.png" alt="img" v-on:click= "busquedaFriend()">
                    </div>
                </div>
            </section>
            <a href="PerfilAjeno"  v-for="people in data.slice(0,endIndex)" :key="people.id"   v-on:click="savePerson(people.id)" v-if="showZona" >
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
    
    .mostrarMas,.mostrarMenos{
        cursor:pointer;
        margin-top: 2rem;
        border-radius: 50px;
        border: 2px solid black;
        width: 12rem;
        transition: all 300ms ease;
    }

    .mostrarMas:hover,.mostrarMenos:hover{
        color: white;
        background: black;
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
    width: 80%;
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items:center;
    padding: 5px;
    border-radius: 50px;
    margin: 5%;
    margin-top: 5%;
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