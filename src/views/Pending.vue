<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>

    <main>
        <article class = "cont24"> <!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <section class = "BContainer33"><!--Con el secction separamos las secciones que no interesan-->
                <button class="Send">
                    <a href = "Sending"><b>Send request</b></a>
                </button>

                <button class="Pending">
                    <a href = "Pending"><b>Pending request</b></a>
                </button>
            </section >
                
                
            <section class = "PContainer33"><!--Con el secction separamos las secciones que no interesan-->
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <aside class = "Clogo2"><!--Usamos aside aqui,ya que a diferencia de los otros que era para navegar este no nos permite navegar pero si que esta relacionado con la pagina-->
                    <img src="src\assets\tick.png" class = "icon" alt="tick">
                    <img src="src\assets\cross.png" class = "icon" alt="tick">
                </aside>
            </section>
            <section class = "PContainer33"><!--Con el secction separamos las secciones que no interesan-->
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <aside class = "Clogo2"><!--Usamos aside aqui,ya que a diferencia de los otros que era para navegar este no nos permite navegar pero si que esta relacionado con la pagina-->
                    <img src="src\assets\tick.png" class = "icon" alt="tick">
                    <img src="src\assets\cross.png" class = "icon" alt="tick">
                </aside>
            </section>
            <section class = "PContainer33"><!--Con el secction separamos las secciones que no interesan-->
                <img src="src/assets/usuario.png" class = "perfil">
                <a href="PerfilAjeno"><p class = "nombre3">Nombre</p></a>
                <aside class = "Clogo2"><!--Usamos aside aqui,ya que a diferencia de los otros que era para navegar este no nos permite navegar pero si que esta relacionado con la pagina-->
                    <img src="src\assets\tick.png" class = "icon" alt="tick">
                    <img src="src\assets\cross.png" class = "icon" alt="tick">
                </aside>
            </section>
        </article>
    <div class="transparent6"></div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>
.cont24{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
    
}
.BContainer33{
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    

}
.Send{
    width: 100%;
}
.Pending{
    width: 100%;
}
.PContainer33{
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 100%;
    justify-content: space-between;
   
    

}
.Clogo2{
    display: flex;
    justify-content: end;
    justify-content: space-around;
    margin-right: 5%;
}


</style>