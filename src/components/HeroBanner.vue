<template>
  <div class="hero">
    <div class="hero-slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="i in 4" :key="i" class="slide">
        <!-- СЮДА ВСТАВИЛ ТВОЮ КАРТИНКУ -->
        <img src="/mashonka.png" alt="Стиральная машина" class="slide-img" />

        <div class="hero-content">
          <h1>Большой выбор<br>стиральных машин</h1>
          <p>Успей купить по суперцене</p>
          <button class="hero-btn">Подробнее</button>
        </div>
      </div>
    </div>

    <!-- Стрелки -->
    <button class="slider-arrow left" @click="prevSlide">←</button>
    <button class="slider-arrow right" @click="nextSlide">→</button>

    <!-- Точки -->
    <div class="dots">
      <span
          v-for="(slide, i) in 4"
          :key="i"
          class="dot"
          :class="{ active: currentSlide === i }"
          @click="goToSlide(i)">
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 4
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 4) % 4
}
const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 420px;
  overflow: hidden;
  background: linear-gradient(135deg, #0a2540, #1e3a8a);
  margin: 0 auto;
  max-width: 1400px;
  border-radius: 20px;
}

.hero-slider {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  max-width: 500px;
}

.hero-content h1 {
  font-size: 38px;
  line-height: 1.1;
  margin-bottom: 12px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 28px;
}

.hero-btn {
  background: white;
  color: #1a2634;
  border: none;
  padding: 12px 32px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

/* Стрелки */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.25);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 22px;
  color: white;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.left { left: 10px; }    /* ← прижато к левому краю */
.right { right: 10px; }  /* ← прижато к правому краю */

/* Точки */
.dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  background: rgba(255,255,255,0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}
</style>