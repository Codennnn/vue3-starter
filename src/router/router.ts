import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'

const routes = [
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
        meta: { title: '统计面板', openKey: 'dashboard' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
