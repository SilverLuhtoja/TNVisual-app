import './assets/tailwind.css'
import './assets/main.css'
import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from  './i18n.js'

const app = createApp(App)

const state = reactive({
    isAdmin: false
})

app.provide('state', state)

app.use(router)
app.use(i18n)

app.mount('#app')
