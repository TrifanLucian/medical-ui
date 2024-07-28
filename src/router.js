import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import TestView from './components/TestView.vue';
import AddQuestions from './components/AddQuestion.vue';
import DashBoard from './components/DashBoard.vue';
import ProtectedView from './components/ProtectedView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/DashBoard', component: DashBoard },
  { path: '/protected', component: ProtectedView, meta: { requiresAuth: true } },
  { path: '/add-questions', component: AddQuestions, meta: { requiresAuth: true } },
  { path: '/test', component: TestView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
