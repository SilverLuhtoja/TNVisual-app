import './assets/tailwind.css'
import './assets/main.css'
import { createApp, reactive, provide } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const state = reactive({
    isAdmin: false
})

app.provide('state', state)

app.use(router)

app.mount('#app')
