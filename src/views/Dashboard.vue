<template>
  <div class="backdrop">
    <h2>Successfully logged in</h2>
    <p v-if="user">Current User: {{ displayName }}</p>
    <div class="button">
      <button @click="signOutUser">Sign Out</button>
    </div>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'

import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()
const user = ref(auth.currentUser)
const displayName = user.value?.displayName

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      user.value = null
      router.push('/')
    })
    .catch((error: { message: any }) => {
      console.error('Sign out error:', error.message)
    })
}
</script>

<style scoped>
h2 {
  color: #5e1a1a;
}

.backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
  flex-direction: column;
}

nav {
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px 50px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5e1a1a;
}

.button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
}
</style>
