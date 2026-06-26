<template>
  <div class="page">
    <TheHeader /><TheTopBar /><MainNav />
    <div class="shadow"></div>
    <div class="breadcrumbs"><div class="breadcrumbs-inner"><a href="/">Главная</a> / <span>Оставить обращение</span></div></div>
    <div class="container">
      <h1>Оставить обращение</h1>
      <div class="block">
        <div class="form-grid">
          <input type="text" placeholder="Имя" v-model="name" />
          <input type="email" placeholder="Email" v-model="email" />
          <input type="tel" placeholder="Телефон" v-model="phone" />
        </div>
        <textarea placeholder="Ваше сообщение..." v-model="message"></textarea>
        <button @click="send">Отправить</button>
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
const name = ref(''), email = ref(''), phone = ref(''), message = ref('')
const send = () => { alert('Обращение отправлено!'); name.value='';email.value='';phone.value='';message.value='' }
</script>
<style scoped>
.page{background:#f5f7fa;min-height:100vh}.shadow{height:4px;background:linear-gradient(rgba(0,0,0,0.08),transparent)}.breadcrumbs{background:#fff;padding:12px 0;border-bottom:1px solid #e8edf3}.breadcrumbs-inner{max-width:1400px;margin:0 auto;padding:0 20px;font-size:13px;color:#999}.breadcrumbs-inner a{color:#999;text-decoration:none}.breadcrumbs-inner span{color:#1a2634}.container{max-width:800px;margin:0 auto;padding:30px 20px}h1{font-size:28px;font-weight:700;color:#1a2634;margin:0 0 30px}.block{background:#fff;padding:24px;border-radius:12px;border:1px solid #e8edf3}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}input,textarea{width:100%;padding:12px 16px;border:1px solid #d0d7e0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box}textarea{height:120px;resize:vertical;margin-bottom:14px}button{padding:12px 28px;background:#437FC8;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer}@media(max-width:768px){.container{padding:20px 16px}h1{font-size:22px}.form-grid{grid-template-columns:1fr}}@media(max-width:480px){.container{padding:16px 10px}h1{font-size:20px}.block{padding:16px}}
</style>