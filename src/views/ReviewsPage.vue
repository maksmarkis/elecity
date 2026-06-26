<template>
  <div class="reviews-page">
    <TheHeader />
    <TheTopBar />
    <MainNav />

    <div class="reviews-shadow"></div>
    <div class="reviews-breadcrumbs">
      <div class="breadcrumbs-inner">
        <a href="/">Главная</a> / <span>Отзывы</span>
      </div>
    </div>

    <div class="reviews-container">
      <h1 class="reviews-heading">Отзывы</h1>

      <!-- Форма добавления -->
      <div class="review-form">
        <h3>Оставить отзыв</h3>
        <div class="form-grid">
          <input type="text" placeholder="Имя" v-model="newReview.name" />
          <input type="email" placeholder="Email" v-model="newReview.email" />
        </div>
        <textarea placeholder="Ваш отзыв..." v-model="newReview.text"></textarea>
        <div class="form-bottom">
          <div class="rating-input">
            <span>Оценка:</span>
            <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= newReview.rating }" @click="newReview.rating = s">★</span>
          </div>
          <button @click="addReview">Отправить</button>
        </div>
      </div>

      <!-- Список отзывов -->
      <div class="reviews-list">
        <div v-for="(review, i) in reviews" :key="i" class="review-card">
          <div class="review-header">
            <span class="review-name">{{ review.name }}</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
          <div class="review-stars">
            <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= review.rating }">★</span>
          </div>
          <p class="review-text">{{ review.text }}</p>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import TheTopBar from '../components/TheTopBar.vue'
import MainNav from '../components/MainNav.vue'
import TheFooter from '../components/TheFooter.vue'

const newReview = ref({ name: '', email: '', text: '', rating: 5 })

const reviews = ref([
  { name: 'Анна', date: '12.03.2024', rating: 5, text: 'Отличный магазин! Заказала стиральную машину — доставили на следующий день. Установили бесплатно. Очень довольна!' },
  { name: 'Сергей', date: '10.03.2024', rating: 4, text: 'Хороший выбор техники. Цены адекватные. Доставка быстрая, но курьер немного опоздал.' },
  { name: 'Елена', date: '05.03.2024', rating: 5, text: 'Покупала холодильник. Консультант помог с выбором, всё объяснил. Техника работает отлично!' },
  { name: 'Дмитрий', date: '01.03.2024', rating: 3, text: 'Нормально. Техника пришла в срок, но коробка была немного помята. К счастью, внутри всё целое.' },
  { name: 'Ольга', date: '25.02.2024', rating: 5, text: 'Лучший магазин бытовой техники! Уже третья покупка — всё на высшем уровне. Рекомендую!' }
])

function addReview() {
  if (!newReview.value.name || !newReview.value.text) return
  reviews.value.unshift({
    name: newReview.value.name,
    date: new Date().toLocaleDateString('ru-RU'),
    rating: newReview.value.rating,
    text: newReview.value.text
  })
  newReview.value = { name: '', email: '', text: '', rating: 5 }
}
</script>

<style scoped>
.reviews-page { background: #f5f7fa; min-height: 100vh; }

.reviews-shadow { height: 4px; background: linear-gradient(rgba(0,0,0,0.08), transparent); }

.reviews-breadcrumbs {
  background: white; padding: 12px 0; border-bottom: 1px solid #e8edf3;
}
.breadcrumbs-inner {
  max-width: 1400px; margin: 0 auto; padding: 0 20px; font-size: 13px; color: #999;
}
.breadcrumbs-inner a { color: #999; text-decoration: none; }
.breadcrumbs-inner span { color: #1a2634; }

.reviews-container { max-width: 800px; margin: 0 auto; padding: 30px 20px; }
.reviews-heading { font-size: 28px; font-weight: 700; color: #1a2634; margin: 0 0 24px; }

/* Форма */
.review-form {
  background: white; padding: 24px; border-radius: 12px; margin-bottom: 30px;
  border: 1px solid #e8edf3;
}
.review-form h3 { font-size: 18px; font-weight: 600; margin: 0 0 16px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.form-grid input, .review-form textarea {
  padding: 12px 16px; border: 1px solid #d0d7e0; border-radius: 8px;
  font-size: 14px; outline: none; width: 100%; box-sizing: border-box;
}
.review-form textarea { height: 100px; resize: vertical; }
.form-bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; }
.rating-input { display: flex; align-items: center; gap: 6px; font-size: 14px; }
.star { font-size: 22px; color: #d0d7e0; cursor: pointer; }
.star.filled { color: #ffa000; }
.form-bottom button {
  padding: 10px 24px; background: #437FC8; color: white; border: none;
  border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer;
}

/* Отзывы */
.reviews-list { display: flex; flex-direction: column; gap: 16px; }
.review-card {
  background: white; padding: 20px; border-radius: 12px; border: 1px solid #e8edf3;
}
.review-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
.review-name { font-weight: 600; font-size: 15px; }
.review-date { font-size: 12px; color: #999; }
.review-stars { margin-bottom: 8px; }
.review-stars .star { font-size: 16px; cursor: default; }
.review-text { font-size: 14px; color: #555; line-height: 1.5; margin: 0; }

/* Tablet */
@media (max-width: 768px) {
  .reviews-container { padding: 20px 16px; }
  .reviews-heading { font-size: 22px; }
  .form-grid { grid-template-columns: 1fr; }
  .form-bottom { flex-direction: column; gap: 12px; align-items: flex-start; }
}

/* Mobile */
@media (max-width: 480px) {
  .reviews-container { padding: 16px 10px; }
  .reviews-heading { font-size: 20px; }
  .review-form { padding: 16px; }
  .review-card { padding: 14px; }
}
</style>