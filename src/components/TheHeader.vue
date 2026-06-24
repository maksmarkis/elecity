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

    <!-- ПЛАНШЕТ 768px -->
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
          <div class="more-wrapper" @mouseenter="showMore = true" @mouseleave="showMore = false">
            <span class="more-btn">Еще</span>
            <div v-if="showMore" class="dropdown">
              <a href="#">Подключение техники</a>
              <a href="#">Доп. сервис</a>
              <a href="#">Наши гарантии</a>
              <a href="#">Почему мы?</a>
              <a href="#">Контакты</a>
              <a href="#">Оставить обращение</a>
            </div>
          </div>
        </nav>

        <div class="tablet-right">
          <img src="/viber.png" alt="viber" class="social-icon" />
          <img src="/tg.png" alt="tg" class="social-icon tg-icon" />
          <a href="tel:+74951509555" class="phone">+7(495)150-95-55</a>
        </div>
      </div>
    </div>

    <!-- МОБИЛЬНЫЙ 375px -->
    <div class="mobile-header">
      <div class="mobile-content">
        <img src="/logo.png" alt="ELECITY" class="mobile-logo" />

        <div class="mobile-actions">
          <img src="/src/components/icons/search.png" alt="search" class="mobile-icon" />
          <img src="/shopping-logo.png" alt="cart" class="mobile-icon" />
          <img src="./icons/login-heder.png" alt="login" class="mobile-icon personal-red" />
          <button class="menu-btn" @click="openMenu">
            <img src="/menu-logo.png" alt="menu" class="menu-icon-red" />
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

        <div class="menu-item" @click="selectCity">
          <img src="/geoposit-heder.png" alt="" class="menu-icon" />
          <span>Москва</span>
          <span class="arrow">→</span>
        </div>

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

const showMore = ref(false)
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
.tablet-menu { display: flex; align-items: center; gap: 20px; }
.tablet-menu > a { color: #1a2634; text-decoration: none; font-size: 14px; }
.more-wrapper { position: relative; cursor: pointer; }
.more-btn { font-size: 14px; color: #1a2634; }
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 100;
}
.dropdown a {
  display: block;
  padding: 8px 16px;
  color: #1a2634;
  text-decoration: none;
  font-size: 14px;
}
.dropdown a:hover { background: #f5f7fa; }
.tablet-right { display: flex; align-items: center; gap: 11px; margin-left: 105px; }
.social-icon { width: 26px; height: 26px; }
.tg-icon { margin-left: 3px; }
.phone { font-size: 14px; font-weight: 600; color: #1a2634; text-decoration: none; margin-left: 14px; white-space: nowrap; }

/* Mobile 375 */
.mobile-header { display: none; }
.mobile-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 12px;
  background: white;
  border-bottom: 1px solid #e8edf3;
}
.mobile-logo {
  width: 105px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}
.mobile-actions {
  display: flex;
  align-items: center;
  gap: 0;
  margin-left: 75px;
}
.mobile-icon {
  width: 22px;
  height: 22px;
  cursor: pointer;
  object-fit: contain;
  margin-left: 18px;
}
.mobile-icon:first-child {
  margin-left: 0;
}
.personal-red {
  filter: invert(18%) sepia(89%) saturate(7460%) hue-rotate(357deg) brightness(95%) contrast(92%);
}
.menu-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: 42px;
}
.menu-icon-red {
  width: 22px;
  height: 22px;
  filter: invert(18%) sepia(89%) saturate(7460%) hue-rotate(357deg) brightness(95%) contrast(92%);
}

/* Мобильные меню */
.mobile-menu-overlay, .categories-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1100;
  display: none;
}
.mobile-menu-overlay.active, .categories-overlay.active {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.mobile-menu, .categories-menu {
  width: 100%;
  height: 100vh;
  background: white;
  overflow-y: auto;
}

.menu-top {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.close-btn {
  font-size: 32px;
  background: none;
  border: none;
  color: #e53935;
  cursor: pointer;
  padding: 0 8px;
  line-height: 1;
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
  gap: 12px;
  font-size: 16px;
  color: #1a2634;
  cursor: pointer;
  text-decoration: none;
}
.menu-item span {
  text-align: left;
}
.menu-item .arrow {
  margin-left: auto;
  font-size: 20px;
  color: #999;
}
.menu-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
}
.hamburger {
  font-size: 22px;
  flex-shrink: 0;
}

.menu-contacts {
  padding: 20px;
  border-top: 1px solid #eee;
}
.menu-contacts .phone {
  font-size: 18px;
  font-weight: 700;
  color: #1a2634;
  text-decoration: none;
  display: block;
  margin-bottom: 6px;
}
.time {
  font-size: 14px;
  color: #666;
  display: block;
  margin-bottom: 12px;
}
.menu-contacts .social {
  display: flex;
  gap: 12px;
}
.menu-contacts .social img {
  width: 34px;
}

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