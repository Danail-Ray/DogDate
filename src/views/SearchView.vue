<template>
  <div class="backdrop">
    <nav>
      <h2>Search</h2>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/chat">Add Friend! Start chatting...</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </nav>
    <!-- Display the users -->
    <div class="users-list">
      <h3>Users</h3>
      <ul>
        <div class="dogCards">
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection} from 'firebase/firestore'
import { getDocs, query } from 'firebase/firestore'


const db = getFirestore()
const users = ref<string[]>([])
const user = getAuth().currentUser

// Function to get data from Fires  tore
const getDataFromFirestore = async () => {
  if (!user) {
    return
  }

  try {
    // Reference to the collection
    const collectionRef = collection(db, 'profiles')

    // Query the collection (optional, you can directly pass collectionRef to getDocs)
    const q = query(collectionRef)

    // Get documents from the collection
    const querySnapshot = await getDocs(q)

    // Extract data from each document
    querySnapshot.forEach((doc) => {
      users.value.push(doc.data().name)
      console.log(doc.id, ' => ', doc.data())
    })
  } catch (error) {
    console.error('Error getting documents:', error)
  }
}

// Call the function to get data
getDataFromFirestore()
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.users-list {
  background-color: #000000;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
