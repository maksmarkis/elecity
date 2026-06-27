import { createRouter, createWebHashHistoryHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CartPage from '../views/CartPage.vue'
import ReviewsPage from '../views/ReviewsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import DeliveryPage from '../views/DeliveryPage.vue'
import PaymentPage from '../views/PaymentPage.vue'
import ServiceConnectionPage from '../views/ServiceConnectionPage.vue'
import ExtraServicePage from '../views/ExtraServicePage.vue'
import WarrantyPage from '../views/WarrantyPage.vue'
import WhyUsPage from '../views/WhyUsPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import FeedbackPage from '../views/FeedbackPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/reviews', name: 'Reviews', component: ReviewsPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/delivery', name: 'Delivery', component: DeliveryPage },
  { path: '/payment', name: 'Payment', component: PaymentPage },
  { path: '/service-connection', name: 'ServiceConnection', component: ServiceConnectionPage },
  { path: '/extra-service', name: 'ExtraService', component: ExtraServicePage },
  { path: '/warranty', name: 'Warranty', component: WarrantyPage },
  { path: '/why-us', name: 'WhyUs', component: WhyUsPage },
  { path: '/contacts', name: 'Contacts', component: ContactsPage },
  { path: '/feedback', name: 'Feedback', component: FeedbackPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router