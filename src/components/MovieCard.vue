<script setup>
const props = defineProps({
  movie: Object
})

const emit = defineEmits(["deleteMovie"]);

function emitDelete() {
  emit("deleteMovie", props.movie.id);

 }
</script>

<template>
<article class="movie-card">
<h3>{{ props.movie.title }}</h3>
<img :src="props.movie.img" :alt="props.movie.alt" height="100px">
<div class="buttom">
<p>Play: {{ props.movie.duration }}</p>
<p class="trash" @click="emitDelete">🗑️</p>
</div>
</article>
</template>

<style>

.movie-card {
  border: 5px solid rgb(207, 170, 5);
  background-color: grey;
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
