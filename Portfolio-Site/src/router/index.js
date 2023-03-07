import { createRouter, createWebHistory } from 'vue-router'
import ContactCard from '../components/ContactCard.vue';
import ThankYouCard from '../components/ThankYouCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/portfolio-site/',
      name: 'home',
      component: ContactCard
    },
    {
      path: '/portfolio-site/thank-you',
      name: 'thank-you',
      component: ThankYouCard
    }
  ]
})

export default router
