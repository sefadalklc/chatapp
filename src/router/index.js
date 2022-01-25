import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatOda from '../views/ChatOda.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'ChatOda',
    component: ChatOda
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
