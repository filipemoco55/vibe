import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PosterView from '../views/PosterView.vue';
import StoreView from '@/views/StoreView.vue';
import MusicView from '@/views/MusicView.vue';
import MoreView from '@/views/MoreView.vue';
import TicketsView from '@/views/TicketsView.vue';
import AdminView from '@/views/AdminView.vue';
import UsersAdminView from '@/views/UsersAdminView.vue';
import TicketsAdminView from '@/views/TicketsAdminView.vue';


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
      path: "/admin",
      name: "Admin",
      component: AdminView,
    },
    {
      path: '/poster',
      name: 'Poster',
      component: PosterView,
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
      path: '/tickets',
      name: 'Tickets',
      component: TicketsView,
    },
    {
      path: '/more',
      name: 'More',
      component: MoreView,
    },
    {
      path: '/users/admin',
      name: 'UsersAdmin',
      component: UsersAdminView,
    },
    {
      path: '/tickets/admin',
      name: 'TicketsAdmin',
      component: TicketsAdminView,
    },
  ],
})


export default router


