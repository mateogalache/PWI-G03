<script setup>
import Footer2 from '../components/Footer2.vue';
import Header3 from '../components/Header3.vue';

</script>
<script>
const token = localStorage.getItem('accessToken');

export default {
    name: "App",
    data() {
        return {
            data: {},
            data2:{},
            endIndex: 10,
            savedId: null,
            newChat:false,
        }
    },
    beforeMount() {


        this.getChats();

    },


    methods: {
        async getChats() {

            const response = await fetch(`http://puigmal.salle.url.edu/api/v2/messages/users`, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            })

                .then(response => response.json())
                .then(data => this.data = data);

            console.log(response);

        },
    


        savePerson(id) {
            this.savedId = id;
            window.localStorage.setItem('friend', this.savedId);
            console.log(this.savedId);

        },
        showMore() {
            this.endIndex = this.endIndex + 10;

        },
        showLess() {
            this.endIndex = this.endIndex - 10;

        },


    },

};
</script>
<template>

    <Header3>
        
    </Header3>
<!--Chats con diferentes persona-->
    <main>
        <section class = "margenchats">
            <h2>Chats</h2>
            <a href="NewChat" class="mas"><img  src='src/assets/add.png'  alt="home" width="25" height="25"></a>
        </section>
        <div class = "cont">
            
            <div class = "BContainer">
                <p class = "buscar">Busca</p>
            </div>
            <div v-for="chat in data.slice(0, endIndex)" :key="chat.id" class = "PContainer">
                <img src="src/assets/usuario.png" class = "perfil">
                <div class="chat">
                    <b class = "nombre">{{chat.name}}</b>
                    <p class = "mensaje">por buscar</p>
                </div>
                
                <div class = "Clogo">
                    <img src={{chat.image}} class = "icon" alt="tick">
                </div>
            </div>
        </div>

        
        <div class = "transparent6"></div><!--usamos este div para poder hacer scroll por la pagina y no se quede cortado la informacion-->
        
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped >
.margenchats{
    display:flex;
    justify-content: space-between;
    margin-left: 2%;
}

.mas{
    margin-right: 4%;
    margin-top: 4%;
}

.cont{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}
.chat{
    margin-left: 10%;
}


.BContainer{
    margin-bottom: 5%;
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;

}
.buscar{
    display: flex;
    padding-left: 5%;
}
.PContainer{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    
    

}
.Clogo{
    position:absolute;
    right: 10%;
    
    
}

.icon{
    
    width: 16px;
    height: 16px;
    margin-left: 10%;
    margin-right: 10%;
}

.perfil{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 5%;
    
}
.nombre{
    display: flex;
    margin-right: 20%;
    margin-top: 5%;
    
}
@media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
    .BContainer p{
    font-size: 20px;
    }
    .chat{
        
        font-size: 20px;
    }
    .cont{
        width: 50%;
        
    }
    .buscar{
        width: 100%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .BContainer{
        width: 600PX;
        margin-left: 5%;
        margin-right: 5%;
    }
    .PContainer{
       width: 100%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .Clogo{
        margin-right: 40%;
    }
    .icon{
        
        width: 20px;
        height: 20px;
    }
    .perfil{
        width: 40px;
        height: 40px;
    }
    .nombre{
        margin-right: 10%;
    }
}
</style>