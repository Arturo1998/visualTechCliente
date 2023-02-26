import { createRouter, createWebHistory } from 'vue-router'
import MiHome from '../views/MiHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: MiHome
    }
  ]
})

export default router
