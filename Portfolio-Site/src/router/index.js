import { createRouter, createWebHistory } from 'vue-router'
import ContactCard from '../components/ContactCard.vue';
import ThankYouCard from '../components/ThankYouCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContactCard
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouCard
    }
  ]
})

export default router
