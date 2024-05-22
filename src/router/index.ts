import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: () => import('../layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: () => import('../views/DetailView.vue'),
                },
                {
                    path: 'my-account',
                    name: 'my-account',
                    component: () => import('../views/MyAccountView.vue'),
                },
                {
                    path: 'search/:query',
                    name: 'search',
                    component: () => import('../views/SearchView.vue'),
                },
                {
                    path: 'my-course',
                    name: 'my-course',
                    component: () => import('../views/MyCourseView.vue'),
                },
            ],
        },
    ],
})

export default router
