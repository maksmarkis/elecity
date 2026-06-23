<template>
  <header class="main-header">
    <!-- ДЕСКТОП -->
    <div class="desktop-header">
      <div class="header-content">
        <div class="left-part">
          <img src="/geoposit-heder.png" alt="geo" class="geo-icon" />
          <span class="city">Москва ▼</span>
        </div>

        <nav class="center-menu">
          <a href="#">Отзывы</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Оплата</a>
          <a href="#">Подключение техники</a>
          <a href="#">Доп. сервис</a>
          <a href="#">Наши гарантии</a>
          <a href="#">Почему мы?</a>
          <a href="#">Контакты</a>
          <a href="#">Оставить обращение</a>
        </nav>

        <div class="right-part">
          <img src="./icons/login-heder.png" alt="login" class="login-icon" />
          <span class="personal">Личный кабинет</span>
        </div>
      </div>
    </div>

    <!-- 768px -->
    <div class="tablet-header">
      <div class="tablet-content">
        <div class="left-part">
          <img src="/geoposit-heder.png" alt="geo" class="geo-icon" />
          <span class="city">Москва ▼</span>
        </div>

        <nav class="tablet-menu">
          <a href="#">Отзывы</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Оплата</a>
          <a href="#">Еще</a>
        </nav>

        <div class="tablet-right">
          <img src="/viber.png" alt="viber" class="social-icon" />
          <img src="/tg.png" alt="tg" class="social-icon" />
          <a href="tel:+74951509555" class="phone">+7(495)150-95-55</a>
        </div>
      </div>
    </div>

    <!-- МОБИЛЬНЫЙ ХЕДЕР 375px -->
    <div class="mobile-header">
      <div class="mobile-content">
        <img src="/logo.png" alt="ELECITY" class="mobile-logo" />

        <div class="mobile-actions">
          <img src="/src/components/icons/search.png" alt="search" class="mobile-icon" />
          <img src="/shopping-logo.png" alt="cart" class="mobile-icon" />
          <button class="menu-btn" @click="openMenu">
            <img src="/menu-logo.png" alt="menu" />
          </button>
        </div>
      </div>
    </div>

    <!-- МОБИЛЬНОЕ МЕНЮ -->
    <div class="mobile-menu-overlay" :class="{ active: isMenuOpen }" @click.self="closeMenu">
      <div class="mobile-menu">
        <div class="menu-top">
          <button class="close-btn" @click="closeMenu">✕</button>
        </div>

        <!-- Город -->
        <div class="menu-item" @click="selectCity">
          <img src="/geoposit-heder.png" alt="" class="menu-icon" />
          <span>Москва</span>
          <span class="arrow">→</span>
        </div>

        <!-- Все категории -->
        <div class="menu-item" @click="openCategories">
          <span class="hamburger">≡</span>
          <span>Все категории</span>
          <span class="arrow">→</span>
        </div>

        <a href="#" class="menu-item">Отзывы</a>
        <a href="#" class="menu-item">О нас</a>
        <a href="#" class="menu-item">Доставка</a>
        <a href="#" class="menu-item">Оплата</a>
        <a href="#" class="menu-item">Подключение техники</a>
        <a href="#" class="menu-item">Дополнительный сервис</a>
        <a href="#" class="menu-item">Наши гарантии</a>
        <a href="#" class="menu-item">Почему мы?</a>
        <a href="#" class="menu-item">Контакты</a>

        <!-- Контакты -->
        <div class="menu-contacts">
          <a href="tel:+74951509555" class="phone">+7(495)150-95-55</a>
          <span class="time">9:00 - 22:00 без выходных</span>
          <div class="social">
            <img src="/viber.png" alt="viber" />
            <img src="/tg.png" alt="tg" />
          </div>
        </div>
      </div>
    </div>

    <!-- МЕНЮ "ВСЕ КАТЕГОРИИ" -->
    <div class="categories-overlay" :class="{ active: isCategoriesOpen }" @click.self="closeCategories">
      <div class="categories-menu">
        <div class="menu-top">
          <button class="back-btn" @click="closeCategories">← Все категории</button>
          <button class="close-btn" @click="closeCategories">✕</button>
        </div>
        <a href="#" class="menu-item">Бытовая техника</a>
        <a href="#" class="menu-item">Видео и аудио</a>
        <a href="#" class="menu-item">Климат</a>
        <a href="#" class="menu-item">Компьютерная техника</a>
        <a href="#" class="menu-item">Дом и дача</a>
        <a href="#" class="menu-item">Спорт и отдых</a>
        <a href="#" class="menu-item">Инструмент</a>
        <a href="#" class="menu-item">Авто</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isCategoriesOpen = ref(false)

const openMenu = () => isMenuOpen.value = true
const closeMenu = () => {
  isMenuOpen.value = false
  isCategoriesOpen.value = false
}

const openCategories = () => {
  isMenuOpen.value = false
  isCategoriesOpen.value = true
}
const closeCategories = () => isCategoriesOpen.value = false

const selectCity = () => alert('Выбор города')
</script>

<style scoped>
.main-header {
  width: 100%;
  background: white;
  border-bottom: 1px solid #e8edf3;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Десктоп */
.desktop-header { display: block; }
.header-content {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 260px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.left-part, .right-part { display: flex; align-items: center; gap: 8px; }
.center-menu { display: flex; gap: 22px; flex: 1; justify-content: center; }
.center-menu a { color: #1a2634; text-decoration: none; white-space: nowrap; }

/* Tablet 768 */
.tablet-header { display: none; }
.tablet-content {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tablet-menu a { margin-right: 20px; color: #1a2634; text-decoration: none; }
.tablet-right { display: flex; align-items: center; gap: 12px; }
.social-icon { width: 26px; height: 26px; }

/* Mobile 375 */
.mobile-header { display: none; padding: 12px 16px; }
.mobile-content { display: flex; justify-content: space-between; align-items: center; }
.mobile-logo { height: 48px; width: auto; }
.mobile-actions { display: flex; gap: 18px; align-items: center; }
.mobile-icon { width: 24px; height: 24px; cursor: pointer; }
.menu-btn { background: none; border: none; padding: 0; cursor: pointer; }

/* Мобильные меню */
.mobile-menu-overlay, .categories-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1100;
  display: none;
  align-items: flex-start;
  justify-content: flex-end;
}
.mobile-menu-overlay.active, .categories-overlay.active { display: flex; }

.mobile-menu, .categories-menu {
  width: 85%;
  max-width: 360px;
  height: 100vh;
  background: white;
  overflow-y: auto;
}

.menu-top {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #eee;
}

.close-btn {
  font-size: 28px;
  background: none;
  border: none;
  color: #e53935;
  cursor: pointer;
}

.back-btn {
  background: none;
  border: none;
  color: #2196F3;
  font-size: 16px;
}

.menu-item {
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #1a2634;
  cursor: pointer;
}

.menu-contacts {
  padding: 24px 20px;
  border-top: 1px solid #eee;
}

.phone { font-size: 18px; font-weight: 700; color: #1a2634; text-decoration: none; }
.time { font-size: 14px; color: #666; }
.social img { width: 34px; margin-right: 12px; }

/* Адаптив */
@media (max-width: 1024px) {
  .header-content { padding: 0 140px; }
}

@media (max-width: 768px) {
  .desktop-header { display: none; }
  .tablet-header { display: block; }
}

@media (max-width: 480px) {
  .tablet-header { display: none; }
  .mobile-header { display: block; }
}
</style>