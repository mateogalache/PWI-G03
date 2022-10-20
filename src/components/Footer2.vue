<template>
    
    
    <footer>
        <article class="FContainer">
            <div class="botones">
                <img src='src/assets/home.png' alt="home" width="25" height="25">
                <img src='src/assets/search.png' alt="home" width="25" height="25">
                <img src='src/assets/add.png' alt="home" width="25" height="25">
                <img src='src/assets/calendar.png' alt="home" width="25" height="25">
                <img src='src/assets/usuario.png' alt="home" width="25" height="25">
            </div>
            
        </article>
    </footer>
  </template>
<style>


.FContainer{
    display: flex;
    flex-direction: row;
    padding-left: 5%;
    padding-right: 5%;
    background-color: cadetblue;
    align-items: center;
    flex-wrap: wrap;
    
}

.botones{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5%;
    margin-bottom: 5%;

}


</style>