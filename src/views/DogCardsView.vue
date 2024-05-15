<template>
  <div class="background">
    <div class="container">
      <div class="header">
        <Header />
      </div>
      <div class="left-side">
        <div class="left-button"></div>
      </div>

      <div class="cards">
        <div v-for="(user, index) in visibleUsers" :key="index" class="card-container">
          <dogCard :name="user" :uid= "getKeyAtIndex(index)"/>
        </div>
      </div>

      <div class="bottom-button">
        <button @click="sliceUsers">Get Data</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dogCard from '../components/DogCard.vue'
import Header from '../components/GlobalHeader.vue'
import { getAuth } from 'firebase/auth'
import { ref, onBeforeMount, computed } from 'vue'
import { getFirestore, collection, query, limit, getDocs } from 'firebase/firestore'

const users = ref(new Map<string, string>())
const db = getFirestore()
const user = getAuth().currentUser

const getKeyAtIndex = (index: number): string | undefined => {
  const keysArray = Array.from(users.value.keys())
  return keysArray[index]
}

const visibleUsers = computed(() => {
  if (window.innerWidth < 800) {
    return Array.from(users.value.values()).slice(0, 1)
  } else if (window.innerWidth < 1300) {
    return Array.from(users.value.values()).slice(0, 2)
  } else {
    return Array.from(users.value.values()).slice(0, 3)
  }
})

const loadMore = async () => {
  if (!user) return

  try {
    const collectionRef = collection(db, 'profiles')
    const q = query(collectionRef, limit(30))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      let data = doc.data()
      users.value.set(doc.id, data.name)
    })
  } catch (error) {
    console.error('Error getting documents:', error)
  }
}
const removeFirstUser = () => {
  const firstKey = users.value.keys().next().value
  if (firstKey !== undefined) {
    users.value.delete(firstKey)
  }
}

const sliceUsers = () => {
  if (window.innerWidth < 800) {
    removeFirstUser()
  } else if (window.innerWidth < 1300) {
    removeFirstUser()
    removeFirstUser()
  } else {
    removeFirstUser()
    removeFirstUser()
    removeFirstUser()
  }

  if (users.value.size === 0) {
    loadMore()
  }
}

onBeforeMount(() => {
  loadMore()
})

window.addEventListener('resize', () => {
  if (window.innerWidth < 800 && visibleUsers.value.length > 1) {
    removeFirstUser()
  } else if (window.innerWidth < 1300 && visibleUsers.value.length > 2) {
    removeFirstUser()
    removeFirstUser()
  }
})
</script>

<style scoped>
.background {
  min-height: 100vh;
  background: url(../assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.header {
  width: 100%;
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
