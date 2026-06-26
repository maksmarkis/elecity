<template>
  <div class="about-page">
    <TheHeader />
    <TheTopBar />
    <MainNav />

    <div class="about-shadow"></div>
    <div class="about-breadcrumbs">
      <div class="breadcrumbs-inner">
        <a href="/">Главная</a> / <span>О нас</span>
      </div>
    </div>

    <div class="about-container">
      <h1 class="about-heading">О нас</h1>

      <div class="about-content">
        <div class="about-block">
          <h2>Кто мы</h2>
          <p>ELECITY — это современный интернет-магазин бытовой техники и электроники. Мы работаем с 2011 года и за это время помогли тысячам клиентов обустроить свой дом качественной техникой по доступным ценам.</p>
        </div>

        <div class="about-block">
          <h2>Наша миссия</h2>
          <p>Мы стремимся сделать покупку бытовой техники максимально удобной и выгодной. Наша цель — предложить лучший сервис, широкий ассортимент и профессиональные консультации каждому клиенту.</p>
        </div>

        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-num">13</span>
            <span class="stat-label">лет работы</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">50 000+</span>
            <span class="stat-label">довольных клиентов</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">10 000+</span>
            <span class="stat-label">товаров в каталоге</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">24/7</span>
            <span class="stat-label">поддержка</span>
          </div>
        </div>

        <div class="about-block">
          <h2>Почему выбирают нас</h2>
          <ul>
            <li>✅ Официальная гарантия на всю технику</li>
            <li>✅ Быстрая доставка по всей России</li>
            <li>✅ Профессиональная установка и настройка</li>
            <li>✅ Выгодные акции и скидки</li>
            <li>✅ Удобный возврат и обмен</li>
          </ul>
        </div>

        <div class="about-block">
          <h2>Наши контакты</h2>
          <p>📍 Москва, пр-д Соловьиный д. 2, ком. 1</p>
          <p>📞 <a href="tel:+74951509555">+7(495)150-95-55</a></p>
          <p>🕐 9:00 - 22:00 без выходных</p>
          <p>📧 info@elecity.ru</p>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheTopBar from '../components/TheTopBar.vue'
import MainNav from '../components/MainNav.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<style scoped>
.about-page { background: #f5f7fa; min-height: 100vh; }

.about-shadow { height: 4px; background: linear-gradient(rgba(0,0,0,0.08), transparent); }

.about-breadcrumbs {
  background: white; padding: 12px 0; border-bottom: 1px solid #e8edf3;
}
.breadcrumbs-inner {
  max-width: 1400px; margin: 0 auto; padding: 0 20px; font-size: 13px; color: #999;
}
.breadcrumbs-inner a { color: #999; text-decoration: none; }
.breadcrumbs-inner span { color: #1a2634; }

.about-container { max-width: 800px; margin: 0 auto; padding: 30px 20px; }
.about-heading { font-size: 28px; font-weight: 700; color: #1a2634; margin: 0 0 30px; }

.about-block {
  background: white; padding: 24px; border-radius: 12px; margin-bottom: 20px;
  border: 1px solid #e8edf3;
}
.about-block h2 { font-size: 20px; font-weight: 600; margin: 0 0 12px; color: #1a2634; }
.about-block p { font-size: 15px; color: #555; line-height: 1.6; margin: 0 0 8px; }
.about-block ul { list-style: none; padding: 0; margin: 0; }
.about-block li { font-size: 15px; color: #555; padding: 6px 0; }
.about-block a { color: #437FC8; text-decoration: none; }

.about-stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 20px;
}
.stat-item {
  background: white; padding: 24px 16px; border-radius: 12px; text-align: center;
  border: 1px solid #e8edf3;
}
.stat-num { display: block; font-size: 28px; font-weight: 700; color: #437FC8; margin-bottom: 6px; }
.stat-label { font-size: 13px; color: #999; }

/* Tablet */
@media (max-width: 768px) {
  .about-container { padding: 20px 16px; }
  .about-heading { font-size: 22px; }
  .about-stats { grid-template-columns: repeat(2, 1fr); }
  .stat-num { font-size: 24px; }
}

/* Mobile */
@media (max-width: 480px) {
  .about-container { padding: 16px 10px; }
  .about-heading { font-size: 20px; }
  .about-block { padding: 16px; }
  .about-block h2 { font-size: 18px; }
  .about-stats { grid-template-columns: 1fr 1fr; gap: 10px; }
  .stat-num { font-size: 22px; }
  .stat-label { font-size: 12px; }
}
</style>