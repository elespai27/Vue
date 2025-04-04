<script setup>
const props = defineProps({
  //siempre se llama props
  //recibir props
  title: String
});

const emit = defineEmits(["sendMessage"]);

function notify() {
  emit("sendMessage", "Hola desde el hijo");

}
</script>

<template>
  <h3>Soy el componente hijo</h3>
  <h4>{{ props.title }}</h4>
  <button @click="notify">Enviar Mensaje</button>
  <br>
  <slot></slot>
</template>

<style>

</style>
