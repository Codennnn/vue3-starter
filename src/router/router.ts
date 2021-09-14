import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/',
    meta: { title: 'xxx', icon: 'monitor', openKey: 'dashboard' },
    component: MainLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/Product.vue'),
      },
      {
        path: 'car-policy',
        name: 'CarPolicy',
        component: () => import('@/views/CarPolicy.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
