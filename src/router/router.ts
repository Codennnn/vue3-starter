import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  // createRouterGuards(router)
}
