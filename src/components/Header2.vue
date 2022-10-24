Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Socrates98 
mateogalache
/
PWI-G03
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
PWI-G03/src/components/Header.vue
@Socrates98
Socrates98 header2
Latest commit 9d05e6c 13 minutes ago
 History
 1 contributor
63 lines (57 sloc)  1.22 KB

<template>
  
  <footer>
      <article class="HContainer">
          <section class="Hcenter">
              <h1>OpenEvents</h1>
          </section>
          <section class="Hbotonatras">
            <img src="src/imagenes/54476.png" 
            width="35" height="35" alt="Botón atrás">
          </section>
          <section class="Hbotoncomentario">
            <img src="src/imagenes/comentario.png" 
            width="35" height="35" alt="Botón atrás">
          </section>
      </article>
  </footer>
</template>

<style>
h1{
  position: relative;   
  font-size: 35px;
  top: 15px;
}
.HContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(188, 188, 188);
    align-items: center;
    flex-wrap: wrap;
    position:fixed;
    top: 0%;
    width: 100%;
}
.Hbotonatras{
    position: relative; 
    display: flex;
    flex-grow: 1;
    left: 100px;
    bottom: 40px;
}
.Hbotoncomentario{
    position: relative; 
    filter: brightness(1.1);
    mix-blend-mode: multiply;
    display: flex;
    flex-grow: 1;
    right: -550px;
    bottom: 40px;
}
 
.Hcenter{
    display: flex;
    justify-items: center;
    padding-right: 50%;
    padding-left: 45%;
}
</style>
