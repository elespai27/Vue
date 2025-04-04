<script setup>
import { ref } from 'vue';

//esto es una var reactivoa que reprenta a un usuario
const user = ref({
    username: "Vero",
    isLoggediN: true
});

</script>
<template>
<!-- <renderizaión condicional /> -->
<section v-if="user.isLoggediN">
<h2>Título de la sección</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ab amet autem unde illo repudiandae, tempora fugiat,
  id quaerat explicabo culpa cum modi, ullam debitis esse minima
  hic possimus dolorum quod!
</p>
</section>

<section v-else>
  <h2>Inicia sesión para ver el contenido</h2>
</section>

</template>

<style>
</style>
