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
            path: '/mainView',
            component: () => import('../components/mainView.vue')
        },
        {
            path: '/ranking',
            component: () => import('../components/ranking.vue')
        },
        {
            path: '/gameLibrary',
            component: () => import('../components/gameLibrary.vue')
        },
        {
            path:"/searchForMainView",
            component:()=>import('../components/searchForMainView.vue')
        },
        {
            path:"/gameDetail",
            component:()=>import('../components/gameDetail.vue')
        }
    ]
})
export default router;