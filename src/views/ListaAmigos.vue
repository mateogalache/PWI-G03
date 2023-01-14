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
      
      endIndex: 10,
      savedId: null,
    }
  },
  beforeMount(){
    
    
    this.getPeople();
    
  },
  
 
methods: {
    async getPeople(){

        const response = await fetch (`http://puigmal.salle.url.edu/api/v2/friends`,{
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
    
        
    },
    
};
</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <br><h2 class="titulo34">Amigos</h2>
        <article class = "cont5"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <section class = "BContainer5"> <!--Usamos aside ya que no pertence a las secciones, pero si que esta relacionado con la pagina-->
                <p class = "buscar">Busca</p>
            </section>
                
            <tr v-for="amigo in data.slice(0,endIndex)" :key="amigo.id">
                <td class="PCont"  >
                    <section class = "PContainer5"><!--Con el secction separamos las secciones que no interesan-->
                        <img :src=amigo.image class = "perfil">
                        <a href="PerfilAmigo" v-on:click="savePerson(amigo.id)"><p class = "nombre5">{{amigo.name}}</p></a>
                        <div class = "Clogo5"><!--Usamos este tag ya que es un elemnto que nos permite navegar entre las paginas-->
                            <img src="src\assets\flecha.png" class = "icon" alt="tick">
                        </div>
                    </section>
                </td>
            </tr>  
        </article>
        <div class="transparent6"></div>
    </main>

    <Footer2>

    </Footer2>
</template>

<style scoped>
.titulo34{
    padding-left: 2%;
    padding-right: 2%;
}
.cont5{
    margin-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}

.BContainer5{
    margin-bottom: 2%;
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;

}
.PCont{
    width: 100%;
    display: flex;
}

.PContainer5{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 98%;
    justify-content: space-between;
    padding-left: 2%;
    
    
   
    

}
.Clogo5{
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