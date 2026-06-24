<template>
  <div class="catalog">
    <h2 class="catalog-title">Каталог</h2>
    <div class="catalog-line"></div>

    <div v-for="(row, rowIndex) in catalogRows" :key="rowIndex" class="catalog-grid">
      <div v-for="(block, blockIndex) in row" :key="blockIndex" class="catalog-block">
        <h3 class="catalog-block-title">{{ block.title }}</h3>
        <ul class="catalog-list">
          <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
            <a href="#">{{ item.name }} <span class="count">({{ item.count }})</span></a>
          </li>
        </ul>
        <a href="#" class="all-link">Все товары <span class="arrow">→</span></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const catalogRows = ref([])

onMounted(async () => {
  const res = await fetch('/data/catalog.json')
  catalogRows.value = await res.json()
})
</script>

<style scoped>
.catalog {
  max-width: 1400px;
  margin: 100px auto 0;
  padding: 0;
}

.catalog-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a2634;
  margin: 0 0 12px 0;
  text-align: left;
}

.catalog-line {
  width: 100%;
  height: 1px;
  background: #d0d7e0;
  margin-bottom: 30px;
}

.catalog-grid {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.catalog-block {
  flex: 1;
  min-width: 0;
}

.catalog-block-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a2634;
  margin: 0 0 14px 0;
}

.catalog-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.catalog-list li {
  margin-bottom: 8px;
}

.catalog-list li a {
  color: #555;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.catalog-list li a:hover {
  color: #437FC8;
}

.count {
  color: #999;
  font-size: 13px;
}

.all-link {
  color: #437FC8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.all-link:hover {
  color: #3669b0;
}

.arrow {
  font-size: 14px;
}
/* Tablet 768 */
@media (max-width: 768px) {
  .catalog {
    margin: 60px auto 0;
    padding: 0 16px;
  }

  .catalog-title {
    font-size: 22px;
    margin: 0 0 8px 0;
  }

  .catalog-line {
    margin-bottom: 20px;
  }

  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 30px;
  }

  .catalog-block {
    flex: none;
  }

  .catalog-block-title {
    font-size: 15px;
    margin: 0 0 10px 0;
  }

  .catalog-list li {
    margin-bottom: 6px;
  }

  .catalog-list li a {
    font-size: 13px;
  }

  .count {
    font-size: 12px;
  }

  .all-link {
    font-size: 13px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .catalog {
    margin: 40px auto 0;
    padding: 0 10px;
  }

  .catalog-title {
    font-size: 20px;
  }

  .catalog-grid {
    gap: 16px;
    margin-bottom: 20px;
  }

  .catalog-block-title {
    font-size: 14px;
  }

  .catalog-list li a {
    font-size: 12px;
  }

  .all-link {
    font-size: 12px;
  }
}
</style>