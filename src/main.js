
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 引入图片懒加载插件
import lazyPlugin from '@/directives/index'
app.use(lazyPlugin);


