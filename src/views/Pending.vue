<script setup >
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<script>
const token = localStorage.getItem('accessToken');
export default {
  name: "App",
  id:"",
  data() {
    return {
      data: {},
      endIndex: 10,
    
    }
  },
  beforeMount(){
    
    
    this.getRequest();
    
  },
  
 
methods: {
    async getRequest(){

        const response = await fetch (`http://puigmal.salle.url.edu/api/v2/friends/requests`,{
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
    async accept(id){

        //hay que mirar que cuando acceptas o rechazas se refresque
        console.log(id);
        const response = await fetch(`http://puigmal.salle.url.edu/api/v2/friends/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        });
            console.log(response);
            this.getRequest(); 
    },
    async notaccept(id){
        console.log(id);
        const response = await fetch(`http://puigmal.salle.url.edu/api/v2/friends/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        });
            console.log(response);
            this.getRequest();
        
    },
        
    },
    
};
</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <article class = "cont24"> <!--Usamos article ya que el contnido estar?? relacionado, y lo queremos separar en secciones-->
            <section class = "BContainer33"><!--Con el secction separamos las secciones que no interesan-->
                <button class="Send">
                    <a href = "Sending"><b>Send request</b></a>
                </button>

                <button class="Pending">
                    <a href = "Pending"><b>Pending request</b></a>
                </button>
            </section >
                
            <tr v-for="amigo in data.slice(0,endIndex)" :key="amigo.id">   
                <td class="PCont" >    
                    <section class = "PContainer33"><!--Con el secction separamos las secciones que no interesan-->
                        <img src={{amigo.image}} class = "perfil">
                        <a href="PerfilAjeno" v-on:click="savePerson(amigo.id)"><p class = "nombre3">{{amigo.name}}</p></a>
                        <aside class = "Clogo2"><!--Usamos aside aqui,ya que a diferencia de los otros que era para navegar este no nos permite navegar pero si que esta relacionado con la pagina-->
                            <img src="src\assets\tick.png" class = "icon" v-on:click="accept(amigo.id)" alt="tick">
                            <img src="src\assets\cross.png" class = "icon" v-on:click="notaccept(amigo.id)" alt="tick">
                        </aside>
                    </section>
                </td>
            </tr>
        </article>
        <div class="centra" >
               <div class="mostrarMas" v-on:click="showMore()"  v-if="!(endIndex > data.length)">
                    <b>Mostrar m??s</b>
                </div> 
                <div class="mostrarMenos" v-on:click="showLess()" v-if="(endIndex > 10)">
                    <b>Mostrar menos</b>
                </div> 
            </div>
    <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.cont24{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.BContainer33{
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    

}
.Send{
    width: 100%;
}
.Pending{
    width: 100%;
}
.PCont{
    width: 100%;
    display: flex;
}
.PContainer33{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

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
.Clogo2{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}


</style>