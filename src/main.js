
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'

import App from './App.vue'
import router from './router'

import test from '@/apis/testApI';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

test();
