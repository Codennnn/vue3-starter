import './index.css'

import { createApp } from 'vue'

import App from './App.vue'
import router, { setupRouter } from './router'

const app = createApp(App)

setupRouter(app)
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))
