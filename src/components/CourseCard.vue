<script setup>
import { useCourseStore } from '@/stores/course';

defineProps({
  course: Object
})

const courseStore = useCourseStore();
</script>

<template>
  <article>
    <h4>{{ course.course }}</h4>
    <p>{{ course.hours }} horas</p>
    <p>Clase: {{ course.classroom }}</p>
    <p>Profesor: {{ course.teacher.teacher }}</p>
    <button @click="courseStore.deleteCourse(course.course)">Borrar</button>
  </article>

</template>

<style>

</style>
