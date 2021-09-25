import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/profile/Profile');
const Category = () => import('../views/category/Category');
const Detail = () => import('../views/detail/Detail');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail',
    component: Detail
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;