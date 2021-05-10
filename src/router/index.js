import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Heroi from '../views/Heroi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/heroi/:name',
    name: "heroi",
    component: Heroi,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
