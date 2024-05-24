import { createWebHistory,createRouter,createWebHashHistory } from "vue-router";

import bigScreen from '@/views/bigScreen.vue'
import secondBigScreen from '@/views/secondBigScreen.vue'

const routes = [
    {path: '/', component: bigScreen},
    {path: '/scr2', component: secondBigScreen},
]

const router = createRouter({
    history: createWebHashHistory('/dist/'),
    routes
})

export default router