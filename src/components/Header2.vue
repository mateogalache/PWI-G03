<template>

  <header>
    <section class = "HContainer7">
      
      <a href = "javascript: history.go(-1)" class = "triangulo"> </a>
        
      <h1>SALLEVENTS</h1>
      <a href = "Chats"><img src = "https://cdn-icons-png.flaticon.com/512/61/61516.png" class = "conti" ></a>
   
    </section>
  </header> 
  <main>
    
  </main>
  <footer>
  </footer>
</template>
<style>

.HContainer7{
    top:0;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--main-bg-color);
    width: 100%;
    position: fixed;
    -webkit-box-shadow: 0px 6px 13px 0px rgba(95,158,160,1);
    -moz-box-shadow: 0px 6px 13px 0px rgba(95,158,160,1);
    box-shadow: 0px 6px 13px 0px rgba(95,158,160,1);
}

.triangulo{
  margin-left:20px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 20px solid black;
  border-bottom: 10px solid transparent;
}
.conti{
  margin-right: 20px;
  display:flex;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
}
</style>