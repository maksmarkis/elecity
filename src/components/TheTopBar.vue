<template>
  <div class="topbar">
    <div class="topbar-inner">
      <!-- ЛОГО -->
      <div class="logo">
        <img src="/images/logo.png" alt="ELECITY" />
      </div>

      <!-- Верхние категории -->
      <div class="top-categories">
        <a href="#">Техника</a>
        <a href="#">Мебель</a>
        <a href="#">Инструменты</a>
      </div>

      <!-- ПОИСК -->
      <div class="search">
        <input type="text" placeholder="Что будем искать?" />
        <button class="search-btn">
          <img src="./icons/search.png" alt="Поиск" />
        </button>
      </div>

      <!-- КОНТАКТЫ -->
      <div class="contacts">
        <div class="social">
          <img src="/images/viber.png" alt="viber" />
          <img src="/images/tg.png" alt="tg" />
        </div>
        <div class="phone-block">
          <a href="tel:+74951509555" class="phone">+7(495)150-95-55</a>
          <span class="time">9:00 - 22:00 без выходных</span>
        </div>
      </div>

      <!-- Иконка личного кабинета (планшет) -->
      <img src="./icons/login-heder.png" alt="login" class="personal-icon" />

      <!-- КОРЗИНА -->
      <router-link to="/cart" class="cart">
        <div class="cart-wrapper">
          <img src="/images/shopping-logo.png" alt="Корзина" class="cart-icon" />
          <div class="cart-info">
            <span class="cart-text">Корзина</span>
            <span class="price">{{ totalPrice > 0 ? totalPrice.toLocaleString() + ' ₽' : '0 ₽' }}</span>
          </div>
          <span v-if="totalItems > 0" class="cart-count">{{ totalItems }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../stores/cart'
const { totalItems, totalPrice } = useCart()
</script>

<style scoped>
.topbar {
  background: white;
  padding: 16px 0;
}

.topbar-inner {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 240px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo img {
  width: 200px;
  height: auto;
}

.top-categories {
  display: flex;
  gap: 30px;
  font-size: 16px;
  font-weight: 500;
}

.top-categories a {
  color: #1a2634;
  text-decoration: none;
  white-space: nowrap;
}

/* ПОИСК */
.search {
  flex: 1;
  max-width: 400px;
  position: relative;
}

.search input {
  width: 400px;
  height: 44px;
  padding: 0 0 0 18px;
  border: 1px solid #d0d7e0;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
}

.search-btn {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.search-btn img {
  width: 18px;
  height: 18px;
}

/* Контакты */
.contacts {
  display: flex;
  align-items: center;
  gap: 14px;
}

.social {
  display: flex;
  align-items: center;
}

.social img {
  width: 26px;
  height: 26px;
  margin-left: 20px;
}

.phone-block {
  display: flex;
  flex-direction: column;
  margin-left: 55px;
}

.phone {
  font-weight: 700;
  font-size: 16px;
  color: #1a2634;
  text-decoration: none;
}

.time {
  font-size: 12px;
  color: #666;
}

/* Корзина */
.cart {
  cursor: pointer;
  margin-left: 30px;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.cart-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.cart-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.1;
}

.cart-text {
  font-size: 14px;
}

.price {
  color: #e53935;
  font-weight: 700;
  font-size: 15px;
}

.cart-count {
  position: absolute;
  top: -8px;
  left: 18px;
  background: #e53935;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* Иконка личного кабинета */
.personal-icon {
  display: none;
  width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
}

/* Адаптив */
@media (max-width: 1300px) {
  .topbar-inner { gap: 16px; }
  .search { max-width: 300px; }
}

@media (max-width: 1100px) {
  .top-categories { gap: 20px; font-size: 15px; }
}

/* Tablet 768 */
@media (max-width: 768px) {
  .topbar {
    padding: 12px 0;
    border-bottom: 1px solid #e8edf3;
  }

  .topbar-inner {
    padding: 0 10px;
    gap: 0;
    height: 86px;
    align-items: center;
    justify-content: flex-start;
  }

  .top-categories {
    display: none;
  }

  .contacts {
    display: none;
  }

  .cart-wrapper {
    display: flex;
  }

  .cart-info {
    display: none;
  }

  .logo {
    flex-shrink: 0;
  }

  .logo img {
    width: 200px;
    height: auto;
  }

  .search {
    flex: 0 0 363px;
    max-width: 353px;
    margin-left: 42px;
  }

  .search input {
    width: 100%;
    height: 42px;
  }

  .personal-icon {
    display: block;
    margin-left: auto;
    width: 28px;
    height: 28px;
  }

  .cart {
    margin-left: 22px;
    margin-right: 10px;
  }

  .cart-icon {
    width: 28px;
    height: 28px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .topbar {
    display: none !important;
  }
}
</style>