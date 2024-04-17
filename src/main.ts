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
import { getFirestore } from 'firebase/firestore'; // Import getFirestore to initialize Firestore

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCULk4mrnOS3rT257MbD1ANMcupCRzizn4',

  authDomain: 'dogdatealpha.firebaseapp.com',

  projectId: 'dogdatealpha',

  storageBucket: 'dogdatealpha.appspot.com',

  messagingSenderId: '759321408231',

  appId: '1:759321408231:web:68427289b219aeb2186842',

  measurementId: 'G-R7LRHWR5VF'
}

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
export const db = getFirestore(init);