import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar estilos do Gov.br DS
import '@govbr-ds/core/dist/core-tokens.min.css'
import '@govbr-ds/core/dist/core.min.css'

// Importar variáveis de tema (Dark Mode)
import '@/styles/theme-variables.css'

import { defineCustomElements } from '@govbr-ds/webcomponents/dist/loader'

// Aplicar tema salvo antes de renderizar (evita flash)
const saved = localStorage.getItem('theme')
if (saved) {
  document.documentElement.setAttribute('data-theme', saved)
  document.documentElement.style.colorScheme = saved
}

const app = createApp(App)

app.use(router)
defineCustomElements()

app.mount('#app')
