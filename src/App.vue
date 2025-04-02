
<!-- esto es lógica JS -->
<script setup>

import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
// esto es un componente

let text = "Sou un texo que viene de una variable";
const counter = ref(0);

setInterval(() => {
counter.value = counter.value + 1;
console.log(counter)
}, 1000)

</script>

<!-- esto es HTML -->
<template>
  <h2 class="title">Bienvenidos a mi web</h2>
  <HeaderComponent></HeaderComponent>

  <h2>{{ counter }}</h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Nihil nemo cum dicta, doloribus deserunt repudiandae dolorem
    eveniet dolores quibusdam amet laborum. Numquam dicta mollitia ex
    nisi beatae! Nisi, velit incidunt!
  </p>

  <p>{{ text }}</p>
  <!-- notacion de bigote para que salga el contenido de la var en el contenido web -->

</template>

<!-- esto es CSS -->
<style>
.title {
    background-color: blueviolet;
}
</style>

<!-- Componentes independientes para reutilizarlos en el framework
 no puedo poner los mismos nombres que tenemos en el archivo
 y comienzan en mayúsculas en los archivos-->

 <!-- variables reactivas es otro concepto -->

