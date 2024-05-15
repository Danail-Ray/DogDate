<template>
  <div class="profile-container">
    <h2>Profil ändern</h2>
    <form @submit.prevent="updateProfileFireBase">
      <div class="form-group">
        <label for="username">Benutzername</label>
        <input type="text" id="username" v-model="user.username" />
      </div>
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div class="form-group">
        <label for="bio">Bio</label>
        <textarea id="bio" v-model="user.bio"></textarea>
      </div>
      <button type="submit">Profil aktualisieren</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth, updateProfile } from 'firebase/auth'
import { getDoc } from 'firebase/firestore'

const db = getFirestore()
const currentUser = getAuth().currentUser
const username = currentUser?.displayName?.toString() || ''
const userUID = currentUser?.uid
const email = currentUser?.email
const userBio = ref('') // Hier wird die Benutzer-Bio gespeichert

// Benutzerdaten aus der Firestore-Datenbank abrufen
const getUserData = async () => {
  // Hier würdest du eine API-Anfrage senden, um die Benutzerdaten abzurufen.

  const ref = doc(db, 'profiles', `${userUID}`)
  const docSnap = await getDoc(ref)

  if (docSnap.exists()) {
    userBio.value = docSnap.data().bio.toString()
    user.bio = userBio.value
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

// Benutzerdaten-Interface
interface User {
  username: string
  email: string
  bio: string
}

// Initialisierung des Benutzerobjekts
const user = reactive<User>({
  username: '',
  email: '',
  bio: ''
})

// Profil-Update-Methode
const updateProfileFireBase = async () => {
  // Hier würdest du eine API-Anfrage senden, um das Benutzerprofil zu aktualisieren. Merge the new data with the existing data
  const docRef = doc(db, 'profiles', `${userUID}`)
  await setDoc(
    docRef,
    {
      // Don't change these yet, need to cahnge the user object first. Change username to not be unique, and actually change the displayname.
      name: user.username,
      // email: user.email,
      bio: user.bio
    },
    { merge: true }
  )

  //Change the name in auth as well
  if (currentUser) {
    updateProfile(currentUser, {
      displayName: user.username
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch(() => {
        // An error occurred
        // ...
      })
    localStorage.setItem('displayName', user.username)
    console.log('Profil aktualisiert:', user)
  }

  localStorage.setItem('displayName', user.username)
  console.log('Profil aktualisiert:', user)
}

// Daten laden, wenn die Komponente gemountet wird (dies ist nur ein Beispiel)
user.username = username?.toString() || ''
user.email = email?.toString() || ''

onMounted(() => {
  getUserData()
})
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #552727;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  color: black;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  color: black;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
