<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>

<template scoped>
 

 
    <Header2>
        
    </Header2>
    <!--Esta página es la misma que la de perfil pero añadiendo una seccion de un rectangulo negro que nos servira para oscurecer la página y ponemos por encima de todo
        un article idependiente que muestra el "pop up" CERRAR SESIÓN donde el coontenido está dividio en sections y botones-->

    <main>        
        <br>
               
        <article class = "contperfil">
            <h2>Perfil</h2> 
            <section class = "redondacolocacion">
                <button class="Redondai">
                    <p class = igrande>i</p>           
                </button>
                <i>&nbsp;&nbsp;&nbsp;</i>    
            </section>     
        </article>

        <br/>

        <section class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">
        </section>

        <p class = cont>Nombre</p>
        <br/>

        <article class = "cont">
            <section class = "encima">
        
                <section class = "rectanguloB">
                    <br/>
                    <aside class = cont> <h3>¿Seguro que quieres cerrar la sesión? </h3> </aside><br/>
                        <nav class = "contI2">
                            <a href = "Login"><button class = "rectanguloC">
                            <p>Cerrar sesión</p>
                            </button></a>
                            <a href = "Perfil"><button class = "rectanguloC">
                            <p>Cancelar</p>
                            </button></a>
                        </nav>
                    </section>
            </section>
        </article>


       <section class = "cont">
        <a href = "Datos"><button class="Rectanguloborrar">
                <p>Datos</p>
            </button></a>
        </section>
       
       <br/>
       <section class = "cont">
           <a href = "Estadisticas"><button class="Rectanguloborrar">
                <p>Estadísticas</p>
            </button></a>
        </section>
       
       <br/>
       <section class = "cont">
            <a href = "Amistades"><button class="Rectanguloborrar">
                <p>Amistades</p>
            </button></a>
        </section>
       <br/>

       <section class = "cont">
            <a href = "Events"><button class="Rectanguloborrar">
                <p>Mis eventos</p>
            </button></a>
        </section>
       <br/>

       <section class = "cont">
            <a href = "Borrarperfil"><button class="Rectanguloborrar">
                <p>Borrar perfil</p>
            </button></a>
        </section>
       <br/>

       <section class = "cont">        
            <a href = "Cerrarsesion"><button class="Rectanguloborrar">
                <p>Cerrar sesión</p>
            </button></a>
        </section>

       <br/><br/>

    </main>

    <Footer2>
        
    </Footer2>
    
    <section class = "rectanguloN"></section>
  
  </template>
 
<style scoped>

.cont p{
    color: white;
}
.contperfil{
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 8%;
   
}

.redondacolocacion{
    display: block;
    margin-top: 20px;
}
.transparent10{
    display:flex;
    width: 100%;
    height: 135px;
    background-color: transparent;
}
.Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}
.Redondai{
    display:flex;
    width: 25px;
    height: 25px;
    border-radius: 150px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
}
.Rectanguloborrar{
   display: flex;
   width:200px;
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


.contI2{
    display: flex;
    justify-content: space-around;
   
}
.rectanguloN{
      
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: black;
    opacity: 70%;
    bottom: 0;
    
}

.rectanguloB{
    
    width: 250px;
    height: 180px;
    background-color: white;
    border-radius: 30px;
   

}
.encima{
    z-index: 5;
    position: fixed;
}    

.rectanguloC{
    display:flex;
    width: 100px;
    height: 50px;
    background-color: black;
    border-radius: 20px;
    justify-content: center;
    align-items:center;
}
@media (min-width:1080px){
    h2{
        font-size: 40px;
    }
    .Rectanguloborrar{
        width: 700px;
        
    }
    .transparent10{
        height: 24.5px;
    }
    .rectanguloB{
        width: 500px;
    }
    .Redondai{
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