<template>
  <footer class="footer">
    <!-- Верхняя серая линия -->
    <div class="footer-line"></div>

    <div class="footer-inner">
      <!-- Левая колонка -->
      <div class="footer-left">
        <img src="/logo.png" alt="ELECITY" class="footer-logo" />
        <a href="tel:+74951509555" class="footer-phone">+7(495)150-95-55</a>
        <div class="footer-social">
          <a href="#"><img src="/tg-blacklogo.png" alt="Telegram" /></a>
          <a href="#"><img src="/vk-logo.png" alt="VK" /></a>
          <a href="#"><img src="/viber-blacklogo.png" alt="Viber" /></a>
          <a href="#"><img src="/odnoklassniki-logo.png" alt="Одноклассники" /></a>
        </div>
        <p class="footer-company">
          ООО "БТ МАРКЕТ", ИНН7728483067<br>
          Москва, пр-д Соловьиный д. 2, ком. 1.
        </p>
      </div>

      <!-- Колонка 2 -->
      <div class="footer-col">
        <ul>
          <li><a href="#">Как оформить заказ</a></li>
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Оплата</a></li>
          <li><a href="#">Прием товара</a></li>
          <li><a href="#">Почему покупать у нас</a></li>
          <li><a href="#">Подключение техники</a></li>
          <li><a href="#">Отзывы о нас</a></li>
          <li><a href="#">Пользовательское соглашение</a></li>
        </ul>
      </div>

      <!-- Колонка 3 -->
      <div class="footer-col">
        <ul>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Юридическая информация</a></li>
          <li><a href="#">Для поставщиков</a></li>
          <li><a href="#">Для оптовых клиентов</a></li>
          <li><a href="#">Оставить обращение</a></li>
          <li><a href="#">Политика конфиденциальности</a></li>
          <li><a href="#">Новости и обзоры</a></li>
        </ul>
      </div>

      <!-- Колонка 4 -->
      <div class="footer-col">
        <ul>
          <li><a href="#">Вопрос-ответ</a></li>
          <li><a href="#">Дополнительный сервис</a></li>
          <li><a href="#">Проверка на битые пиксели</a></li>
          <li><a href="#">Утилизация техники</a></li>
          <li><a href="#">Гарантийное обслуживание</a></li>
          <li><a href="#">Сервисные центры</a></li>
          <li><a href="#">Наши гарантии</a></li>
          <li><a href="#">Обмен и возврат товара</a></li>
        </ul>
      </div>
    </div>

    <!-- Нижняя серая линия -->
    <div class="footer-line"></div>

    <!-- Копирайт -->
    <div class="footer-bottom">
      <p>
        Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях информационные материалы и цены, размещенные на сайте, не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ.
      </p>
      <p class="footer-copyright">elecity.ru © 2011-2021</p>
    </div>
  </footer>
</template>

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

/* Левая колонка */
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
  margin-left: 20px;    /* ← сдвиг номера */
}

.footer-social {
  display: flex;
  gap: 12px;
  margin-left: 20px;    /* ← сдвиг соцсетей */
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
  margin: 0 0 0 20px;   /* ← сдвиг ООО */
}

/* Колонки с ссылками */
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

/* Нижняя часть */
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
</style>