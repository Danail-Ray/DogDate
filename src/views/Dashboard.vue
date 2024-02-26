<template>
    <div>
        <h2> Successfully logged in</h2>
        <p v-if="user"> Current User: {{ user.email }}</p>
        <button @click="signOutUser">Sign Out</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()
const user = ref(auth.currentUser)

const signOutUser = () => {
    signOut(auth)
        .then(() => {
            user.value = null
            router.push('/')
        })
        .catch(error => {
            console.error('Sign out error:', error.message)
        })
}


</script>

<style scoped>
h2 {
    color: #5e1a1a;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #222;
}
</style>