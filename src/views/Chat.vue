<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<script>

const token = localStorage.getItem('accessToken');
const id = localStorage.getItem('friend');

export default {
	name: "App",
	data() {
		return {
			data: {},
			data2: {},
		}
	},
	beforeMount() {


		this.getMessages();
		this.getInfo();

	},
	methods: {

		async getMessages() {

			const response = fetch(`http://puigmal.salle.url.edu/api/v2/messages/${id}`, {
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
			})

				.then(response => response.json())
				.then(data => this.data = data);
			console.log(response);


		},

		async getInfo(){

			const response = fetch(`http://puigmal.salle.url.edu/api/v2/users/${id}`, {
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
			})

				.then(response => response.json())
				.then(data2 => this.data2 = data2);
			console.log(response);


		},

	}
};

</script>
<template>
    <Header2>

    </Header2>
	<!--Chat con una persona-->
    <main>
        <div  v-for="profile in data2" class="nomchat">
            <img class="header-img" src={{profile.image}} />
            <h2>{{ profile.name }}</h2>
        </div>
        
        <div class="box"><!-- Usamos div de manera "tonta", hace referencia a un elemento o conjunto de elementos pero podriamos usar article-->
			<div class="item left">
				
				<span class = "message"> Que me cuentas </span>
			</div>
			<div class="chart-timer">
				2022-10-17
			</div>
			<div class="item right">
				<div class="col">
					<p>tu</p>
					<span class = "message"> Jajajajaja </span>
				</div>
			</div>
            
		</div>

		<div class="input-box">
			<input type="text" />
			 <button> Enviar </button>
		</div>
		<div class="transparent6"></div>
    </main>
	<Footer2>

	</Footer2>
   
    
</template>
<style scoped>
.box{
    margin-top: 10%;
}
h3{
    margin-left: 5%;
}
.nomchat{
    display: flex;
    flex-direction: row;
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
	
	
	left: 0;
	right: 0;
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
button:active{}

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