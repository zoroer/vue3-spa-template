import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/demo/home.vue')
    },
    {
      path: '/axiosDemo',
      name: 'axios',
      component: () => import('@views/demo/axiosDemo.vue')
    },
    {
      path: '/piniaDemo',
      name: 'pinia',
      component: () => import('@views/demo/piniaDemo.vue')
    }
  ]
})

export default router
