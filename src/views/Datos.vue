<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'
</script>
<template>
    <Header2>
    
    </Header2>
    <!-- Al igual que el perfil esta página tiene una estructura muy parecida en todas las partes por lo que se divide en article, section y en este caso en vez de botones ponemos nav
        ya que nos servirá para poder navegar por las diferentes opciones de cada dato-->
    <main>
        <br>
        <h2>Datos</h2>
        <br/><br/>

        <article class = "cont">
            <img src = "src/assets/usuario.png" class = "Redondap">            
        </article>

        <p class = "cont">Cambiar foto de perfil</p>
        <br/>

        <article class = "cont">
            <section class = "rectangulo5">
                <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nombre</FONT></p>                    
                <nav class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                </nav>
            </section>    
        </article>

        <br><br/>

        <article class = "cont">
            <section class = "rectangulo5">                
                <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apellidos</FONT></p>
                <nav class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                </nav>
            </section>    
        </article>

        <br><br/>

        <article class = "cont">
            <section class = "rectangulo5">                
                <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</FONT></p>                    
                <nav class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                </nav>
            </section>    
        </article>
            
        <br><br/>

        <article class = "cont">
            <section class = "rectangulo5">                
                <p><FONT color = "grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contraseña</FONT></p>                    
                <nav class = "rectangulo2">
                    <p><FONT color = "white">Editar</FONT></p>
                </nav>
            </section>    
        </article>     
    </main>

    <Footer2>
        
    </Footer2>
</template>

<style scoped>

.rectangulo5{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 50px;
}
.rectangulo2{
    height: 20px;
    width: 80px;
    background-color: grey;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 20px;
    border-radius: 25px;
}



 .Redondap{
    display:flex;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    border: 1px solid black;
    
}

.cont{
    display: flex;
    justify-content: center;
   align-items: center;

}
 
    
@media (min-width:1080px){
    .rectangulo5{
        width: 1000px;
        justify-content: space-between;
               
    }
    .rectangulo2{
        margin-right: 20px;
    }
}



</style>