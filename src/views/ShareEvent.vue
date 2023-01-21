<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<script>
const token = localStorage.getItem('accessToken');
const message = localStorage.getItem('shareEvent');
const userId = localStorage.getItem('userId');


export default {
    name: "App",
    data() {
        return {
            data: {}, //Data de los eventos en zona (Barcelona)
            data2: {}, //Data de los eventos buscados
            endIndex: 10,  //Numero de eventos que se pueden ver
            sendId: '', //id del que lo envia
            receiver_id: '', //id del que lo recibe
            showZona: true, //Booleano para saber que eventos mostrar
            showBusqueda: false, //Booleano para saber que eventos mostrar
            name: '',
            filter: false, //Booleano para mostrar popup de filtro
            historial: false, //Booleano para mostrar popup de historial
            records: [],
            record: null,
            content:'',
        }
    },
    beforeMount() {
        this.getPeople();
    },


    methods: {
        async getPeople() {

            const response = await fetch(`http://puigmal.salle.url.edu/api/v2/users`, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            })

                .then(response => response.json())
                .then(data => this.data = data);

            console.log(response);

        },
        //Funcion para compartir evento
        async shareEvent(id) {
            this.receiver_id = id;
            this.content = message;
            this.sendId = userId;
            console.log(this.receiver_id);
            console.log(this.content);
            console.log(this.sendId);
            try {
				const response = await fetch(`http://puigmal.salle.url.edu/api/v2/messages`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						content: this.content,
						user_id_send: this.sendId,
						user_id_recived: this.receiver_id,					
					})
				});
				
			} catch (error) {
				console.error(error);
            }
        },
        //Función para augmentar cuantos eventos se ven
        showMore() {
            this.endIndex = this.endIndex + 10;

        },
        //Función para disminuir cuantos eventos se ven
        showLess() {
            this.endIndex = this.endIndex - 10;

        },
        //Funcion para buscar amigo
        async busquedaFriend() {

            const url = `http://puigmal.salle.url.edu/api/v2/users/search?s=${this.name}`;
            try {
                const response = await fetch(url, {
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
        <article class="cont4">
            <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <h2 class="titulo4">Compartir evento</h2>

            <!--Esto se ha de convertir en un input
            -->
            <section class="BContainer4">
                <input type="text" class="sinborde" name="Buscar persona" placeholder="Buscar persona" v-model="name">
                <div class="busqueda">
                    <div class="element">
                        <img src="src/assets/search.png" alt="img" v-on:click="busquedaFriend()">
                    </div>
                </div>
            </section>
            <a href="Chat" v-for="people in data.slice(0, endIndex)" :key="people.id"
                v-on:click="shareEvent(people.id)" v-if="showZona">
                <div class="PContainer4">

                    <img :src="people.image" class="perfil" alt="img" v-bind:error="errorImages">
                    <div class="nombre4">
                        {{ people.name }}
                    </div>
                    <nav class="Clogo4">
                        <img src="src\assets\flecha.png" class="icon" alt="tick">
                    </nav>

                </div>
            </a>
            <a  href="Chat" v-for="people in data2.slice(0, endIndex)" :key="people.id"
                v-on:click="shareEvent(people.id)" v-if="showBusqueda">
                <div class="PContainer4">

                    <img :src="people.image" class="perfil" alt="img" v-bind:error="errorImages">
                    <div class="nombre4">
                        {{ people.name }}
                    </div>
                    <nav class="Clogo4">
                        <img src="src\assets\flecha.png" class="icon" alt="tick">
                    </nav>

                </div>
            </a>

            <div class="centra">
                <div class="mostrarMas" v-on:click="showMore()" v-if="!((endIndex > data2.length) && showBusqueda)">
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
.cont4 {
    margin-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;


}

.element {
    border: 2px solid black;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.element img {
    width: 18px;
    height: 18px;

    object-fit: cover;
}

.centra {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}

.mostrarMas,
.mostrarMenos {
    cursor: pointer;
    margin-top: 2rem;
    border-radius: 50px;
    border: 2px solid black;
    width: 12rem;
    transition: all 300ms ease;
}

.mostrarMas:hover,
.mostrarMenos:hover {
    color: white;
    background: black;
}

input {
    outline: none;
    width: 72%;
}

.sinborde {
    border: 0;
    background-color: transparent;
}

.titulo4 {
    margin-left: 0%;
}

.BContainer4 {
    color: gray;
    height: 25px;
    width: 80%;
    background-color: transparent;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 50px;
    margin: 5%;
    margin-top: 5%;
    justify-content: space-between;
    position: relative;
}

.busqueda button {
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

.busqueda {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.PContainer4 {
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;

}

.Clogo4 {
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}

@Media (min-width: 1080px) {
    h2 {
        font-size: 40px;
    }
}
</style>