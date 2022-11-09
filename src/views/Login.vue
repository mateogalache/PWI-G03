<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template >
    <Header>
        
    </Header>
    <main id="Login">
        
        <picture class = "background"> </picture>

        <body class = "iniciarsesioncontainer">
            <article class = "recuadrocentro">
                <section class = "recuadro"></section>
            </article> 

            <article class="contlogin">        
                <img src = "https://i.ibb.co/80sWyBS/sallevents.png" class= "imglogo">
            </article>
            <br>
        
            <article class="contlogin">        
                <section class = "center0">
                    <h2><b>Iniciar sesión</b></h2>              
                    <p><label>Email*</label></p>
                    <input type="text" class = "texto">
                    <p><label>Contraseña*</label></p>
                    <input type="password" class = "texto">
                    <p><small>¿Has olvidado tu contraseña?</small></p>
                </section>
            </article>
            <br>
    
            <article class="contlogin"> 
                <a href = "Home"><button class="Iniciar">
                <b><FONT COLOR="white">Iniciar Sesión</FONT></b>
                </button></a>
            </article>

            <article class="contlogin">
                <section class = "center0">
                    <a HREF="Register"><p align = "right"><small>¿No tienes cuenta? Regístrate</small></p></a>
                </section>
            </article>
      
            <section class = "transparent9"></section>

        </body>

    </main>

    <Footer>
        
    </Footer>
  </template>
<style scoped>

.transparent9{
    display:flex;
    width: 100%;
    height: 80px;
    background-color: transparent;
    
}
.recuadrocentro{
    display:grid;    
    place-content: center;
}


.center0{
   width: 100%;
   
}
.Iniciar{
   display: flex;
   width:150px;
   height:50px;   
   background-color: rgb(104, 100, 100);
   border-radius:22px;   
   justify-self: center;
   justify-content: center;
   align-items: center;

   
} 

.texto{
    width: 98%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;

  }   

.contlogin{
    display: flex;
    justify-content: center;
   align-items: center;
   

}
    
.iniciarsesioncontainer{
    display: block;
}
.imglogo{
    width : 300px;
    margin-top: 5%;
}
@media (min-width: 1080px){
    .center0{
        width: 500px;
        
    }
    .iniciarsesioncontainer{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .imglogo{
    width : 300px;
    margin-top: 25%;
    }
    .recuadro{
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    width: 540px;
    height: 590px;
    border: 2px solid black;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 5px 2px 2px black;
    z-index: -2;
    background-color: white;
    
    }
    .background{
    position:fixed;
    width: 100%;
    height: 100%;
    background-image: url("src/assets/fondo.png");
    z-index: -3;
    }
    
}




    
    





</style>