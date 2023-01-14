<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<script>

const token = localStorage.getItem('accessToken');
const friendId = localStorage.getItem('friend');
const userId = window.localStorage.getItem('userId');
console.log(userId);
console.log(friendId);

export default {
	name: "App",
	data() {
		return {
			data: [],
			data2: {},
			content: '',
			send_id: '',
			receiver_id: '',
		}
	},
	beforeMount() {
		this.getMessages();
		this.getInfo();
	},
	methods: {
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
			console.log(response);
			} catch(error){
				console.error(error);
			}
			
			


		},

		async getInfo(){

			const response = fetch(`http://puigmal.salle.url.edu/api/v2/users/${friendId}`, {
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
			})

				.then(response => response.json())
				.then(data2 => this.data2 = data2);
			console.log(response);


		},
		async enviarMensaje(){
			this.send_id = userId;
			this.receiver_id = friendId;
			try {
				const response = await fetch(`http://puigmal.salle.url.edu/api/v2/messages`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						content: this.content,
						user_id_send: this.send_id,
						user_id_recived: this.receiver_id,					
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
			<div class="container">
				<div  v-for="profile in data2" class="nomchat">
					<img class="header-img" :src=profile.image />
					<h2>{{ profile.name }}</h2>
				</div>
					<div class="containermessage" ref="myDiv">
						<div class="messagesBox" ><!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article-->
							<div class="messagein" v-for="messages in data">
								
									<p>{{messages.content}}</p>
													
							</div>           
					</div>
				</div>

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

.containermessage{
	display: flex;
	justify-content: end;
	width: 100%;
	
}
.messagein:after{
	content:'';
	border-left: 15px solid transparent;
    border-right: 15px solid transparent;    
    border-bottom: 15px solid lightgray;
	width: 0rem;
	right: -1rem;
	top: 1rem;
	transform: rotate(90deg);
	position: absolute;
}
.messagein{
	position: relative;
	background: lightgray;
	padding: 1rem;
	border-radius: 20px;
	width: 5rem;	
	display: flex;
	justify-content: center;
	align-items: center;
	
	
}
.messagesBox{	
	display: flex;
	flex-direction: column;
	bottom: 8rem;	
	gap: 1rem;
	margin-right: 2rem;
	
}

h3{
    margin-left: 5%;
}
.nomchat{
	position: fixed;
    display: flex;
    align-items: center;
	gap: .5rem;
    margin-top: 5%;
    margin-left: 5%;
	margin-right: 5%;
    
}
.col{
	display:flex;
	flex-direction:column;
	text-align:end;
	
}
.col p{
	margin-right: 10px;
	color:grey;
}
.item {
	display: flex;
	margin-bottom: 10px;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
}

.left {
	flex-direction: row;
}

.right {
	flex-direction: row-reverse;
}

.right .message {
	margin-right: 10px;
}
.left .message{
	margin-left: 10px;
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
	align-items: center;
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


.chart-timer{
	text-align: center;
    color: #616161;
    font-size: 13px;
}

@media (min-width: 1080px){
	.box{
		margin-top: 5%;
	}
	.nomchat{
		margin-top: 2%;
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
	.input-box input{
		font-size: 30px;
		
	}

	.input-box button{
		font-size: 30px;
		width: 150px;
	}
	.chart-timer{
	text-align: center;
    color: #616161;
    font-size: 20px;
}


}
</style>