<template>
  <div class="popular">
    <h2 class="popular-title">Популярное</h2>
    <div class="popular-line"></div>

    <!-- Ряд 1 -->
    <div class="products-grid">
      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img src="/vodo-nagrev.png" alt="Водонагреватель" />
        </div>
        <div class="product-discount">-20%</div>
        <div class="product-price">14 990 ₽</div>
        <div class="product-name">Водонагреватель Electrolux EWH 80 Formax</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">12 отзывов</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Стиральная машина" />
        </div>
        <div class="product-discount">-20%</div>
        <div class="product-price">32 490 ₽</div>
        <div class="product-name">Стиральная машина LG F-1096TD3</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">8 отзывов</span>
          </span>
        </div>
        <button class="buy-btn out-of-stock" disabled>Нет в наличии</button>
      </div>

      <div class="product-card">
        <div class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img src="/microvave.png" alt="Микроволновая печь" />
        </div>
        <div class="product-discount">-20%</div>
        <div class="product-price">18 990 ₽</div>
        <div class="product-name">Микроволновая печь WHIRLPOOL AMW 730 IX</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">24 отзыва</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-img">
          <img src="/telek.png" alt="Телевизор" />
        </div>
        <div class="product-discount">-20%</div>
        <div class="product-price">22 990 ₽</div>
        <div class="product-name">Телевизор BLACKTON 2402B</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">3 отзыва</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>
    </div>

    <!-- Серая линия после ряда 1 -->
    <div class="row-divider"></div>

    <!-- Ряд 2 -->
    <div class="products-grid">
      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Холодильник" />
        </div>
        <div class="product-discount">-15%</div>
        <div class="product-price">45 990 ₽</div>
        <div class="product-name">Холодильник Samsung RB30T3000SA</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">18 отзывов</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <div class="product-img">
          <img src="/stiral.png" alt="Пылесос" />
        </div>
        <div class="product-discount">-25%</div>
        <div class="product-price">8 990 ₽</div>
        <div class="product-name">Пылесос Dyson V8 Absolute</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">6 отзывов</span>
          </span>
        </div>
        <button class="buy-btn out-of-stock" disabled>Нет в наличии</button>
      </div>

      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Плита" />
        </div>
        <div class="product-discount">-20%</div>
        <div class="product-price">27 990 ₽</div>
        <div class="product-name">Электрическая плита Gorenje EC 6341 XC</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">31 отзыв</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <div class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Утюг" />
        </div>
        <div class="product-discount">-30%</div>
        <div class="product-price">5 990 ₽</div>
        <div class="product-name">Утюг Philips GC4909/80 Azur</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">2 отзыва</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>
    </div>

    <!-- Баннер с аэрподсами -->
    <div class="banner">
      <img src="/airpods-banner.png" alt="AirPods" class="banner-img" />
    </div>

    <!-- Ряд 3 -->
    <div class="products-grid">
      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Товар" />
        </div>
        <div class="product-discount">-20%</div>
        <div class="product-price">12 990 ₽</div>
        <div class="product-name">Название товара</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">5 отзывов</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <div class="product-img">
          <img src="/stiral.png" alt="Товар" />
        </div>
        <div class="product-discount">-15%</div>
        <div class="product-price">9 990 ₽</div>
        <div class="product-name">Название товара</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">10 отзывов</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <div class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Товар" />
        </div>
        <div class="product-discount">-25%</div>
        <div class="product-price">15 990 ₽</div>
        <div class="product-name">Название товара</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">20 отзывов</span>
          </span>
        </div>
        <button class="buy-btn out-of-stock" disabled>Нет в наличии</button>
      </div>

      <div class="product-card">
        <div class="product-badge new">Новинка</div>
        <div class="product-img">
          <img src="/stiral.png" alt="Товар" />
        </div>
        <div class="product-discount">-30%</div>
        <div class="product-price">7 990 ₽</div>
        <div class="product-name">Название товара</div>
        <div class="product-rating">
          <span class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">1 отзыв</span>
          </span>
        </div>
        <button class="buy-btn">Купить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular {
  max-width: 1400px;
  margin: 70px auto 0;
  padding: 0;
}

.popular-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a2634;
  margin: 0 0 12px 0;
  text-align: left;
}

.popular-line {
  width: 100%;
  height: 1px;
  background: #d0d7e0;
  margin-bottom: 30px;
}

.products-grid {
  display: flex;
  gap: 35px;
  justify-content: flex-start;
  margin-left: 35px;
}

.product-card {
  width: 305px;
  min-height: 470px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.product-badge.new {
  position: absolute;
  top: 0;
  left: 0;
  background: #55BB9F;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  z-index: 2;
}

.product-badge.gift {
  position: absolute;
  top: 0;
  left: 0;
  background: #42a5f5;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  z-index: 2;
}

.product-badge.new + .product-badge.gift {
  top: 32px;
}

.product-img {
  width: 100%;
  height: 220px;
  background: #f5f7fa;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-discount {
  position: absolute;
  top: 190px;
  left: 10px;
  background: #e53935;
  color: white;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  z-index: 2;
}

.product-price {
  font-size: 22px;
  font-weight: 700;
  color: #1a2634;
  margin-bottom: 8px;
}

.product-name {
  font-size: 14px;
  color: #555;
  line-height: 1.4;
  margin-bottom: 10px;
  flex-grow: 1;
}

.product-rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #d0d7e0;
  font-size: 16px;
}

.star.filled {
  color: #ffa000;
}

.reviews {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #999;
}

.reviews-icon {
  font-size: 14px;
}

.reviews-count {
  white-space: nowrap;
}

.buy-btn {
  width: auto;
  padding: 10px 28px;
  background: #437FC8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
}

.buy-btn:hover {
  background: #3669b0;
}

.buy-btn.out-of-stock {
  background: #b0b0b0;
  cursor: not-allowed;
}

.buy-btn.out-of-stock:hover {
  background: #b0b0b0;
}

.row-divider {
  width: 100%;
  height: 1px;
  background: #e8edf3;
  margin: 35px 0;
}

/* Баннер */
.banner {
  width: 100%;
  height: 355px;
  margin: 0 0 35px 0;
  border-radius: 20px;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>