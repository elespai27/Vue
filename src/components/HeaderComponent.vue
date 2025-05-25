<script setup>

</script>

<template>
  <h1>Hola a todos</h1>
  <nav>
    <ul class="nav-list">
      <li><RouterLink class="link" to = "/">Home </RouterLink></li>
      <li><RouterLink class="link" to = "/movies">Movies </RouterLink></li>
      <li><RouterLink class="link" to = "/basics">VUE BASICS </RouterLink></li>

    </ul>
  </nav>
</template>

<style>
.header {
  background-color: coral;
  color: rgb(4, 57, 31);
  padding: 20px;

  .header-title {
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

    .link {
      color: rgb(17, 209, 168);
      text-decoration: none;
    }
  }

}

</style>
