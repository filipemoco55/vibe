import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PosterView from '../views/PosterView.vue';
import StoreView from '@/views/StoreView.vue';
import MusicView from '@/views/MusicView.vue';
import MoreView from '@/views/MoreView.vue';
import PosterView2 from '@/views/PosterView2.vue';
import Posterview3 from '@/views/Posterview3.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/poster',
      name: 'Poster',
      component: PosterView,
    },
    {
      path: '/poster2',
      name: 'Poster2',
      component: PosterView2,
    },
    {
      path: '/poster3',
      name: 'Poster3',
      component: Posterview3,
    },
    {
      path: '/store',
      name: 'Store',
      component: StoreView,
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicView,
    },
    {
      path: '/more',
      name: 'More',
      component: MoreView,
    },
  ],
})


export default router


