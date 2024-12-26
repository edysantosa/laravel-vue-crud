import { createRouter, createWebHistory } from 'vue-router';

import productIndex from '../components/products/Index.vue';
import notFound from '../components/NotFound.vue';
import coba from '../components/Coba.vue';

const routes = [
    {
        path: '/',
        name: 'products.index',
        component: productIndex
    },
    {
        path: '/coba',
        component: coba
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
