import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import Test from '../components/Test.vue';

const routes = [
   { path: '/HelloWorld', component: HelloWorld },
   { path: '/Test', component: Test }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;