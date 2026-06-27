<template>
  <header class="main-header">
    <!-- ДЕСКТОП -->
    <div class="desktop-header">
      <div class="header-content">
        <div class="left-part" @click="toggleCityList">
          <img src="/images/geoposit-heder.png" alt="geo" class="geo-icon" />
          <span class="city">{{ selectedCity }}</span>
        </div>

        <nav class="center-menu">
          <router-link to="/reviews">Отзывы</router-link>
          <router-link to="/about">О нас</router-link>
          <router-link to="/delivery">Доставка</router-link>
          <router-link to="/payment">Оплата</router-link>
          <router-link to="/service-connection">Подключение техники</router-link>
          <router-link to="/extra-service">Доп. сервис</router-link>
          <router-link to="/warranty">Наши гарантии</router-link>
          <router-link to="/why-us">Почему мы?</router-link>
          <router-link to="/contacts">Контакты</router-link>
          <router-link to="/feedback">Оставить обращение</router-link>
        </nav>

        <div class="right-part" @click="showAuth = true">
          <img src="./icons/login-heder.png" alt="login" class="login-icon" />
          <span class="personal">Личный кабинет</span>
        </div>
      </div>
    </div>

    <!-- ПЛАНШЕТ 768px -->
    <div class="tablet-header">
      <div class="tablet-content">
        <div class="left-part" @click="toggleCityList">
          <img src="/images/geoposit-heder.png" alt="geo" class="geo-icon" />
          <span class="city">{{ selectedCity }}</span>
        </div>

        <nav class="tablet-menu">
          <router-link to="/reviews">Отзывы</router-link>
          <router-link to="/about">О нас</router-link>
          <router-link to="/delivery">Доставка</router-link>
          <router-link to="/payment">Оплата</router-link>
          <div class="more-wrapper" @mouseenter="showMore = true" @mouseleave="showMore = false">
            <span class="more-btn">Еще</span>
            <div v-if="showMore" class="dropdown">
              <router-link to="/service-connection">Подключение техники</router-link>
              <router-link to="/extra-service">Доп. сервис</router-link>
              <router-link to="/warranty">Наши гарантии</router-link>
              <router-link to="/why-us">Почему мы?</router-link>
              <router-link to="/contacts">Контакты</router-link>
              <router-link to="/feedback">Оставить обращение</router-link>
            </div>
          </div>
        </nav>

        <div class="tablet-right">
          <img src="/images/viber.png" alt="viber" class="social-icon" />
          <img src="/images/tg.png" alt="tg" class="social-icon tg-icon" />
          <a href="tel:+74951509555" class="phone">+7(495)150-95-55</a>
        </div>
      </div>
    </div>

    <!-- МОБИЛЬНЫЙ 375px -->
    <div class="mobile-header">
      <div class="mobile-content">
        <img src="/images/logo.png" alt="ELECITY" class="mobile-logo" />

        <div class="mobile-actions">
          <img src="/src/components/icons/search.png" alt="search" class="mobile-icon" />
          <img src="/images/shopping-logo.png" alt="cart" class="mobile-icon" @click="goToCart" />
          <img src="./icons/login-heder.png" alt="login" class="mobile-icon personal-red" @click="showAuth = true" />
          <button class="menu-btn" @click="openMenu">
            <img src="/images/menu-logo.png" alt="menu" class="menu-icon-red" />
          </button>
        </div>
      </div>
    </div>

    <!-- ВЫПАДАЮЩИЙ СПИСОК ГОРОДОВ -->
    <div class="city-overlay" :class="{ active: isCityOpen }" @click.self="isCityOpen = false">
      <div class="city-dropdown">
        <div class="city-dropdown-top">
          <span class="city-dropdown-title">Выберите город</span>
          <button class="city-close-btn" @click="isCityOpen = false">✕</button>
        </div>
        <div class="city-search">
          <input type="text" placeholder="Поиск города..." v-model="citySearch" />
        </div>
        <div class="city-list">
          <div
              v-for="city in filteredCities"
              :key="city"
              class="city-item"
              :class="{ active: selectedCity === city }"
              @click="selectCity(city)"
          >
            {{ city }}
          </div>
        </div>
      </div>
    </div>

    <!-- МОБИЛЬНОЕ МЕНЮ -->
    <div class="mobile-menu-overlay" :class="{ active: isMenuOpen }" @click.self="closeMenu">
      <div class="mobile-menu">
        <div class="menu-top">
          <button class="close-btn" @click="closeMenu">✕</button>
        </div>

        <div class="menu-item" @click="toggleCityList">
          <img src="/images/geoposit-heder.png" alt="" class="menu-icon" />
          <span>{{ selectedCity }}</span>
          <span class="arrow">→</span>
        </div>

        <div class="menu-item" @click="openCategories">
          <span class="hamburger">≡</span>
          <span>Все категории</span>
          <span class="arrow">→</span>
        </div>

        <router-link to="/reviews" class="menu-item">Отзывы</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/delivery">Доставка</router-link>
        <router-link to="/payment">Оплата</router-link>
        <router-link to="/service-connection">Подключение техники</router-link>
        <router-link to="/extra-service">Доп. сервис</router-link>
        <router-link to="/warranty">Наши гарантии</router-link>
        <router-link to="/why-us">Почему мы?</router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/feedback">Оставить обращение</router-link>

        <div class="menu-contacts">
          <a href="tel:+74951509555" class="phone">+7(495)150-95-55</a>
          <span class="time">9:00 - 22:00 без выходных</span>
          <div class="social">
            <img src="/images/viber.png" alt="viber" />
            <img src="/images/tg.png" alt="tg" />
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

    <!-- ОКНО АВТОРИЗАЦИИ -->
    <AuthModal :isOpen="showAuth" @close="showAuth = false" />
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AuthModal from './AuthModal.vue'

const showMore = ref(false)
const isMenuOpen = ref(false)
const isCategoriesOpen = ref(false)
const isCityOpen = ref(false)
const showAuth = ref(false)
const selectedCity = ref('Москва')
const citySearch = ref('')
const cities = ref([])

onMounted(async () => {
  const res = await fetch('/data/cities.json')
  const data = await res.json()
  cities.value = data.cities
})

const filteredCities = computed(() => {
  if (!citySearch.value) return cities.value
  return cities.value.filter(c => c.toLowerCase().includes(citySearch.value.toLowerCase()))
})

const toggleCityList = () => {
  isCityOpen.value = !isCityOpen.value
  citySearch.value = ''
  isMenuOpen.value = false
}

const selectCity = (city) => {
  selectedCity.value = city
  isCityOpen.value = false
  citySearch.value = ''
}

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
import { useRouter } from 'vue-router'
const router = useRouter()
const goToCart = () => router.push('/cart')
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
.left-part {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
}
.right-part {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;
}
.center-menu {
  display: flex;
  gap: 22px;
  flex: 1;
  justify-content: center;
}
.center-menu a {
  color: #1a2634;
  text-decoration: none;
  white-space: nowrap;
}

/* Tablet 768 */
.tablet-header {
  display: none;
}
.tablet-content {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tablet-content .left-part{
  cursor: pointer;
}
.tablet-menu{
  display: flex;
  align-items: center;
  gap: 20px;
}
.tablet-menu > a {
  color: #1a2634;
  text-decoration: none;
  font-size: 14px;
}
.more-wrapper {
  position: relative;
  cursor: pointer;
}
.more-btn {font-size: 14px;
  color: #1a2634;
}
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
.dropdown a:hover {
  background: #f5f7fa;
}
.tablet-right {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-left: 105px;
}
.social-icon {
  width: 26px;
  height: 26px;
}
.tg-icon {
  margin-left: 3px;
}
.phone {
  font-size: 14px;
  font-weight: 600;
  color: #1a2634;
  text-decoration: none;
  margin-left: 14px;
  white-space: nowrap;
}

/* Mobile 375 */
.mobile-header {
  display: none;
}
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

/* Выпадающий список городов */
.city-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1200;
  display: none;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
}
.city-overlay.active {
  display: flex;
}

.city-dropdown {
  width: 420px;
  max-height: 500px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
.city-dropdown-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
}
.city-dropdown-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a2634;
}
.city-close-btn {
  font-size: 24px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
}
.city-search {
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
}
.city-search input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #d0d7e0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}
.city-list {
  max-height: 320px;
  overflow-y: auto;
  padding: 8px 0;
}
.city-item {
  padding: 12px 20px;
  font-size: 15px;
  color: #1a2634;
  cursor: pointer;
  transition: background 0.15s;
}
.city-item:hover {
  background: #f5f7fa;
}
.city-item.active {
  background: #e3f2fd;
  color: #2196F3;
  font-weight: 600;
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
.menu-item span { text-align: left; }
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
  .city-dropdown {
    width: 90%;
    max-height: 70vh;
  }
}
</style>