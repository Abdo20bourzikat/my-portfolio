import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/boot.css'
import './assets/js/boot.js'
import './assets/styles/style.css'
createApp(App).use(router).mount('#app')
