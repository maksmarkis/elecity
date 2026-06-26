<template>
  <div class="delivery-page">
    <TheHeader />
    <TheTopBar />
    <MainNav />

    <div class="delivery-shadow"></div>
    <div class="delivery-breadcrumbs">
      <div class="breadcrumbs-inner">
        <a href="/">Главная</a> / <span>Доставка</span>
      </div>
    </div>

    <div class="delivery-container">
      <h1 class="delivery-heading">Доставка</h1>

      <div class="delivery-content">
        <div class="delivery-block">
          <h2>🚚 Доставка курьером</h2>
          <p>Мы доставляем заказы по Москве и всей России. Курьерская доставка осуществляется ежедневно с 10:00 до 22:00.</p>
          <ul>
            <li>По Москве — от 1 дня, 350 ₽</li>
            <li>По Московской области — от 1-2 дней, от 500 ₽</li>
            <li>По России — от 3-7 дней, от 700 ₽</li>
          </ul>
        </div>

        <div class="delivery-block">
          <h2>📦 Самовывоз</h2>
          <p>Вы можете забрать заказ самостоятельно из нашего пункта выдачи по адресу:</p>
          <p>📍 Москва, пр-д Соловьиный д. 2, ком. 1</p>
          <p>🕐 Ежедневно с 9:00 до 22:00</p>
          <p>Самовывоз доступен на следующий день после оформления заказа.</p>
        </div>

        <div class="delivery-block">
          <h2>💳 Оплата</h2>
          <ul>
            <li>Оплата онлайн на сайте</li>
            <li>Оплата картой при получении</li>
            <li>Оплата наличными при получении</li>
          </ul>
        </div>

        <div class="delivery-block">
          <h2>🔄 Возврат и обмен</h2>
          <p>Вы можете вернуть или обменять товар в течение 14 дней с момента покупки при сохранении товарного вида и упаковки.</p>
          <p>Для возврата свяжитесь с нами по телефону <a href="tel:+74951509555">+7(495)150-95-55</a> или напишите на почту.</p>
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
.delivery-page { background: #f5f7fa; min-height: 100vh; }

.delivery-shadow { height: 4px; background: linear-gradient(rgba(0,0,0,0.08), transparent); }

.delivery-breadcrumbs {
  background: white; padding: 12px 0; border-bottom: 1px solid #e8edf3;
}
.breadcrumbs-inner {
  max-width: 1400px; margin: 0 auto; padding: 0 20px; font-size: 13px; color: #999;
}
.breadcrumbs-inner a { color: #999; text-decoration: none; }
.breadcrumbs-inner span { color: #1a2634; }

.delivery-container { max-width: 800px; margin: 0 auto; padding: 30px 20px; }
.delivery-heading { font-size: 28px; font-weight: 700; color: #1a2634; margin: 0 0 30px; }

.delivery-block {
  background: white; padding: 24px; border-radius: 12px; margin-bottom: 20px;
  border: 1px solid #e8edf3;
}
.delivery-block h2 { font-size: 20px; font-weight: 600; margin: 0 0 12px; color: #1a2634; }
.delivery-block p { font-size: 15px; color: #555; line-height: 1.6; margin: 0 0 8px; }
.delivery-block ul { list-style: none; padding: 0; margin: 0; }
.delivery-block li { font-size: 15px; color: #555; padding: 6px 0; }
.delivery-block a { color: #437FC8; text-decoration: none; }

/* Tablet */
@media (max-width: 768px) {
  .delivery-container { padding: 20px 16px; }
  .delivery-heading { font-size: 22px; }
  .delivery-block h2 { font-size: 18px; }
}

/* Mobile */
@media (max-width: 480px) {
  .delivery-container { padding: 16px 10px; }
  .delivery-heading { font-size: 20px; }
  .delivery-block { padding: 16px; }
  .delivery-block h2 { font-size: 16px; }
  .delivery-block p, .delivery-block li { font-size: 14px; }
}
</style>