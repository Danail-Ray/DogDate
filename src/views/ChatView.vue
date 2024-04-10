<template>
  <div class="background">
    <div class="sections">
      <div class="header">
        <Header></Header>
      </div>

      <div class="content">
        <div class="left-handle">
          <div class="icon-container">
            <div class="icons">
              <i class="pi pi-comments" style="color: slateblue"></i>
            </div>
            <div class="icons">
              <i class="pi pi-phone" style="color: slateblue"></i>
            </div>
            <div class="icons">
              <i class="pi pi-user" style="color: slateblue"></i>
            </div>
            <div class="icons">
              <i class="pi pi-bell" style="color: slateblue"></i>
            </div>
            <div class="bottom-part">
              <div class="icons">
                <i class="pi pi-cog" style="color: slateblue"></i>
              </div>
              <div class="icons">
                <i class="pi pi-sign-out" style="color: slateblue"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="main-chats">
          <div class="friends">
            <div class="searchbar">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <input type="text" placeholder="Search fruits..." />
            </div>
            <div class="open-chats" id="openChats">
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
              <div class="dummy-chat"></div>
            </div>
          </div>
          <div class="chat"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/GlobalHeader.vue'
import { ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { onMounted, onActivated } from 'vue'

import 'primeicons/primeicons.css'

// const auth = getAuth()
// const user = ref(auth.currentUser)
// const username = user.value?.displayName || ref(localStorage.getItem('displayName') || '')

//NEEDS FIX: After new chat has been started, make it bigger
onMounted(() => {
  // This code will execute after the component has been mounted

  // Get the parent element
  const container = document.getElementById('openChats')

  // Check if the container exists
  if (container) {
    // Count the number of child elements
    const numberOfChildren = container.children.length
    if (numberOfChildren > 20) {

      const currentHeight = container.clientHeight
      console.log(`Height of container: ${currentHeight}px`)
      const newHeight = currentHeight  + (numberOfChildren - 20) * 100
      container.style.height = `${newHeight}px`
      console.log(`Height of container: ${container.style.height}`)
    }
    console.log(`Number of child elements: ${numberOfChildren}`)
  } else {
    console.log('Parent element not found')
  }
})
</script>

<style scoped>
.dummy-chat {
  height: 100px;
  background-color: rgb(55, 200, 248);
  margin: 1px;
}

.open-chats {
  height: 1080px;
  width: 100%;
  background-color: rgb(146, 220, 247);
  display: flex;
  flex-direction: column;
}

.searchbar input[type='text'] {
  color: black; /* Change text color of input to black */
}

.searchbar {
  width: 100%;
  height: 10%;
  background-color: rgb(197, 240, 255);
  justify-content: center;
  align-items: center;
  display: flex;
}

.chat {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.friends {
  width: 25%;
  height: 89.4%;
  background-color: rgb(217, 240, 248);
  overflow: auto;
}

.content {
  display: flex;
  justify-content: left;
  align-items: left;
  height: 100vh;
  width: 100%;
}

.main-chats {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
}

.sections {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.bottom-part {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.header {
  position: relative;
  background-color: rgb(17, 62, 65);
  z-index: 99;
}

.background {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-handle {
  width: 5%;
  height: 89.4%;
  background-color: rgb(10, 46, 48);
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.icons {
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  flex-direction: column;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  z-index: 0;
}
</style>
