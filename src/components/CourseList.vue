<script setup>
import { useCourseStore } from '@/stores/course';
import { onMounted } from 'vue';
import CourseCard from '../components/CourseCard.vue';

const courseStore = useCourseStore();

onMounted(() => {
console.log("Course List on mounted at DOM");
courseStore.getCourses();
});

</script>

<template>
  <h3>Courses List</h3>
  <ul>
    <li v-for="course in courseStore.courses" :key="course.course">
      <CourseCard :course="course"/>
    </li>
  </ul>

</template>


<style></style>
