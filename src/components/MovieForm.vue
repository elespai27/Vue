<script setup>
import { useMovieStore } from '../stores/movie'
import { ref } from 'vue'


const moviesStore = useMovieStore()

const newMovie = ref({
  id: null,
  title: '',
  img: '',
  duration: null,
  hasAnyOscar: false,
  alt: '',
})

function handleSubmit() {
  newMovie.value.id = Math.floor(Math.random() * 100);
  moviesStore.addNewMovie({ ...newMovie.value });

  newMovie.value.id = null
  newMovie.value.title = ''
  newMovie.value.img = ''
  newMovie.value.duration = null
  newMovie.value.hasAnyOscar = false
  newMovie.value.alt = ''
}

</script>

<template>
<section>
    <form @submit.prevent="handleSubmit">
      <!-- prevenir el comportamiento por defecto de recargar la pág -->
      <fieldset>
        <label for="movie-name">Nombre de la Película: </label>
        <input type="text" id="movie-name" v-model="newMovie.title" />
      </fieldset>
      <fieldset>
        <label for="movie-img">Imagen de la Película: </label>
        <input type="text" id="movie-img" v-model="newMovie.img" />
      </fieldset>
      <fieldset>
        <label for="movie-duration">Duracción de la Película: </label>
        <input type="number" id="movie-duration" v-model="newMovie.duration" />
      </fieldset>
      <fieldset>
        <label for="movie-hasAnyOscar">Premios de la Película: </label>
        <input type="checkbox" id="movie-hasAnyOscar" v-model="newMovie.hasAnyOscar" />
      </fieldset>
      <fieldset>
        <label for="movie-alt">Descripción de la imagen: </label>
        <input type="text" id="movie-alt" v-model="newMovie.alt" />
      </fieldset>
      <br />
      <button>Crear Producto</button>
    </form>
  </section>

</template>

<style>

</style>
