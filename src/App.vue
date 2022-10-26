<script setup>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//sdasdasd
import Footer2 from './components/Footer2.vue'
import Inicio from './views/Inicio.vue'
import Header2 from "./components/Header2.vue";
</script>

<template>
  <nav>
    
  </nav>
  
  <router-view>
  </router-view>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
