<template>
  <div class="auth-overlay" :class="{ active: isOpen }" @click.self="close">
    <div class="auth-modal">
      <div class="auth-top">
        <button class="auth-close" @click="close">✕</button>
      </div>

      <!-- Табы -->
      <div class="auth-tabs">
        <button
            class="auth-tab"
            :class="{ active: activeTab === 'login' }"
            @click="activeTab = 'login'"
        >
          Вход
        </button>
        <button
            class="auth-tab"
            :class="{ active: activeTab === 'register' }"
            @click="activeTab = 'register'"
        >
          Регистрация
        </button>
      </div>

      <!-- Форма входа -->
      <form v-if="activeTab === 'login'" class="auth-form" @submit.prevent="handleLogin">
        <input type="email" placeholder="Email" v-model="loginEmail" required />
        <input type="password" placeholder="Пароль" v-model="loginPassword" required />
        <a href="#" class="auth-forgot">Забыли пароль?</a>
        <button type="submit" class="auth-submit">Войти</button>
      </form>

      <!-- Форма регистрации -->
      <form v-if="activeTab === 'register'" class="auth-form" @submit.prevent="handleRegister">
        <input type="text" placeholder="Имя" v-model="regName" required />
        <input type="email" placeholder="Email" v-model="regEmail" required />
        <input type="tel" placeholder="Телефон" v-model="regPhone" required />
        <input type="password" placeholder="Пароль" v-model="regPassword" required />
        <input type="password" placeholder="Повторите пароль" v-model="regPassword2" required />
        <button type="submit" class="auth-submit">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

const activeTab = ref('login')

// Login
const loginEmail = ref('')
const loginPassword = ref('')

// Register
const regName = ref('')
const regEmail = ref('')
const regPhone = ref('')
const regPassword = ref('')
const regPassword2 = ref('')

const close = () => emit('close')

const handleLogin = () => {
  alert('Вход выполнен')
  close()
}

const handleRegister = () => {
  if (regPassword.value !== regPassword2.value) {
    alert('Пароли не совпадают')
    return
  }
  alert('Регистрация успешна')
  close()
}
</script>

<style scoped>
.auth-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 2000;
  display: none;
  align-items: center;
  justify-content: center;
}
.auth-overlay.active { display: flex; }

.auth-modal {
  width: 440px;
  max-height: 90vh;
  background: white;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}

.auth-top {
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
}
.auth-close {
  font-size: 24px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
}

.auth-tabs {
  display: flex;
  border-bottom: 1px solid #e8edf3;
}
.auth-tab {
  flex: 1;
  padding: 14px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  cursor: pointer;
  transition: all 0.2s;
}
.auth-tab.active {
  color: #2196F3;
  border-bottom: 2px solid #2196F3;
}

.auth-form {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.auth-form input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d0d7e0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}
.auth-form input:focus {
  border-color: #2196F3;
}
.auth-forgot {
  font-size: 13px;
  color: #2196F3;
  text-decoration: none;
  text-align: right;
}
.auth-submit {
  width: 100%;
  padding: 14px;
  background: #437FC8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.auth-submit:hover {
  background: #3669b0;
}

/* Адаптив */
@media (max-width: 480px) {
  .auth-modal {
    width: 90%;
    border-radius: 12px;
  }
  .auth-form {
    padding: 16px;
    gap: 10px;
  }
}
</style>