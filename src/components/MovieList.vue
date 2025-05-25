<script setup>
import MovieCard from './MovieCard.vue'
import { useMovieStore } from '../stores/movie'

const moviesStore = useMovieStore();
</script>

<template>
  <h2>Movies</h2>

  <ul class="movie-list">
    <li v-for="movie in moviesStore.movies" :key="movie.id">
      <MovieCard :movie="movie" @delete-movie="deleteMovie" />
      <!-- :movie="movie" → Pasa el objeto película al hijo como prop en MovieCard -->
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
