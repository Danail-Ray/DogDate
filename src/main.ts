import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css' // Core CSS
import 'primevue/resources/themes/aura-dark-green/theme.css' // Theme
import 'primevue/resources/themes/aura-light-green/theme.css' // Theme

//Firebase
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from '../data'; // Import the Firebase configuration



// Initialize Firebase

const init = initializeApp(firebaseConfig)
// const analytics = getAnalytics(init);

const auth = getAuth(init)
onAuthStateChanged(auth, (user) => {
  if (user) {
    //user.refreshToken
    createApp(App).use(createPinia()).use(router).use(PrimeVue).mount('#app')
    console.log('User is signed in:', user)
  } else {
    // // User is signed out.
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.use(PrimeVue)
    app.mount('#app')
    console.log('User is signed out')
  }
})

export default auth
export { auth }
