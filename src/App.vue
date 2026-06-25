<template>
  <div id="app">
    <TheHeader />
    <TheTopBar />
    <MainNav />
    <HeroBanner />
    <PopularProducts />
    <Catalog />
    <NewsReviews />
    <TechInfo />
    <TheFooter />   <!-- ← добавь -->
  </div>

</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheTopBar from './components/TheTopBar.vue'
import MainNav from './components/MainNav.vue'
import HeroBanner from './components/HeroBanner.vue'
import PopularProducts from './components/PopularProducts.vue'
import Catalog from './components/Catalog.vue'
import NewsReviews from './components/NewsReviews.vue'
import TechInfo from './components/TechInfo.vue'
import TheFooter from './components/TheFooter.vue'
</script>