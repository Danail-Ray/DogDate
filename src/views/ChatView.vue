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
            </div>
          </div>
          <div class="chat">
            <div class="top-section">
              <div class="username">
                <h1>Username</h1>
                <div class="is-active"></div>
              </div>
            </div>
            <div class="middle-section"></div>
            <div class="bottom-section">
              <div class="input-container">
                <div class="upload-foto">
                  <div class="icons">
                    <i class="pi pi-image" style="color: slateblue"></i>
                  </div>
                </div>
                <div class="input-text">
                  <input type="text" placeholder="Search fruits..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/GlobalHeader.vue'
// import { ref } from 'vue'
// import { getAuth } from 'firebase/auth'
import 'primeicons/primeicons.css'

// const auth = getAuth()
// const user = ref(auth.currentUser)
// const username = user.value?.displayName || ref(localStorage.getItem('displayName') || '')


</script>

<style scoped>
.input-text {
  background-color: rgb(223, 246, 255);
  position: relative; /* Ensure relative positioning for the transform */
  transform: translate(500px, -30px); /* Move the item 20px to the right and 20px up */
}

.upload-foto {
  width: 100%;
  background-color: rgb(223, 246, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0px, 20px); /* Move the item 20px to the right and 20px up */
}

.top-section {
  width: 100%;
  height: 95px;
  background-color: rgb(223, 246, 255);
}

.middle-section {
  width: 100%;
  height: 620px;
  background-color: rgb(255, 255, 255);
}

.bottom-section {
  width: 100%;
  height: 212px;
  background-color: rgb(223, 246, 255);
  display: flex;
  flex-direction: row;
}

.is-active {
  width: 10px;
  height: 10px;
  background-color: rgb(6, 224, 6);
  border-radius: 50%;
  translate: 50%;
  transform: translate(50%, 50%);
}

.username {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 400px;
  padding-left: 150px;
  color: rgb(0, 0, 0);
}

.username H1 {
  color: black; /* Change text color of input to black */
}

.dummy-chat {
  height: 100px;
  background-color: rgb(55, 200, 248);
  margin: 1px;
}

.open-chats {
  width: 100%;
  background-color: rgb(146, 220, 247);
  display: flex;
  flex-direction: column;
}

input[type='text'] {
  color: black; /* Change text color of input to black */
}

.searchbar {
  width: 100%;
  height: 95px;
  background-color: rgb(197, 240, 255);
  justify-content: center;
  align-items: center;
  display: flex;
}

.chat {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
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
