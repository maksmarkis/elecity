<template>
  <div class="hero">
    <div class="hero-slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, i) in slides" :key="i" class="slide">
        <img :src="isMobile ? slide.imgMobile : slide.img" alt="" class="slide-img" />
        <div class="hero-content">
          <h1 v-html="slide.title"></h1>
          <p>{{ slide.subtitle }}</p>
          <button class="hero-btn">{{ slide.btn }}</button>
        </div>
      </div>
    </div>

    <button class="slider-arrow left" @click="prevSlide">←</button>
    <button class="slider-arrow right" @click="nextSlide">→</button>

    <div class="dots">
      <span
          v-for="(slide, i) in slides"
          :key="i"
          class="dot"
          :class="{ active: currentSlide === i }"
          @click="goToSlide(i)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const slides = ref([])
const currentSlide = ref(0)
const windowWidth = ref(window.innerWidth)

const isMobile = computed(() => windowWidth.value <= 480)

onMounted(async () => {
  const res = await fetch('/data/hero.json')
  const data = await res.json()
  slides.value = data.slides
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
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
  font-weight: 700;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 28px;
  font-weight: 400;
}

.hero-btn {
  background: white;
  color: #1a2634;
  border: none;
  padding: 12px 32px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.25);
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

.left { left: 10px; }
.right { right: 10px; }

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
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* Tablet 768 */
@media (max-width: 768px) {
  .hero {
    height: 320px;
    max-width: 720px;
    border-radius: 16px;
    margin: 0 auto;
  }

  .hero-content {
    left: 40px;
    max-width: 320px;
  }

  .hero-content h1 {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 8px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  .hero-content p {
    font-size: 14px;
    margin-bottom: 16px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  .hero-btn {
    padding: 10px 24px;
    font-size: 14px;
  }

  .slider-arrow {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .left { left: 10px; }
  .right { right: 10px; }

  .dots {
    bottom: 16px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .hero {
    height: 460px;
    max-width: 100%;
    border-radius: 0;
    margin: 0;
  }

  .hero-content {
    position: absolute;
    top: auto;
    bottom: 70px;
    left: 20px;
    right: 20px;
    transform: none;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .hero-content h1 {
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 8px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  .hero-content p {
    font-size: 16px;
    margin-bottom: 16px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  .hero-btn {
    padding: 12px 28px;
    font-size: 14px;
    align-self: flex-start;
  }

  .slider-arrow {
    top: auto;
    bottom: 70px;
    width: 44px;
    height: 44px;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.3);
    transform: none;
  }

  .left {
    left: auto;
    right: 73px;
  }

  .right {
    right: 20px;
  }

  .dots {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    gap: 8px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>