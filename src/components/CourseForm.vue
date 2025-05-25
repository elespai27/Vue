<script setup>
import { useCourseStore } from '@/stores/course';
import { ref } from 'vue'

const courseStore = useCourseStore();

const newCourse = ref({
  course: "",
  hours: null,
  classroom: "",
  vacations: "",
  teacher: {
    id: null,
  },
});

function handleSubmit() {
  courseStore.addCourses(newCourse.value)
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label for="course-name">Name of the Course:</label>
      <input type="text" id="course-name" v-model="newCourse.course" />
    </fieldset>
    <fieldset>
      <label for="course-hours">Hours of the Course:</label>
      <input type="number" id="course-hours" v-model="newCourse.hours" />
    </fieldset>
    <fieldset>
      <label for="course-classroom">classroom of the Course:</label>
      <input type="text" id="course-classroom" v-model="newCourse.classroom" />
    </fieldset>
    <fieldset>
      <label for="course-vacation">Vacationa of the Course:</label>
      <input type="text" id="course-vacation" v-model="newCourse.vacations" />
    </fieldset>
    <fieldset>
      <label for="course-teacher">Teacher of the Course:</label>
      <input type="text" id="course-teacher" v-model="newCourse.teacher.id" />
    </fieldset>

    <button>New Course</button>
  </form>
</template>

<style></style>
