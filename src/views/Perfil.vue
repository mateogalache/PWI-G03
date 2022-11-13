<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
import Header3 from '../components/Header3.vue';
</script>

<template>

    <Header3>
        
    </Header3>
    <!--Ponemos article para separar los diferentes contenidos dentro de la página, dentro de cada article tenemos el contenido donde las palabras están en p o h2 según su importancia
        como por ejemplo el título "Perfil" que está en h2. Además para separar los contenidos dentro del article ponemos section porque dentro de cada article era necesario separar 
        por secciones. Y como último tenemos los botones que nos sirven para representar botones donde el ususario puede "clickar".
        Al estar toda la página dividida de la misma manera no hacia falta comentar cada tag sino que hemos hecho un comentario general que define todas las partes de la página.-->
    
    <main>        
        <br>
        <article class = "contperfil">
            <h2>Perfil</h2> 
            <section class = "redondacolocacion">
                <a href = "Contactanos"><button class="Redondaperfil">
                    <p class = "igrande">i</p>           
                </button></a>                   
            </section>     
        </article>
        <br/>

        <section class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">
        </section>

        <p class = cont>Nombre</p>
        <br/>
       
        <section  class = "cont">
            <a href = "Datos"><button class="Rectanguloperfil">
                <p><FONT color = "white">Datos</FONT></p>
            </button></a>
        </section>
       
       <br/>
       <section class = "cont">
           <a href = "Estadisticas"><button class="Rectanguloperfil">
                <p><FONT color = "white">Estadísticas</FONT></p>
            </button></a>
        </section>
       
       <br/>
       <section class = "cont">
            <a href = "Amistades"><button class="Rectanguloperfil">
                <p><FONT color = "white">Amistades</FONT></p>
            </button></a>
        </section>

       <br/>
       <section class = "cont">
            <a href = "Events"><button class="Rectanguloperfil">
                <p><FONT color = "white">Mis eventos</FONT></p>
            </button></a>
        </section>

       <br/>
       <section class = "cont">
            <a href = "Borrarperfil"><button class="Rectanguloperfil">
                <p><FONT color = "white">Borrar perfil</FONT></p>
            </button></a>
        </section>

       <br/>
       <section class = "cont">        
            <a href = "Cerrarsesion"><button class="Rectanguloperfil">
                <p><FONT color = "white">Cerrar sesión</FONT></p>
            </button></a>
        </section>
       <br/><br/>

       <section class = "transparent6"></section>
        
    </main>

    <Footer2>
        
    </Footer2>
 
  </template>
 
<style scoped>


.redondacolocacion{
    display: block;
    margin-top: 20px;
}
.Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}
.Redondaperfil{
    display:flex;
    width: 25px;
    height: 25px;
    border-radius: 150px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
}
.Rectanguloperfil{
   display: flex;
   width: 200px;
   height:30px;   
   background-color: rgb(104, 100, 100);
   border-radius:22px;   
   justify-self: center;
   justify-content: center;
   align-items: center;

   
} 
.cont{
    display: flex;
    justify-content: center;
   align-items: center;

}

.contperfil{
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 8%;
   
}

@media (min-width:1080px){
    h2{
        font-size: 40px;
    }
    .Rectanguloperfil{
        width: 700px;
        
    }
    .Redondaperfil{
        width: 40px;
        height: 40px;
        border-color: black;
    }
    .redondacolocacion{
        margin-top: 40px;
    }
    .igrande{
        font-size:x-large;
    }
    .Redondap{
        height: 200px;
        width: 200px;
    }
   
}






</style>