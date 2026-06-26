<template>
  <div class="page">
    <TheHeader /><TheTopBar /><MainNav />
    <div class="shadow"></div>
    <div class="breadcrumbs"><div class="breadcrumbs-inner"><a href="/">Главная</a> / <span>Наши гарантии</span></div></div>
    <div class="container">
      <h1>Наши гарантии</h1>
      <div class="block"><h2>✅ Официальная гарантия</h2><p>Вся техника имеет официальную гарантию производителя от 1 года до 5 лет.</p></div>
      <div class="block"><h2>🔄 Возврат и обмен</h2><p>14 дней на возврат или обмен товара без объяснения причин.</p></div>
      <div class="block"><h2>🔧 Сервисные центры</h2><p>Более 50 авторизованных сервисных центров по всей России.</p></div>
      <div class="block"><h2>📞 Поддержка 24/7</h2><p>Наша служба поддержки работает круглосуточно. Звоните: +7(495)150-95-55</p></div>
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