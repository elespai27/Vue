import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCourseStore = defineStore('course', () => {
  const API_URL = 'http://localhost:8080/api/courses'
  const courses = ref([])

  async function getCourses() {
    const response = await fetch(API_URL)
    //hacer peticiones con Fetch de manera asyncronas
    const data = await response.json()
    //transforma en una array de objetos
    courses.value = data
  }

  async function addCourses(newCourse) {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      })

      getCourses()
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteCourse(course) {
    await fetch(`${API_URL}/${course}`, {
      method: "DELETE",
    });

    getCourses()
  }

  return {
    courses,
    getCourses,
    addCourses,
    deleteCourse
  }
})
