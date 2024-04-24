<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="left-side">
      <div class="left-button"></div>
    </div>
    <div class="cards">
      <div v-for="(user, index) in users" :key="user.uid">
        <dogCard v-if="index < 3" :name="user.name" :uid="user.uid" />
      </div>
    </div>
    <div class="bottom-button">
      <button @click="sliceUsers">Get Data</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import dogCard from '../components/DogCard.vue'
import Header from '../components/GlobalHeader.vue'
import { getAuth } from 'firebase/auth'
import { ref, onBeforeMount } from 'vue'
import { getFirestore, collection, query, limit, getDocs } from 'firebase/firestore'

interface User {
  name: string
  uid: string
}

let users = ref<User[]>([])
const db = getFirestore()
const sliceUsers = () => {
  users.value = users.value.slice(3)
  if (users.value.length === 0) {
    getDataFromFirestore()
  }
  return
}

const user = getAuth().currentUser
const getDataFromFirestore = async () => {
  if (!user) {
    return
  }

  try {
    // Reference to the collection
    const collectionRef = collection(db, 'profiles')

    // Query the collection (optional, you can directly pass collectionRef to getDocs)
    const q = query(collectionRef, limit(30))

    // Get documents from the collection
    const querySnapshot = await getDocs(q)

    //clear list

    // Extract data from each document
    querySnapshot.forEach((doc) => {
      users.value.push({ name: doc.data().name, uid: doc.data().uid })
    })
  } catch (error) {
    console.error('Error getting documents:', error)
  }
}

// Call the function to get data
onBeforeMount(() => {
  getDataFromFirestore()
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  background-color: #7c4242;
}

.header {
  width: 100%;
  background-color: #7c4242;
  color: #fff;
  display: flex;
  padding: bottom 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.cards {
  display: flex;
  gap: 50px;
  margin-top: -140px;
}

.bottom-button button {
  background: #7800ad;
  color: #fff;
  border: 0;
  outline: 0;
  padding: 7px 20px;
  border-radius: 30px;
  font-size: 14px;
  margin-right: 25px;
  box-shadow: 0 8px 10px rgba(120, 0, 173, 0.3);
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 1;
  margin-bottom: 40px;
  transform: translateX(-50px);
}
</style>
