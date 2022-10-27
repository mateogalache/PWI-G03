<template>
    
    
    <footer>
        <article class="FContainer">
            <div class="botones1">
                <a href = "Home"><img src='src/assets/home.png' alt="home" width="25" height="25"></a>
                <a href = "Search"><img src='src/assets/search.png' alt="home" width="25" height="25"></a>
                <a href = "Add"><img src='src/assets/add.png' alt="home" width="25" height="25"></a>
                <a href = "Events"><img src='src/assets/calendar.png' alt="home" width="25" height="25"></a>
                <a href = "Perfil"><img src='src/assets/usuario.png' alt="home" width="25" height="25"></a>
            </div>
            
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
    background-color: cadetblue;
    align-items: center;
    flex-wrap: wrap;
    
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


</style>