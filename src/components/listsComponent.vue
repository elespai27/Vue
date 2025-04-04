<script setup>
const names = ['Jose', 'Anna', 'Carlos']
const products = [
  {
    id: 1,
    name: 'Ordenador',
    price: 1000,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Teclado',
    price: 50,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Ratón',
    price: 50,
    isAvailable: false,
  },
]
</script>

<template>
  <ul>
    <!-- por cada name dentro de names,
    hay un identificador único que es el index
    que será nuestra llave-->
    <li v-for="(name, index) in names" :key="index">{{ index }} {{ name }}</li>
  </ul>

  <ul class="product-list">
    <li class="product-item"  v-for="product in products" :key="product.id">
      <!-- <div v-if="product.isAvailable"> -->
        <div :class="{notAvailable: !product.isAvailable}">
        <h2>{{ product.name }}</h2>
        <h3 class="price">{{ product.price }} €</h3>
      </div>
      <!-- </div> -->
    </li>
  </ul>
</template>

<style>
.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap; /*si no cabe en la pantalla, se pone abajo*/
  gap: 20px;

  .notAvailable {
    .price {
      text-decoration: line-through;
    }
  }

  .product-item {
    background-color: aqua;
    padding: 20px;
    width: 150px;
  }
  .product-item:hover {
    /* si el ratón pasa por encima*/
    background-color: crimson;
    cursor: pointer;
  }
}
</style>
