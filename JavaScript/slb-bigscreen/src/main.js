import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App)
.use(DataVVue3)
.use(router)
.use(ElementPlus)
.mount('#app')
