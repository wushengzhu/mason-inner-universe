import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login/index.vue';
import Register from '@/views/Register/index.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  // 可以继续添加更多路由配置
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
