import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Import your custom CSS
import router from './router'

import Button from 'primevue/button' // Import Button component
import 'primevue/resources/primevue.min.css' // Core CSS
import 'primevue/resources/themes/aura-dark-green/theme.css' // Theme
import 'primevue/resources/themes/aura-light-green/theme.css' // Theme

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('PrimeButton', Button) // Register Button component globally

app.mount('#app')
