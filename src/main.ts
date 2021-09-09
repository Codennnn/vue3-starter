import './index.css'
import './styles/global.scss'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))
