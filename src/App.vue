<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue'
//import MovieList from './components/MovieList.vue';
import ParentComponent from './components/parentComponent.vue';
//mport ListsComponent from './components/listsComponent.vue';

const isDark = ref(false);
function toggleDark() {
  isDark.value = !isDark.value;
}

</script>

<template>
  <HeaderComponent />

<i class="icon" @click="toggleDark">
  {{ isDark ? "🌞" : "🌚" }}
</i>
  <!-- <section :class="{dark: isDark}">
  <ListsComponent />
  </section> -->

  <ParentComponent />


   <!-- <MovieList /> -->

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
