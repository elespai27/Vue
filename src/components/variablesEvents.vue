<!-- esto es lógica JS -->
<script setup>
import { ref } from 'vue' //esto es una función de Vue

// esto es un componente

let text = 'Soy un texo que viene de una variable'
const counter = ref(0)
const userName = ref("")
const clickX= ref(0);
const clickY= ref(0);


//const userName = ref("") //valor inicial dentro de paréntisis
const imgInfo = {
  url: 'https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D',
  alt: 'Imagen de un paiosaje', //texto alternativo para accesibilidad
  width: 300,
}

setInterval(() => {
  counter.value = counter.value + 1 //para usar esta var reactiva tenemos que hacer .value
  console.log(counter)
}, 1000)

function showAlert() {
  alert('Hola a todos')
}
function chandeUserName() {
  userName.value = '_Vero';
}

function handleClick(event) {
  console.log(event);
  clickX.value = event.screenX;
  clickY.value = event.screenY;//el scrreenX y el screenY son las coordenadas del mouse
}
// el event es un objeto que contiene información del evento

</script>

<!-- esto es HTML -->
<template>


  <img :src="imgInfo.url" :alt="imgInfo.alt" :width="imgInfo.width" />
  <!-- v-bind -->

  <h2>{{ userName }}</h2>
  <input type="text" placeholder="nombre" v-model="userName"> <!-- v-model -->
  <br>
  <button @click="chandeUserName">change userName</button>
  <h2>{{ counter }}</h2>

  <h2 class="title" @click="showAlert">Bienvenidos a mi web</h2>
  <!-- el arroba + nombre del evento + función (Esto es un evento) -->

  <p @click="handleClick">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil nemo cum dicta, doloribus
    deserunt repudiandae dolorem eveniet dolores quibusdam amet laborum. Numquam dicta mollitia ex
    nisi beatae! Nisi, velit incidunt!
  </p>
  <h3>{{ clickX }} - Y: {{ clickY }}</h3>

  <p>{{ text }}</p>
  <!-- notacion de bigote para que salga el contenido de la var en el contenido web -->
</template>

<!-- esto es CSS -->
<style>

</style>

<!-- Componentes independientes para reutilizarlos en el framework
 no puedo poner los mismos nombres que tenemos en el archivo
 y comienzan en mayúsculas en los archivos-->

<!-- variables reactivas es otro concepto -->
