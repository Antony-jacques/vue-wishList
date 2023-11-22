import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleWish from '../views/SingleWish.vue'
import AddWish from '../views/AddWish.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wish/:id',
      name: 'singleWish',
      component: SingleWish
    },
    {
      path: '/addwish',
      name: 'addWish',
      component: AddWish
    }
  ]
})

export default router
