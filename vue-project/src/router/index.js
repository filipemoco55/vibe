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
import MerchAdminView from '@/views/MerchAdminView.vue';
import ShopView from '@/views/ProductDetail.vue';
import ProfileView from '@/views/ProfileView.vue';
import EventAdminView from '@/views/EventAdminView.vue';
import ArtistAdminView from '@/views/ArtistAdminView.vue';
import CartView from '@/views/CartView.vue';


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
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
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
      path: '/shop/:id',
      name: 'ProductDetail',
      component: ShopView,
      props: true,
      meta: {
        requiresAuth: true
      }
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
      path: '/cart',
      name: 'Cart',
      component: CartView,
  },
  
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/users/admin',
      name: 'UsersAdmin',
      component: UsersAdminView,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/tickets/admin',
      name: 'TicketsAdmin',
      component: TicketsAdminView,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/merch/admin',
      name: 'MerchAdmin',
      component: MerchAdminView,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/event/admin',
      name: 'EventAdmin',
      component: EventAdminView,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/artist/admin',
      name: 'ArtistAdmin',
      component: ArtistAdminView,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: "/login", query: { from: to.path } });
  } else {
    next()
  }

});

export default router


