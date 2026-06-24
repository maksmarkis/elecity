<template>
  <nav class="main-nav">
    <div class="nav-inner">
      <!-- ДЕСКТОП -->
      <button class="all-categories-btn desktop-only">
        <span>≡</span> Все категории
      </button>

      <div class="nav-links desktop-only">
        <a href="#">Бытовая техника</a>
        <a href="#">Видео и аудио</a>
        <a href="#">Климат</a>
        <a href="#">Компьютерная техника</a>
        <a href="#">Дом и дача</a>
        <a href="#">Спорт и отдых</a>
        <a href="#">Инструмент</a>
        <a href="#">Авто</a>
      </div>

      <!-- ПЛАНШЕТ -->
      <button class="all-categories-btn tablet-only">
        <span>≡</span> Все категории
      </button>

      <div class="nav-links tablet-only">
        <a href="#">Техника</a>
        <a href="#">Мебель</a>
        <a href="#">Инструменты</a>
      </div>

      <div class="sale">
        <span class="sale-icon">%</span> Распродажа
      </div>
    </div>
  </nav>
</template>

<style scoped>
.main-nav {
  background: white;
  padding: 12px 215px;
}

.nav-inner {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.all-categories-btn {
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
}

.all-categories-btn.desktop-only {
  background: #2196F3;
  color: white;
  padding: 10px 24px;
  border-radius: 6px;
}

.all-categories-btn.tablet-only {
  background: transparent;
  color: #2196F3;
  padding: 8px 0;
}

.nav-links {
  display: flex;
  gap: 28px;
  flex: 1;
  font-size: 15px;
}

.nav-links a {
  color: #1a2634;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a:active {
  color: #437FC8;
}

.sale {
  color: #e53935;
  font-weight: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.sale-icon {
  font-weight: 700;
  font-size: 16px;
}

/* По умолчанию */
.tablet-only {
  display: none;
}

/* Tablet 768 */
@media (max-width: 768px) {
  .main-nav {
    padding: 10px 20px;
  }

  .nav-inner {
    padding: 0;
    gap: 0;
    justify-content: space-between;
  }

  .desktop-only {
    display: none;
  }

  .tablet-only {
    display: flex;
  }

  .all-categories-btn.tablet-only {
    padding: 8px 0;
    font-size: 14px;
    gap: 6px;
  }

  .nav-links.tablet-only {
    flex: 1;
    gap: 0;
    justify-content: space-around;
    margin-left: 73px;
    margin-right: 75px;
  }

  .nav-links.tablet-only a {
    font-size: 14px;
  }

  .sale {
    font-size: 14px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .main-nav {
    padding: 8px 12px;
  }

  .nav-inner {
    padding: 0;
    gap: 0;
    justify-content: space-between;
  }

  .desktop-only {
    display: none;
  }

  .tablet-only {
    display: flex;
  }

  .all-categories-btn.tablet-only {
    padding: 6px 0;
    font-size: 13px;
    gap: 6px;
    flex-shrink: 0;
  }

  .nav-links.tablet-only {
    display: none;
  }

  .sale {
    font-size: 13px;
    flex-shrink: 0;
  }
}
.topbar {
  display: none;
}
</style>