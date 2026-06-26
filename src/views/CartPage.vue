<template>
  <div class="cart-page">
    <TheHeader />
    <TheTopBar />
    <MainNav />

    <!-- Тень и хлебные крошки -->
    <div class="cart-shadow"></div>
    <div class="cart-breadcrumbs">
      <div class="breadcrumbs-inner">
        <a href="/">Главная</a> / <span>Корзина</span>
      </div>
    </div>

    <!-- Заголовок -->
    <div class="cart-container">
      <h1 class="cart-heading">Корзина</h1>

      <!-- Карточки товаров -->
      <div class="cart-layout">
        <div class="cart-items">
          <div v-for="(item, i) in cartItems" :key="i" class="cart-item">
            <img :src="item.img" :alt="item.name" class="cart-item-img" />
            <div class="cart-item-info">
              <h3 class="cart-item-name">{{ item.name }}</h3>
              <span class="cart-item-code">Код: {{ item.code || '000-000' }}</span>
              <div class="cart-item-service">
                <span>Дополнительный сервис</span>
                <select>
                  <option>Нет</option>
                  <option>Да</option>
                </select>
              </div>
            </div>
            <div class="cart-item-quantity">
              <button @click="decrease(i)">−</button>
              <span>{{ item.quantity }}</span>
              <button @click="increase(i)">+</button>
            </div>
            <div class="cart-item-price">
              <span class="current-price">{{ item.price }}</span>
              <span class="old-price">{{ item.oldPrice || '' }}</span>
              <button class="remove-btn" @click="removeItem(i)">✕ Удалить</button>
            </div>
          </div>
        </div>

        <!-- Итого -->
        <div class="cart-summary">
          <h3>Итого</h3>
          <div class="summary-row">
            <span>Товаров ({{ totalItems }} шт)</span>
            <span>{{ totalPrice.toLocaleString() }} ₽</span>
          </div>
          <div class="summary-row">
            <span>Скидка</span>
            <span class="discount">-0 ₽</span>
          </div>
          <div class="summary-row">
            <span>Доставка</span>
            <span>Бесплатно</span>
          </div>
          <div class="summary-delivery">
            <span>Доставка</span>
            <span> Завтра, 10:00 - 18:00</span>
          </div>
          <button class="checkout-btn" @click="checkout">Оформить заказ</button>
        </div>
      </div>

      <!-- Способ доставки -->
      <div class="cart-section">
        <h2>Способ доставки</h2>
        <div class="delivery-options">
          <label class="delivery-option">
            <input type="radio" name="delivery" checked />
            <span>Доставка курьером</span>
            <input type="date" class="date-input" />
          </label>
          <label class="delivery-option">
            <input type="radio" name="delivery" />
            <span>Самовывоз</span>
            <select class="address-select">
              <option>ул. Ленина, 15</option>
              <option>ул. Пушкина, 10</option>
            </select>
            <input type="date" class="date-input" />
          </label>
        </div>
      </div>

      <!-- Способ оплаты -->
      <div class="cart-section">
        <h2>Способ оплаты</h2>
        <div class="payment-options">
          <label><input type="radio" name="payment" checked /> Оплата онлайн</label>
          <label><input type="radio" name="payment" /> Оплата при получении картой</label>
          <label><input type="radio" name="payment" /> Оплата при получении наличными</label>
        </div>
      </div>

      <!-- Контактные данные -->
      <div class="cart-section">
        <h2>Контактные данные</h2>
        <div class="contact-grid">
          <input type="tel" placeholder="Телефон" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Город" />
          <input type="text" placeholder="Адрес" />
        </div>
        <div class="extra-options">
          <label><input type="checkbox" /> Нужен подъем</label>
          <label><input type="checkbox" /> Нужна установка</label>
          <label><input type="checkbox" /> Нужна утилизация</label>
        </div>
        <textarea placeholder="Комментарий" class="comment-input"></textarea>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCart } from '../stores/cart'
import TheHeader from '../components/TheHeader.vue'
import TheTopBar from '../components/TheTopBar.vue'
import MainNav from '../components/MainNav.vue'
import TheFooter from '../components/TheFooter.vue'

const { cartItems, totalItems, totalPrice, addToCart, removeFromCart, clearCart } = useCart()

function increase(i) {
  cartItems.value[i].quantity++
}

function decrease(i) {
  if (cartItems.value[i].quantity > 1) {
    cartItems.value[i].quantity--
  } else {
    removeFromCart(cartItems.value[i].name)
  }
}

function removeItem(i) {
  removeFromCart(cartItems.value[i].name)
}
function checkout() {
  clearCart()
  alert('Заказ оформлен!')
}
</script>

<style scoped>
.cart-page { background: #f5f7fa; min-height: 100vh; }

.cart-shadow {
  height: 4px;
  background: linear-gradient(rgba(0,0,0,0.08), transparent);
}

.cart-breadcrumbs {
  background: white;
  padding: 12px 0;
  border-bottom: 1px solid #e8edf3;
}
.breadcrumbs-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 13px;
  color: #999;
}
.breadcrumbs-inner a { color: #999; text-decoration: none; }
.breadcrumbs-inner span { color: #1a2634; }

.cart-container { max-width: 1400px; margin: 0 auto; padding: 30px 20px; }

.cart-heading { font-size: 28px; font-weight: 700; color: #1a2634; margin: 0 0 24px; }

.cart-layout { display: flex; gap: 30px; margin-bottom: 40px; }
.cart-items { flex: 1; display: flex; flex-direction: column; gap: 0; }

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border-bottom: 1px solid #e8edf3;
}
.cart-item-img { width: 100px; height: 100px; object-fit: contain; border-radius: 8px; background: #f5f7fa; }
.cart-item-info { flex: 1; }
.cart-item-name { font-size: 15px; font-weight: 600; margin: 0 0 6px; }
.cart-item-code { font-size: 12px; color: #999; }
.cart-item-service { display: flex; align-items: center; gap: 10px; margin-top: 20px; font-size: 14px; }
.cart-item-service select { padding: 4px 8px; border-radius: 6px; border: 1px solid #d0d7e0; }

.cart-item-quantity { display: flex; align-items: center; gap: 12px; }
.cart-item-quantity button {
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid #d0d7e0; background: white; font-size: 18px; cursor: pointer;
}

.cart-item-price { text-align: right; }
.current-price { font-size: 18px; font-weight: 700; display: block; }
.old-price { font-size: 13px; color: #999; text-decoration: line-through; display: block; }
.remove-btn {
  background: none; border: none; color: #437FC8; font-size: 13px; cursor: pointer; margin-top: 8px;
}

/* Итого */
.cart-summary {
  width: 320px; background: white; padding: 24px; border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08); height: fit-content;
}
.cart-summary h3 { font-size: 20px; margin: 0 0 16px; }
.summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
.discount { color: #e53935; }
.summary-delivery { font-size: 13px; color: #666; margin-bottom: 16px; }
.checkout-btn {
  width: 100%; padding: 14px; background: #437FC8; color: white; border: none;
  border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer;
}

/* Секции */
.cart-section { margin-bottom: 30px; }
.cart-section h2 { font-size: 20px; font-weight: 700; margin: 0 0 16px; }

.delivery-options { display: flex; flex-direction: column; gap: 12px; }
.delivery-option {
  display: flex; align-items: center; gap: 12px; padding: 14px;
  background: white; border-radius: 8px; border: 1px solid #e8edf3;
}
.date-input { padding: 6px 10px; border: 1px solid #d0d7e0; border-radius: 6px; }
.address-select { padding: 6px 10px; border: 1px solid #d0d7e0; border-radius: 6px; }

.payment-options { display: flex; gap: 20px; flex-wrap: wrap; }
.payment-options label { font-size: 14px; display: flex; align-items: center; gap: 8px; }

.contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }
.contact-grid input {
  padding: 12px 16px; border: 1px solid #d0d7e0; border-radius: 8px; font-size: 14px; outline: none;
}

.extra-options { display: flex; gap: 20px; margin-bottom: 16px; font-size: 14px; }
.extra-options label { display: flex; align-items: center; gap: 6px; }

.comment-input {
  width: 100%; height: 80px; padding: 12px 16px;
  border: 1px solid #d0d7e0; border-radius: 8px; font-size: 14px; outline: none; resize: vertical;
}

/* Tablet 768 */
@media (max-width: 768px) {
  .cart-container { padding: 20px 16px; }
  .cart-heading { font-size: 22px; margin: 0 0 16px; }
  .cart-layout { flex-direction: column; gap: 20px; }
  .cart-summary { width: 670px}
  .cart-item { flex-wrap: wrap; gap: 12px; padding: 16px; }
  .cart-item-img { width: 80px; height: 80px; }
  .cart-item-info { flex: 1; min-width: 200px; }
  .contact-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .contact-grid input { width: 100%; box-sizing: border-box; }
  .payment-options { flex-direction: column; gap: 10px; }
  .delivery-option { flex-wrap: wrap; }
  .cart-section { max-width: 600px; }
  .cart-section h2 { font-size: 18px; margin: 0 0 12px; }
  .delivery-option { padding: 10px; font-size: 14px; }
  .payment-options label { font-size: 13px; }
  .contact-grid input { padding: 10px 14px; font-size: 13px; }
  .extra-options { gap: 12px; font-size: 13px; }
  .comment-input { height: 60px; font-size: 13px; width: 100%; box-sizing: border-box; }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .cart-container { padding: 16px 10px; }
  .cart-heading { font-size: 20px; }
  .cart-item { flex-direction: column; align-items: flex-start; }
  .cart-item-img { width: 100%; height: 180px; }
  .cart-item-info { width: 100%; }
  .cart-item-quantity { align-self: center; }
  .cart-item-price { display: flex; align-items: center; gap: 12px; width: 100%; justify-content: space-between; }
  .contact-grid { grid-template-columns: 1fr; }
  .extra-options { flex-direction: column; gap: 8px; }
  .delivery-option { flex-direction: column; align-items: flex-start; gap: 8px; }
  .breadcrumbs-inner { font-size: 12px; }
  .cart-summary { width: 100%; max-width: 280px; }
  .cart-summary h3 { font-size: 18px; margin: 0 0 12px; }
  .summary-row { font-size: 13px; margin-bottom: 8px; }
  .summary-delivery { font-size: 12px; margin-bottom: 12px; }
  .checkout-btn { padding: 12px; font-size: 14px; }
  .cart-section { margin-bottom: 20px; max-width: 100%; }
  .cart-section h2 { font-size: 16px; margin: 0 0 10px; }
  .delivery-option { padding: 8px; font-size: 13px; width: 100%; box-sizing: border-box; }
  .date-input { padding: 4px 6px; font-size: 12px; width: 100%; box-sizing: border-box; }
  .address-select { width: 100%; box-sizing: border-box; }
  .payment-options { gap: 6px; }
  .payment-options label { font-size: 12px; }
  .contact-grid input { padding: 8px 12px; font-size: 12px; width: 100%; box-sizing: border-box; }
  .extra-options { gap: 6px; font-size: 12px; }
  .comment-input { height: 50px; font-size: 12px; width: 100%; box-sizing: border-box; }
  .checkout-btn { padding: 10px; font-size: 13px; }
}
</style>