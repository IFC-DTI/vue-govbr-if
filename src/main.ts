import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@govbr-ds/core/dist/core-tokens.min.css'
import '@govbr-ds/core/dist/core.min.css'

import { defineCustomElements } from '@govbr-ds/webcomponents/dist/loader'
const app = createApp(App)

app.use(router)
defineCustomElements()

app.mount('#app')
