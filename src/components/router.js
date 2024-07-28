import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Test from './components/Test.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/test/:id', component: Test }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
