<script setup>
import ChildComponent from './childComponent.vue';

const message = "Otro mensaje desde el padre";
 function displayAlert(msg) {
  alert(msg);

 }
</script>

<template>

<section class="parent">
  <h3>estes es el componente parent</h3>

  <div class="child">
    <ChildComponent title="Texto desde el padre"
    @send-message="displayAlert"/>
  </div>

  <div class="child">
     <ChildComponent :title="message" @send-message="displayAlert">
      <p>HTML inyectado desde el padre</p>
     </ChildComponent>
  <!--esto es lo que se debe hacer dos punto y variable -->
  </div>
  
</section>

</template>

<style>
.parent {
  padding: 20px;
  margin: 10px;
  border: 2px solid greenyellow;

}
.child {
  padding: 10px;
  margin: 10px;
  border: 2px dashed darkorange; /*dashed es puntedado*/

}
</style>
