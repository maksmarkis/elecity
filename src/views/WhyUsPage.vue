<template>
  <div class="page">
    <TheHeader /><TheTopBar /><MainNav />
    <div class="shadow"></div>
    <div class="breadcrumbs"><div class="breadcrumbs-inner"><a href="/">Главная</a> / <span>Почему мы?</span></div></div>
    <div class="container">
      <h1>Почему мы?</h1>
      <div class="block"><h2>🏆 13 лет на рынке</h2><p>С 2011 года мы помогаем клиентам выбирать лучшую технику.</p></div>
      <div class="block"><h2>💯 50 000+ довольных клиентов</h2><p>Нас рекомендуют друзьям и близким.</p></div>
      <div class="block"><h2>🚚 Быстрая доставка</h2><p>Доставка по Москве — на следующий день.</p></div>
      <div class="block"><h2>💰 Лучшие цены</h2><p>Нашли дешевле? Снизим цену!</p></div>
      <div class="block"><h2>⭐ Рейтинг 4.9</h2><p>Средняя оценка наших клиентов на независимых площадках.</p></div>
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
.page{background:#f5f7fa;min-height:100vh}.shadow{height:4px;background:linear-gradient(rgba(0,0,0,0.08),transparent)}.breadcrumbs{background:#fff;padding:12px 0;border-bottom:1px solid #e8edf3}.breadcrumbs-inner{max-width:1400px;margin:0 auto;padding:0 20px;font-size:13px;color:#999}.breadcrumbs-inner a{color:#999;text-decoration:none}.breadcrumbs-inner span{color:#1a2634}.container{max-width:800px;margin:0 auto;padding:30px 20px}h1{font-size:28px;font-weight:700;color:#1a2634;margin:0 0 30px}.block{background:#fff;padding:24px;border-radius:12px;margin-bottom:20px;border:1px solid #e8edf3}.block h2{font-size:20px;font-weight:600;margin:0 0 12px;color:#1a2634}.block p{font-size:15px;color:#555;line-height:1.6;margin:0 0 6px}@media(max-width:768px){.container{padding:20px 16px}h1{font-size:22px}}@media(max-width:480px){.container{padding:16px 10px}h1{font-size:20px}.block{padding:16px}.block h2{font-size:18px}}
</style>