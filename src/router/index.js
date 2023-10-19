import { createRouter, createWebHistory } from 'vue-router'
import CharactersDetails from '../views/CharactersDetail.vue'
import Characters from '../views/Characters.vue'
import Home from '../views/Home.vue'
import Comics from '../views/Comics.vue'
import Contat from '../views/Contact.vue'
import Events from '../views/Events.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/characters/:id',
      name: 'charactersDetails',
      component: CharactersDetails
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contat
    },
    {
      path: '/comics',
      name: 'comics',
      component: Comics
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
