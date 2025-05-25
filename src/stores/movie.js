import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([
    {
      id: 1,
      title: 'The Lord of the Rings',
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/One_ring.png',
      duration: 300,
      hasAnyOscar: true,
      alt: 'Picture of ring',
    },
    {
      id: 2,
      title: 'Star Wars',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png',
      duration: 120,
      hasAnyOscar: true,
      alt: 'Picture of letters',
    },
    {
      id: 3,
      title: 'Dune',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Dune_2021_logo.png',
      duration: 200,
      hasAnyOscar: false,
      alt: 'Picture of letters',
    },
  ])

  console.log('movies es ref:', movies)
  console.log('movies.value:', movies.value)

  function addNewMovie(newMovie) {
      movies.value.push(newMovie) //enviamos una copia del obj
  }

  function deleteMovie(id) {
  const movieIndex = movies.value.findIndex(movie => movie.id === id);
  if (movieIndex > -1) {
    movies.value.splice(movieIndex, 1);
  }
}
  return { movies,
    addNewMovie,
    deleteMovie
   }
})
