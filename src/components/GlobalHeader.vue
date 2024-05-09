<template>
  <div class="header">
    <h1 class="logo" @click="landingPage">DogDate</h1>
    <nav class="naviagtion">
      <template v-if="!locData && user">
        <button class="logout-button" @click="shareLocation">Share Location?</button>
      </template>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/cards">Cards</RouterLink>
      <!-- <RouterLink to="/search">Search</RouterLink> -->
      <RouterLink to="/chat">Chats</RouterLink>
      <template v-if="user">
        <RouterLink :to="`/dashboard/${displayName}`" @click="reloadDashboardPage"
          >My Profile</RouterLink
        >
      </template>
      <template v-else> </template>
      <template v-if="user">
        <button class="logout-button" @click="signOutUser">Log out</button>
      </template>

      <template v-if="!user">
        <a @click="toggleLoginSignup"> <i class="pi pi-user"></i>Account </a>
      </template>
    </nav>
  </div>
  <div class="login-signup-container" v-if="!user">
    <LoginSignupContainer v-if="showLoginSignup" @close="showLoginSignup = false" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LoginSignupContainer from '../components/LoginSignupContainer.vue'

const showLoginSignup = ref(false)

const toggleLoginSignup = () => {
  showLoginSignup.value = !showLoginSignup.value
}

import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, setDoc, GeoPoint } from 'firebase/firestore'

const auth = getAuth()
const user = ref(auth.currentUser)
const router = useRouter()
const displayName = user.value?.displayName

const landingPage = () => {
  router.push('/')
}

const reloadDashboardPage = () => {
  router
    .push({ name: 'dashboard', params: { username: displayName, uid: user.value?.uid } })
    .then(() => {
      // Reload the page after navigation is complete
      window.location.reload()
    })
}

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      user.value = null
      router.push('/')
    })
    .catch((error) => {
      console.error('Sign out error:', error.message)
    })
}

const db = getFirestore()
const userUID = user.value?.uid

//check local storage if location has been sent yet
const locData = ref(localStorage.getItem('location'))

const collectionRef = doc(db, 'profiles', `${userUID}`)
const currentLocation = ref<{ latitude: number; longitude: number } | null>(null)
const getCurrentLocation = async (): Promise<void> => {
  if ('geolocation' in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      currentLocation.value = { latitude, longitude }
    } catch (error) {
      console.error('Error getting location:', error)
    }
  } else {
    console.error('Geolocation is not supported.')
  }
}

const shareLocation = () => {
  getCurrentLocation()
  const location1 = currentLocation.value
  if (location1) {
    const { latitude, longitude } = location1
    const geoPoint = new GeoPoint(latitude, longitude)
    collectionRef
    setDoc(
      doc(db, 'profiles', `${userUID}`),
      {
        location: geoPoint
      },
      { merge: true }
    )
      .then(() => {
        console.log('Location shared successfully!')
        console.log(location1)
        const locationValues = {
          location: location1
        }
        const jsonData = JSON.stringify(locationValues)
        localStorage.setItem('location', jsonData)
        console.log(locData)
        document.cookie = `location=${encodeURIComponent(jsonData)}; expires=${'31.12.2025'}; path=/`
        location.reload()
      })
      .catch((error: { message: any }) => {
        console.error('Error sharing location:', error.message)
      })
  }
}
</script>

<style scoped>
.naviagtion a {
  cursor: pointer;
}

.header {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}

.logout-button {
  background-color: transparent;
  border: 2px solid #fff;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;
  padding: 3px;
}

.logo {
  font-size: 2em;
  color: #fff;
  user-select: none;
  font-family: var(--Lora);
  cursor: pointer;
}

.naviagtion a {
  position: relative;
  font-size: 1.1em;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
  font-family: var(--Gilroy);
  font-weight: 700;
}

.naviagtion a:hover,
.naviagtion a:hover .pi {
  color: #fbd784;
}

.naviagtion a .pi {
  color: #fff;
  margin-right: 10px;
}

.naviagtion a::after {
  content: '';
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background: #fbd784;
  bottom: -6px;
  border-radius: 5px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.5s;
}

.naviagtion a:hover::after {
  transform-origin: left;
  transform: scaleX(1);
  color: #fbd784;
}

.naviagtion .account-button {
  width: 130px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #fff;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;
}

.naviagtion .account-button:hover {
  background-color: #fff;
  color: #162938;
}

.login-signup-container {
  z-index: 99;
  position: fixed;
  top: 30%;
  /* Place it 50% from the top of the viewport */
  left: 50%;
  /* Place it 50% from the left of the viewport */
  transform: translate(-50%, -50%);
  /* Center it exactly in the middle */
}

@media screen and (min-width: 2300px) {
  .header {
    width: calc(100% - 600px);
    /* Subtract 200px from both sides */
    padding: 20px 100px;
    margin-left: 300px;
    /* Add 200px margin on the left */
    margin-right: 300px;
    /* Add 200px margin on the right */
  }
}
</style>
