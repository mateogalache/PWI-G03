<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>

    <div id="body">

            <form method="get" action="accion.html">
            
            Nombre Evento: <input type="text" name="nombreevento" /><br />
            
            Tipo Evento: <input type="text" name="tipoevento" /><br />
            
            Dia Evento: <input type="text" name="diaevento" /><br />
            
            Localización: <input type="text" name="localizacion" /><br />
            
            Descripcion: <input type="text" name="descripcion" /><br />
            
        </form>
        
    </div>

</template>