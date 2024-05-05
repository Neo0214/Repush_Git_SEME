import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../components/mainView.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'mainView',
            component: () => import('../components/mainView.vue')
        },
        {
            path: '/personal',
            component: () => import('../components/personal.vue')
        },

    ]
})
export default router;