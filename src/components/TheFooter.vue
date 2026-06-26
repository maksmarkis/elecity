<template>
  <footer class="footer">
    <div class="footer-line"></div>

    <div class="footer-inner">
      <div class="footer-left">
        <img src="/images/logo.png" alt="ELECITY" class="footer-logo" />
        <a href="tel:+74951509555" class="footer-phone">+7(495)150-95-55</a>
        <div class="footer-social">
          <a href="#"><img src="/images/tg-blacklogo.png" alt="Telegram" /></a>
          <a href="#"><img src="/images/vk-logo.png" alt="VK" /></a>
          <a href="#"><img src="/images/viber-blacklogo.png" alt="Viber" /></a>
          <a href="#"><img src="/images/odnoklassniki-logo.png" alt="Одноклассники" /></a>
        </div>
        <p class="footer-company">
          ООО "БТ МАРКЕТ", ИНН7728483067<br />
          Москва, пр-д Соловьиный д. 2, ком. 1.
        </p>
      </div>

      <div v-for="(col, colIndex) in footerColumns" :key="colIndex" class="footer-col">
        <ul>
          <li v-for="(link, linkIndex) in col" :key="linkIndex">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-line"></div>

    <div class="footer-bottom">
      <p>
        Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях информационные материалы и цены, размещенные на сайте, не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ.
      </p>
      <p class="footer-copyright">elecity.ru © 2011-2021</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const footerColumns = ref([])

onMounted(async () => {
  const res = await fetch('/data/footer.json')
  const data = await res.json()
  footerColumns.value = data.columns
})
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: 80px;
  background: #fff;
}

.footer-line {
  width: 100%;
  height: 1px;
  background: #d0d7e0;
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.footer-logo {
  width: 220px;
  height: 86px;
  object-fit: contain;
}

.footer-phone {
  font-size: 18px;
  font-weight: 700;
  color: #1a2634;
  text-decoration: none;
  margin-left: 20px;
}

.footer-social {
  display: flex;
  gap: 12px;
  margin-left: 20px;
}

.footer-social img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.footer-company {
  font-size: 13px;
  color: #777;
  line-height: 1.5;
  margin: 0 0 0 20px;
}

.footer-col {
  flex: 1;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col ul li a {
  color: #555;
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
  transition: color 0.2s;
}

.footer-col ul li a:hover {
  color: #437FC8;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 12px;
  color: #999;
  line-height: 1.5;
  margin: 0 0 8px;
}

.footer-copyright {
  font-size: 13px;
  color: #666;
}
/* Tablet 768 */
@media (max-width: 768px) {
  .footer-inner {
    padding: 30px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-left {
    margin-left: 0;
  }

  .footer-logo {
    width: 180px;
    height: auto;
    margin-left: -15px;
  }

  .footer-phone {
    margin-left: 0;
    font-size: 16px;
  }

  .footer-social {
    margin-left: 0;
  }

  .footer-company {
    margin-left: 0;
    font-size: 12px;
  }

  .footer-col {
    flex: none;
  }

  .footer-col ul li a {
    font-size: 13px;
  }
}

/* Mobile 375 */
@media (max-width: 480px) {
  .footer-inner {
    padding: 24px 12px;
    gap: 20px;
  }

  .footer-logo {
    width: 180px;
    height: auto;
    margin-left: -10px;
  }

  .footer-phone {
    font-size: 15px;
  }

  .footer-social img {
    width: 24px;
    height: 24px;
  }

  .footer-company {
    font-size: 11px;
  }

  .footer-col ul {
    gap: 8px;
  }

  .footer-col ul li a {
    font-size: 12px;
  }

  .footer-bottom {
    padding: 16px 12px;
  }

  .footer-bottom p {
    font-size: 11px;
  }

  .footer-copyright {
    font-size: 12px;
  }
}
</style>