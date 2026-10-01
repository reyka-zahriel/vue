import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/pages/LandingPage.vue'
import ProductPage from '../components/pages/ProductPage.vue'
import AboutPage from '../components/pages/AboutPage.vue'
import KontakPage from '../components/pages/KontakPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/landing' },
    { path: '/landing', component: LandingPage },
    { path: '/product', component: ProductPage },
    { path: '/about', component: AboutPage },
    { path: '/kontak', component: KontakPage },
  ],
})

export default router