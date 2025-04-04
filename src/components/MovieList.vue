<script setup>
import { ref } from 'vue';
import MovieCard from './MovieCard.vue';

const movies = ref([{
  id: 1,
  title:"The Lord of the Rings",
  img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/One_ring.png",
  duration: 300,
  hasAnyOscar: true,
  alt: "Picture of ring"
},
{
  id: 2,
  title:"Star Wars",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png",
  duration: 120,
  hasAnyOscar: true,
  alt: "Picture of letters"
},
{
  id: 3,
  title:"Dune",
  img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dune_2021_logo.png",
  duration: 200,
  hasAnyOscar: false,
  alt: "Picture of letters"
}
]);

function deleteMovie(id) {
const movieIndex = movies.value.findIndex((movie) => movie.id === id)
movies.value.splice(movieIndex, 1);

}
</script>

<template>
<h2>Movies</h2>
<ul class="movie-list">
  <li v-for="movie in movies" :key="movie.id">
    <MovieCard :movie="movie" @delete-movie="deleteMovie"/>
    <!-- el props movie que viene de MovieCard se llama igual
    que al variable que igualaremos movie del v-for -->
  </li>
</ul>
</template>

<style>
.movie-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
 }

</style>
