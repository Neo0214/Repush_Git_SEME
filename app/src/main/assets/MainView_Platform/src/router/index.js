import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/2048',
            name: '2048',
            component: () => import('../../../2048/index.html')
        },
        {
            path: '/plane',
            name: 'plane',
            component: () => import('../../../plane/index1.html')
        },

    ]
})
export default router;