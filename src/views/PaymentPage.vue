<template>
  <div class="payment-page">
    <TheHeader />
    <TheTopBar />
    <MainNav />

    <div class="payment-shadow"></div>
    <div class="payment-breadcrumbs">
      <div class="breadcrumbs-inner">
        <a href="/">Главная</a> / <span>Оплата</span>
      </div>
    </div>

    <div class="payment-container">
      <h1 class="payment-heading">Оплата</h1>

      <div class="payment-content">
        <div class="payment-block">
          <h2>💳 Способы оплаты</h2>
          <p>Мы предлагаем несколько удобных способов оплаты вашего заказа:</p>
        </div>

        <div class="payment-methods">
          <div class="payment-method">
            <h3>Оплата онлайн</h3>
            <p>Оплатите заказ банковской картой прямо на сайте. Принимаем карты Visa, Mastercard, МИР. Все платежи защищены.</p>
          </div>

          <div class="payment-method">
            <h3>Оплата при получении картой</h3>
            <p>Оплатите заказ банковской картой курьеру при получении. Терминал всегда с собой.</p>
          </div>

          <div class="payment-method">
            <h3>Оплата наличными</h3>
            <p>Оплатите заказ наличными курьеру при доставке или в пункте самовывоза.</p>
          </div>
        </div>

        <div class="payment-block">
          <h2>🔒 Безопасность платежей</h2>
          <p>Все онлайн-платежи проходят через защищённое соединение. Мы не храним данные ваших банковских карт. Конфиденциальность гарантирована.</p>
        </div>

        <div class="payment-block">
          <h2>📄 Реквизиты</h2>
          <p>ООО "БТ МАРКЕТ"</p>
          <p>ИНН: 7728483067</p>
          <p>Юридический адрес: Москва, пр-д Соловьиный д. 2, ком. 1</p>
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
.payment-page { background: #f5f7fa; min-height: 100vh; }

.payment-shadow { height: 4px; background: linear-gradient(rgba(0,0,0,0.08), transparent); }

.payment-breadcrumbs {
  background: white; padding: 12px 0; border-bottom: 1px solid #e8edf3;
}
.breadcrumbs-inner {
  max-width: 1400px; margin: 0 auto; padding: 0 20px; font-size: 13px; color: #999;
}
.breadcrumbs-inner a { color: #999; text-decoration: none; }
.breadcrumbs-inner span { color: #1a2634; }

.payment-container { max-width: 800px; margin: 0 auto; padding: 30px 20px; }
.payment-heading { font-size: 28px; font-weight: 700; color: #1a2634; margin: 0 0 30px; }

.payment-block {
  background: white; padding: 24px; border-radius: 12px; margin-bottom: 20px;
  border: 1px solid #e8edf3;
}
.payment-block h2 { font-size: 20px; font-weight: 600; margin: 0 0 12px; color: #1a2634; }
.payment-block p { font-size: 15px; color: #555; line-height: 1.6; margin: 0 0 6px; }

.payment-methods { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
.payment-method {
  background: white; padding: 20px; border-radius: 12px; border: 1px solid #e8edf3;
}
.payment-method h3 { font-size: 16px; font-weight: 600; margin: 0 0 8px; color: #1a2634; }
.payment-method p { font-size: 14px; color: #555; line-height: 1.5; margin: 0; }

/* Tablet */
@media (max-width: 768px) {
  .payment-container { padding: 20px 16px; }
  .payment-heading { font-size: 22px; }
  .payment-methods { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 480px) {
  .payment-container { padding: 16px 10px; }
  .payment-heading { font-size: 20px; }
  .payment-block { padding: 16px; }
  .payment-block h2 { font-size: 18px; }
}
</style>