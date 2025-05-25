<script setup>
import { useMovieStore } from '../stores/movie';

defineProps({
  movie: Object
})

const movieStore = useMovieStore();


</script>

<template>
<article class="movie-card">
<h3>{{ movie.title }}</h3>
<img :src="movie.img" :alt="movie.alt" height="100px">
<div class="buttom">
<p>Play: {{ movie.duration }}</p>
<p class="trash" @click="movieStore.deleteMovie(movie.id)">🗑️</p>
</div>
</article>
</template>

<style>

.movie-card {
  border: 5px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttom {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .trash {
      font-size: 2rem;
      cursor: pointer;
    }
    .trash:hover {
      color: greenyellow;
    }
  }
}

</style>
