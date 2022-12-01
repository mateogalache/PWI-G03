<script >
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
export default {
  data() {
    return {
        amigos:null
    }
  },
  mounted() {
    var id = this.getId()
    this.getPeticiones(id)
  },
  methods: {
        getPeticiones(id){
                //Aqui la llamada a la api
        },
        getId(){
            //funcion para llamar api y conseguir el id de la persona que queremos sus amigos
        return id
        }  
    }
}
</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <article class = "cont23"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <section class = "BContainer22"><!--Con el secction separamos las secciones que no interesan-->
                <button class="Send">
                    <a href = "Sending"><b>Send request</b></a>
                </button>

                <button class="Pending">
                    <a href = "Pending"><b>Pending request</b></a>
                </button>
            </section >
            <tr v-for="amigo in amigos" :key="amigo.id">   
                <td>    
                    <section class = "PContainer22"><!--Con el secction separamos las secciones que no interesan-->
                        <img src={{amigo.image}} class = "perfil">
                        <a href="PerfilAjeno"><p class = "nombre3">{{amigo.name}}</p></a>
                        <div class = "Clogo2"><!--Usamos este tag ya que es un elemnto que nos permite navegar entre las paginas-->
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
.cont23{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.BContainer22{
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
.PContainer22{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo2{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}


</style>