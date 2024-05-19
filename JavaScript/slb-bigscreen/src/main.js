import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import router from './router/index.js'

createApp(App)
.use(DataVVue3)
.use(router)
.mount('#app')
