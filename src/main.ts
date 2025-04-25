import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue/client'

const app = createApp(App)
app.use(createHead())
app.use(router)
app.mount('#app')
