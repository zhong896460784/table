import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayOut.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: () => import('@/views/home/HomeIndex.vue')
        },
        {
          path: '/category',
          component: () => import('@/views/category/CatogeryIndex.vue')
        },
        {
          path: '/item',
          component: () => import('@/views/ItemDetail/ItemDetail.vue')
        }
      ]
    }
  ]
})

export default router
