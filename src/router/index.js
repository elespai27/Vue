import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import MoviesView from "../views/MoviesView.vue"
import Viewbasics from "../views/Viewbasics.vue"


const routes = [
{path: "/", component: HomeView},
{path: "/movies", component: MoviesView},
{path: "/basics", component: Viewbasics}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
