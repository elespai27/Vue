import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import MoviesView from "../views/MoviesView.vue"
import CoursesView from "../views/CoursesView.vue"
import VueBasics from "../views/VueBasics.vue"


const routes = [
{path: "/", component: HomeView},
{path: "/movies", component: MoviesView},
{path: "/basics", component: VueBasics},
{path: "/courses", component: CoursesView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
