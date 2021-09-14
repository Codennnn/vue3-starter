import './styles/tailwind.css'
import 'element-plus/dist/index.css'
import './styles/element-variables.scss'
import './styles/global.scss'
import '@icon-park/vue-next/styles/index.css'
import '@/utils/scrollbar'

import { createApp } from 'vue'

import store from '@/store'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))
