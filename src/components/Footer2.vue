<template>
  
  
  <footer>
      <article class="FContainer"><!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
          <section class="botones1"><!--Con el secction separamos las secciones que no interesan-->
              <a href = "Home"><img src='src/assets/home.png' alt="home" width="25" height="25"></a>
              <a href = "Search"><img src='src/assets/search.png' alt="home" width="25" height="25"></a>
              <a href = "Add"><img src='src/assets/add.png' alt="home" width="25" height="25"></a>
              <a href = "TimeLineEvent"><img src='src/assets/calendar.png' alt="home" width="25" height="25"></a>
              <a href = "Perfil"><img src='src/assets/usuario.png' alt="home" width="25" height="25"></a>
          </section>
          
      </article>
  </footer>
</template>
<style>


.FContainer{
    display: flex;
    position: fixed;
    bottom: 0%;
    flex-direction: row;
    padding-left: 5%;
    padding-right: 5%;
    background-color:var(--main-bg-color);
    align-items: center;
    flex-wrap: wrap;
    width:100%;
}

.botones1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5%;
    margin-bottom: 5%;

}

@media (min-width: 850px){
    .FContainer{
        height: 80px;
    }
    .botones1{
        position: fixed;

    }
}

</style>