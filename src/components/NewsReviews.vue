<template>
  <div class="news">
    <h2 class="news-title">Новости и обзоры</h2>
    <div class="news-line"></div>

    <div class="news-grid">
      <!-- Большая вертикальная (десктоп) -->
      <div class="news-card vertical-large desktop-only" style="background-image: url('/images/news-pulesos.png')">
        <div class="news-card-content">
          <h3 class="news-heading">Эффективная уборка без лишних проводов</h3>
          <p class="news-text">Обзор на Робот-пылесос Xiaomi Mi Robot Vacuum Cleaner</p>
        </div>
      </div>

      <!-- Горизонтальная карточка пылесоса (адаптив) -->
      <div class="news-card wide-card adaptive-only" style="background-image: url('/images/news-horizontalpulesos.png')">
        <div class="news-card-content-left">
          <h3 class="news-heading">Эффективная уборка без лишних проводов</h3>
          <p class="news-text">Обзор на Робот-пылесос Xiaomi Mi Robot Vacuum Cleaner</p>
        </div>
      </div>

      <!-- Центральная колонка -->
      <div class="news-center">
        <div class="news-card small-card" style="background-image: url('/images/news-snowcleaner.png')">
          <div class="news-card-content">
            <h3 class="news-heading">Как выбрать снегоуборщик</h3>
          </div>
        </div>
        <div class="news-card small-card" style="background-image: url('/images/news-cyberpunk.png')">
          <div class="news-card-content">
            <h3 class="news-heading">Самая дорогая видеоигра в мире Cyberpunk 2077 для TV Samsung 4K QLED</h3>
          </div>
        </div>
      </div>

      <!-- Правая колонка -->
      <div class="news-right">
        <div class="news-card wide-card desktop-only" style="background-image: url('/images/news-choicestiralka.png')">
          <div class="news-card-content">
            <h3 class="news-heading">Как выбрать стиральную машину</h3>
          </div>
        </div>
        <div class="news-right-bottom">
          <div class="news-card small-card" style="background-image: url('/images/news-psFive.png')">
            <div class="news-card-content">
              <h3 class="news-heading">Playstation 5: захватывающее обновление, на которое мы надеялись</h3>
            </div>
          </div>
          <div class="news-card small-card" style="background-image: url('/images/news-way.png')">
            <div class="news-card-content">
              <h3 class="news-heading">Путеводитель по покупкам: стоит ли покупать ноутбук или настольный компьютер?</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Горизонтальная карточка "Как выбрать стиральную машину" (адаптив) -->
      <div class="news-card wide-card adaptive-only-bottom" style="background-image: url('/images/news-choicestiralka.png')">
        <div class="news-card-content">
          <h3 class="news-heading">Как выбрать стиральную машину</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Статический контент
</script>

<style scoped>
.news {
  max-width: 1400px;
  margin: 70px auto 0;
  padding: 0;
}

.news-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a2634;
  margin: 0 0 12px 0;
  text-align: left;
}

.news-line {
  width: 100%;
  height: 1px;
  background: #d0d7e0;
  margin-bottom: 30px;
}

.news-grid {
  display: flex;
  gap: 20px;
}

/* Карточки */
.news-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s;
}

.news-card:hover {
  transform: scale(1.02);
}

.news-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: white;
}

/* Текст слева по центру (для адаптивной карточки пылесоса) */
.news-card-content-left {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  color: white;
  max-width: 50%;
}

.news-heading {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.3;
}

.news-text {
  font-size: 13px;
  margin: 0;
  opacity: 0.9;
  line-height: 1.4;
}

/* Большая вертикальная */
.vertical-large {
  width: 367px;
  height: 516px;
  flex-shrink: 0;
}

.vertical-large .news-card-content {
  top: 0;
  bottom: auto;
  background: linear-gradient(rgba(0, 0, 0, 0.85), transparent);
}

.vertical-large .news-heading {
  font-size: 20px;
  margin-bottom: 14px;
}

/* Центральная колонка */
.news-center {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
}

/* Правая колонка */
.news-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.news-right-bottom {
  display: flex;
  gap: 20px;
}

/* Маленькая карточка */
.small-card {
  width: 335px;
  height: 248px;
  flex-shrink: 0;
}

/* Широкая */
.wide-card {
  width: 690px;
  height: 248px;
  flex-shrink: 0;
}

/* По умолчанию скрываем адаптивные карточки */
.adaptive-only,
.adaptive-only-bottom {
  display: none;
}

/* Tablet 768 */
@media (max-width: 768px) {
  .news {
    margin: 50px auto 0;
    padding: 0 16px;
  }

  .news-title {
    font-size: 22px;
    margin: 0 0 8px 0;
  }

  .news-line {
    margin-bottom: 20px;
  }

  /* Скрываем десктопные */
  .desktop-only {
    display: none;
  }

  /* Показываем адаптивные */
  .adaptive-only,
  .adaptive-only-bottom {
    display: block;
    width: 100%;
    height: 200px;
  }

  .adaptive-only-bottom {
    margin-top: 12px;
  }

  .news-grid {
    flex-direction: column;
    gap: 12px;
  }

  .news-center {
    flex-direction: row;
    gap: 12px;
  }

  .news-right {
    flex-direction: row;
    gap: 12px;
  }

  .news-right-bottom {
    display: contents;
  }

  .small-card {
    flex: 1;
    height: 200px;
  }

  .news-heading {
    font-size: 14px;
  }

  .news-card-content-left {
    left: 20px;
    max-width: 60%;
  }

  .news-card-content-left .news-heading {
    font-size: 16px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .news {
    margin: 40px auto 0;
    padding: 0 10px;
  }

  .news-title {
    font-size: 20px;
  }

  .news-grid {
    gap: 10px;
  }

  .news-center,
  .news-right {
    gap: 10px;
  }

  .adaptive-only,
  .adaptive-only-bottom {
    height: 160px;
  }

  .small-card {
    height: 160px;
  }

  .news-heading {
    font-size: 12px;
  }

  .news-card-content {
    padding: 12px;
  }

  .news-card-content-left {
    left: 14px;
    max-width: 70%;
  }

  .news-card-content-left .news-heading {
    font-size: 14px;
  }

  .news-card-content-left .news-text {
    font-size: 11px;
  }
}
</style>