<template>
  <div class="popular">
    <h2 class="popular-title">Популярное</h2>
    <div class="popular-line"></div>

    <!-- Ряд 1 (первые 4 товара) -->
    <div class="products-grid">
      <div v-for="(item, i) in row1" :key="i" class="product-card">
        <div v-if="item.badge === 'new'" class="product-badge new">Новинка</div>
        <div v-if="item.gift" class="product-badge gift" :class="{ offset: item.badge === 'new' }">Подарок</div>
        <div v-if="item.badge === 'gift'" class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="product-discount">{{ item.discount }}</div>
        <div class="product-price">{{ item.price }}</div>
        <div class="product-name">{{ item.name }}</div>
        <div class="product-rating">
          <span class="stars">
            <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= item.stars }">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">{{ item.reviews }} {{ pluralReviews(item.reviews) }}</span>
          </span>
        </div>
        <button v-if="item.inStock" class="buy-btn">Купить</button>
        <button v-else class="buy-btn out-of-stock" disabled>Нет в наличии</button>
      </div>
    </div>

    <div class="row-divider"></div>

    <!-- Ряд 2 (вторые 4 товара) -->
    <div class="products-grid">
      <div v-for="(item, i) in row2" :key="i" class="product-card">
        <div v-if="item.badge === 'new'" class="product-badge new">Новинка</div>
        <div v-if="item.gift" class="product-badge gift" :class="{ offset: item.badge === 'new' }">Подарок</div>
        <div v-if="item.badge === 'gift'" class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="product-discount">{{ item.discount }}</div>
        <div class="product-price">{{ item.price }}</div>
        <div class="product-name">{{ item.name }}</div>
        <div class="product-rating">
          <span class="stars">
            <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= item.stars }">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">{{ item.reviews }} {{ pluralReviews(item.reviews) }}</span>
          </span>
        </div>
        <button v-if="item.inStock" class="buy-btn">Купить</button>
        <button v-else class="buy-btn out-of-stock" disabled>Нет в наличии</button>
      </div>
    </div>

    <!-- Баннер -->
    <div class="banner">
      <img src="/airpods-banner.png" alt="AirPods" class="banner-img" />
    </div>

    <!-- Ряд 3 (последние 4 товара) -->
    <div class="products-grid">
      <div v-for="(item, i) in row3" :key="i" class="product-card">
        <div v-if="item.badge === 'new'" class="product-badge new">Новинка</div>
        <div v-if="item.gift" class="product-badge gift" :class="{ offset: item.badge === 'new' }">Подарок</div>
        <div v-if="item.badge === 'gift'" class="product-badge gift">Подарок</div>
        <div class="product-img">
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="product-discount">{{ item.discount }}</div>
        <div class="product-price">{{ item.price }}</div>
        <div class="product-name">{{ item.name }}</div>
        <div class="product-rating">
          <span class="stars">
            <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= item.stars }">★</span>
          </span>
          <span class="reviews">
            <span class="reviews-icon">💬</span>
            <span class="reviews-count">{{ item.reviews }} {{ pluralReviews(item.reviews) }}</span>
          </span>
        </div>
        <button v-if="item.inStock" class="buy-btn">Купить</button>
        <button v-else class="buy-btn out-of-stock" disabled>Нет в наличии</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await fetch('/data/popular.json')
  products.value = await res.json()
})

const row1 = computed(() => products.value.slice(0, 4))
const row2 = computed(() => products.value.slice(4, 8))
const row3 = computed(() => products.value.slice(8, 12))

function pluralReviews(n) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'отзыв'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'отзыва'
  return 'отзывов'
}
</script>

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

.product-badge.gift.offset {
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
/* Tablet 768 */
@media (max-width: 768px) {
  .popular {
    margin: 50px auto 0;
    padding: 0 16px;
  }

  .popular-title {
    font-size: 22px;
    margin: 0 0 8px 0;
  }

  .popular-line {
    margin-bottom: 20px;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-left: 0;
  }

  .product-card {
    width: 100%;
    min-height: auto;
  }

  .product-img {
    height: 180px;
  }

  .product-discount {
    top: 150px;
    font-size: 11px;
    padding: 3px 8px;
  }

  .product-price {
    font-size: 18px;
  }

  .product-name {
    font-size: 13px;
  }

  .product-badge.new,
  .product-badge.gift {
    font-size: 10px;
    padding: 4px 8px;
  }

  .product-badge.gift.offset {
    top: 26px;
  }

  .buy-btn {
    padding: 8px 20px;
    font-size: 13px;
  }

  .banner {
    height: 200px;
    border-radius: 12px;
    margin: 0 0 25px 0;
  }

  .row-divider {
    margin: 25px 0;
  }

  .reviews-count {
    font-size: 11px;
  }

  .star {
    font-size: 14px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .popular {
    margin: 40px auto 0;
    padding: 0 10px;
  }

  .popular-title {
    font-size: 20px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .product-img {
    height: 150px;
  }

  .product-discount {
    top: 120px;
    font-size: 10px;
  }

  .product-price {
    font-size: 16px;
  }

  .product-name {
    font-size: 12px;
  }

  .product-rating {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .buy-btn {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 13px;
  }

  .banner {
    height: 140px;
    border-radius: 8px;
  }

  .row-divider {
    margin: 20px 0;
  }
}
</style>