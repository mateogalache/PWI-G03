<script>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
import axios from 'axios';
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.getfriends()
      var token = localStorage.getItem('accesToken');
      const TOKEN = 'Token';
      const BASEURL = 'https://preview-deliver.kenticocloud.com/PROJECT_ID';
      const ENDPOINT = '/items/ITEM_NAME';
  },
  methods: {
      

    axios.create({
          baseURL: BASEURL,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + TOKEN
          }
      })
          .get(ENDPOINT)
          .then(res => {
              console.log(res);
          });

    /*metodo fetch
    async getfriends() {
          const response = await fetch('http://puigmal.salle.url.edu/api/v2/friends', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkzOSwibmFtZSI6Im1hcmlvIiwibGFzdF9uYW1lIjoicm9kcmlndWV6IiwiZW1haWwiOiJtYXJpb0BtYXJpby5jb20iLCJpbWFnZSI6Im5hZGEuanBnIn0.OuINh4wOjLqo4niuu3uiAShfD3JFqPj4YsCd92F' 
            }
        });
        const data = await response.json();
        this.totalVuePackages = data.total;

        if (!response.ok) {
            const message = `An error has occured: ${response.status} - ${response.statusText}`;
            throw new Error(message);
        }
        else {
            // aqui guardamos la info
            console.log(data);

        }
        }*/
    }
}
    
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
                
            <tr v-for="amigo in amigos" :key="amigo.id">
                <td>
                    <section class = "PContainer5"><!--Con el secction separamos las secciones que no interesan-->
                        <img src={{amigo.image}} class = "perfil">
                        <a href="PerfilAmigo"><p class = "nombre5">{{amigo.name}}</p></a>
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