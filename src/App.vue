<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'

const isDark = ref(false)
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <i class="icon" @click="toggleDark">
    {{ isDark ? '🌞' : '🌚' }}
  </i>
  <section :class="{ dark: isDark }">
    <HeaderComponent />
    <RouterView />
  </section>
</template>

<style>
.icon {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
.dark {
  background-color: rgb(68, 0, 255);
  color: rgb(17, 209, 168);
}
</style>
