<template>
  <nav class="main-nav">
    <div class="nav-inner">
      <button class="all-categories-btn">
        <span>≡</span> Все категории
      </button>

      <div class="nav-links">
        <a href="#">Бытовая техника</a>
        <a href="#">Видео и аудио</a>
        <a href="#">Климат</a>
        <a href="#">Компьютерная техника</a>
        <a href="#">Дом и дача</a>
        <a href="#">Спорт и отдых</a>
        <a href="#">Инструмент</a>
        <a href="#">Авто</a>
      </div>

      <div class="sale">
        🔥 % Распродажа
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
  background: #2196F3;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
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
}

.sale {
  color: #e53935;
  font-weight: 600;
  white-space: nowrap;
}
</style>