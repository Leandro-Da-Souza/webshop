import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from '../components/Products';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Products',
        component: Products,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
