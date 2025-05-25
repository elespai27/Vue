<script setup></script>

<template>
  <header id="header">
  <h1 class="title">Hola a todos</h1>
  <nav>
    <ul class="nav-list">
      <li><RouterLink class="link" to="/">Home </RouterLink></li>
      <li><RouterLink class="link" to="/movies">Movies </RouterLink></li>
      <li><RouterLink class="link" to="/basics">Vue Basics </RouterLink></li>
      <li><RouterLink class="link" to="/courses">Courses </RouterLink></li>
    </ul>
  </nav>
  </header>
</template>

<style>
#header {
  background-color: rgb(68, 0, 255);
  color: rgb(17, 209, 168);
  padding: 20px;

  .title {
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
