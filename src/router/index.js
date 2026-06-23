import { createRouter, createWebHistory } from 'vue-router'

// Временно убираем все маршруты, пока не начнем делать страницы
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Пока пусто, добавим позже
  ]
})

export default router