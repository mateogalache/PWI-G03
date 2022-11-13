<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <article class = "cont4"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <h2 class = "titulo4">Buscar Amigos</h2>

            <section class = "BContainer4"><!--Con el secction separamos las secciones que no interesan-->
                <p class = "buscar">Buscar amigo....</p>
            </section>
                
            <section class = "PContainer4"><!--Con el secction separamos las secciones que no interesan-->
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre4">Nombre</p></a>
                <nav class = "Clogo4"><!--Usamos este tag ya que es un elemnto que nos permite navegar entre las paginas-->
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </nav>
            </section>
            <section class = "PContainer4"><!--Con el secction separamos las secciones que no interesan-->
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre4">Nombre</p></a>
                <nav class = "Clogo4"><!--Usamos este tag ya que es un elemnto que nos permite navegar entre las paginas-->
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </nav>
            </section>
            <section class = "PContainer4"><!--Con el secction separamos las secciones que no interesan-->
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre4">Nombre</p></a>
                <nav class = "Clogo4"><!--Usamos este tag ya que es un elemnto que nos permite navegar entre las paginas-->
                    <img src="src\assets\flecha.png" class = "icon" alt="tick">
                </nav>
            </section>
        </article>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>


.cont4{
    margin-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.titulo4{
    margin-left: 0%;
}

.BContainer4{
    display: flex;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    margin-bottom: 2%;
}

.PContainer4{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
}
.Clogo4{
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