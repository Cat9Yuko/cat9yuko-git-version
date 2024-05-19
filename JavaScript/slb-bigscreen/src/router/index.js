import { createWebHistory,createRouter } from "vue-router";

import bigScreen from '@/views/bigScreen.vue'
import secondBigScreen from '@/views/secondBigScreen.vue'

const routes = [
    {path: '/', component: bigScreen},
    {path: '/2', component: secondBigScreen},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router