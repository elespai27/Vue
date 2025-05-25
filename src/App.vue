<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
//import MovieList from './components/MovieList.vue';
import ParentComponent from './components/ParentComponent.vue'
import MovieList from './components/MovieList.vue'
//import ListsComponent from './components/listsComponent.vue';

const isDark = ref(false)
function toggleDark() {
  isDark.value = !isDark.value
}

</script>

<template>
  <HeaderComponent />
  <RouterView />
  <ParentComponent />
  <MovieList />

  <i class="icon" @click="toggleDark">
    {{ isDark ? '🌞' : '🌚' }}
  </i>
  <!-- <section :class="{dark: isDark}">
  <ListsComponent />
  </section> -->

</template>

<style>
.icon {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
.dark {
  background-color: darkslateblue;
  color: white;
}

</style>
