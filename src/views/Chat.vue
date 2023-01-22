<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<script>

const token = localStorage.getItem('accessToken'); //Cogemos token del local storage
const friendId = localStorage.getItem('friend');
const userId = window.localStorage.getItem('userId'); //Cogemos id del usuario del local storage
const eventmessage = localStorage.getItem('shareEvent');
const chatName = localStorage.getItem('chatName');
const myName = localStorage.getItem('userName');


export default {
	name: "App",
	data() {
		return {
			data: [],
			data2: {},
			content: '',
			
			chatname:'',
			myname:'',
			myid:'',
			chatid:'',
		}
	},
	beforeMount() {
		this.getMessages();
		this.getInfo();
		this.getName();
	},
	methods: {

		//Guardamos el id de la persona a la que queremos acceder a su perfil
		savePerson(id) {
			this.savedId = id;
			window.localStorage.setItem('friend', this.savedId);
		},

		//guardamos las variables del localStorage en una variable
		getName(){
			this.chatname = chatName;
			this.myname = myName;
			this.myid = userId;
			this.chatid = friendId;
			
		},

		//Funcio que llama a la api para obtener todos los mensajes entre tu y el usuario deseado
		async getMessages() {
			try{
				const response = fetch(`http://puigmal.salle.url.edu/api/v2/messages/${friendId}`, {
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
			})

				.then(response => response.json())
				.then(data => this.data = data);
			
			} catch(error){
				console.error(error);
			}
			
			


		},
		//Llamada que nos da la informacion del usuario con el que conversamos
		async getInfo(){

			const response = fetch(`http://puigmal.salle.url.edu/api/v2/users/${friendId}`, {
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
			})

				.then(response => response.json())
				.then(data2 => this.data2 = data2);
		


		},
		//Llamada que nos permite escribir los mensajes y subirlos a la api para guardar la conversación
		async enviarMensaje(){
			
			try {
				const response = await fetch(`http://puigmal.salle.url.edu/api/v2/messages`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						content: this.content,
						user_id_send: this.myid,
						user_id_recived: this.friendId,					
					})
				});
				this.getMessages();
				this.content = '';
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
	<!--Chat con una persona-->
    <main>
		<body>
			<div>
				<!--Creamos un banner donde vemos la foto y el nombre del usuario con el que hablamos-->
				<a href="PerfilAmigo" v-on:click=savePerson(this.friendId)><div  v-for="profile in data2" class="nomchat">
					<img class="header-img" :src=profile.image />
					<h2 class="nom">{{ profile.name }}</h2>
				</div></a>
				<div class="transparent1"></div>
				<!--Con el div creamos el espacio donde mostraremos los mensajes-->
				<div class="conversation" >
					<div class="conversation-container" v-for="messages in data" >
					

						<!--Hacemos un v-if para seleccionar la forma de mostrar los mensajes en funcion de quien lo ha escrito-->
						<div class="message sent" v-if="messages.user_id_send == this.myid" >
							<p>{{messages.content }}</p>
							<p class="hora">{{ messages.timeStamp.substring(11, 19) }}</p>
						</div>	

						<div class = "message recived" v-if="messages.user_id_send == this.friendId">
							<p>{{messages.content }}</p>
							<p class="hora">{{ messages.timeStamp.substring(11, 19) }}</p>
						</div>	

					</div>   
				</div>

				<!--Creamos un input que nos permite escribir los mensajes-->
				<div class="input-box">
					<input type="text" v-model="content"/>
					<button v-on:click="enviarMensaje()"> Enviar </button>
				</div>
				<div class="transparent6"></div>
			</div>
		</body>
		
        
    </main>
	<Footer2>

	</Footer2>
   
    
</template>
<style scoped>
.nom{
	text-decoration: none;
	color:#000;
}
.hora{
	font-size:15px;
}
.transparent1 {
	
	width: 100%;
	height: 80px;
	background-color: white;
}
.conversation {
	height: calc(100% - 12px);
	position: relative;
	z-index: 0;
}

.conversation ::-webkit-scrollbar {
	transition: all .5s;
	width: 5px;
	height: 1px;
	z-index: 10;
}

.conversation ::-webkit-scrollbar-track {
	background: transparent;
}

.conversation ::-webkit-scrollbar-thumb {
	background: #b3ada7;
}

.conversation .conversation-container {
	height: calc(100% - 68px);
	
	overflow-x: hidden;
	padding: 0 16px;
	margin-bottom: 5px;
}

.conversation .conversation-container:after {
	content: "";
	display: table;
	clear: both;
}

.message {
	display:flex;
	color: #000;
	clear: both;
	line-height: 18px;
	font-size: 15px;
	padding: 8px;
	position: relative;
	margin: 8px 0;
	max-width: 85%;
	word-wrap: break-word;
	z-index: -1;
	flex-direction:column;
	
}

.message:after {
	position: absolute;
	content: "";
	width: 0;
	height: 0;
	
}
.message:first-child {
	margin: 16px 0 8px;
}

.message.received {
	background: #fff;
	border-radius: 0px 5px 5px 5px;
	float: left;
}

.message.received {
	padding: 0 0 0 16px;
}

.message.received:after {
	border-width: 0px 10px 10px 0;
	border-color: transparent #fff transparent transparent;
	top: 0;
	left: -10px;
}

.message.sent {
	background: #e1ffc7;
	border-radius: 5px 0px 5px 5px;
	float: right;
}

.message.sent:after {
	border-width: 0px 0 10px 10px;
	border-color: transparent transparent transparent #e1ffc7;
	top: 0;
	right: -10px;
}



h3{
    margin-left: 5%;
}


.nomchat{
	position: fixed;
    display: flex;
    align-items: center;
	gap: .5rem;
	background:white;
	padding-left:2%;
	padding-top:2%;
	z-index: 1;
	width:100%;
}
.nomchat:after{
content: "";
	display: table;
	clear: both;
}


.header-img {
	width: 42px;
	height: 42px;
	border-radius: 100px;
}

.message {
	border-radius: 10px;
	display: flex;
	background: #efefef;
	min-height: 25px;
	padding: 9px 10px;
	
	color: #222121;
}

.input-box {	
	position: fixed;
	width: 100%;
	bottom: 5rem;	
	display: flex;
	padding: 4px 6px;

	box-sizing: border-box;
    margin-top: 10%;
}

.input-box input {
	flex: 1;
	border-radius: 10px;
	border: 1px #cecece solid;
	padding: 3px 4px;
    outline: none;
}

.input-box button {
	width: 80px;
	background: #2196F4;
	border-radius: 21px;
	border: 1px #fffa solid;
	color: #ffffff;
	margin: 0px 6px;
	outline: none;
}



@media (min-width: 1080px){

	.transparent1 {
	
		
		height: 125px;
		
		}
	
	
	.input-box{
		margin-top: 5%;
	}
	.header-img{
		width: 100px;
		height: 100px;
	}
	.message{
		font-size: 20px;
	}
	.hora{
		font-size:15px;
	}
	.input-box input{
		font-size: 30px;
		
	}

	.input-box button{
		font-size: 30px;
		width: 150px;
	}
	


}
</style>