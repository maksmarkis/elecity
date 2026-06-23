<template>
  <div class="news">
    <h2 class="news-title">Новости и обзоры</h2>
    <div class="news-line"></div>

    <div class="news-grid">
      <!-- Большая вертикальная карточка слева -->
      <div class="news-card vertical-large">
        <img src="/pulesos.png" alt="Новость" class="news-img" />
      </div>

      <!-- Центральная колонка: две маленькие карточки -->
      <div class="news-center">
        <div class="news-card small-card">
          <img src="/snow-cleaner.png" alt="Новость" class="news-img" />
        </div>
        <div class="news-card small-card">
          <img src="/cyberpunck.png" alt="Новость" class="news-img" />
        </div>
      </div>

      <!-- Правая колонка: длинная горизонтальная + две маленькие под ней -->
      <div class="news-right">
        <div class="news-card wide-card">
          <img src="/howFind-stiralka.png" alt="Новость" class="news-img" />
        </div>
        <div class="news-right-bottom">
          <div class="news-card small-card">
            <img src="/psfive.png" alt="Новость" class="news-img" />
          </div>
          <div class="news-card small-card">
            <img src="/notebooks.png" alt="Новость" class="news-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

/* Большая вертикальная карточка */
.vertical-large {
  width: 367px;
  height: 516px;
  flex-shrink: 0;
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

/* Широкая горизонтальная карточка */
.wide-card {
  width: 690px;
  height: 248px;
  flex-shrink: 0;
}

/* Общие стили карточек */
.news-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.news-card:hover .news-img {
  transform: scale(1.05);
}
</style>