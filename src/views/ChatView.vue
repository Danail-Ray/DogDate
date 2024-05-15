<template>
  <div class="background">
    <Header />
    <!-- Person selector: this contains buttons for user to select whether to chat as John or Jane -->
    <div class="content">
      <div class="person-selector"></div>
      <div class="chat-container">
        <h2 class="chat-header"></h2>
        <div class="chat-messages">
          <!-- <div class="message blue-bg">
            <div class="message-sender">John</div>
            <div class="message-text">Hey Jane, what's up?</div>
            <div class="message-timestamp">10:30 AM</div>
          </div>

          <div class="message gray-bg">
            <div class="message-sender">Jane</div>
            <div class="message-text">Not much, just living the dream. How about you?</div>
            <div class="message-timestamp">10:35 AM</div>
          </div> -->
        </div>
        <div class="chat-input-form">
          <input type="text" class="chat-input" required placeholder="Type here..." />
          <button class="button send-button" @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
  orderBy,
  query,
  deleteDoc
} from 'firebase/firestore'
import { onBeforeMount, onMounted, ref } from 'vue'
import Header from '../components/GlobalHeader.vue'

const auth = getAuth()
const user = auth.currentUser
// Get the current user's UID
const currentUserUID = user?.uid
let chatPartners = new Map<string, string>()
const db = getFirestore()
const currentChatPartnerUIDS = ref(new Set<string>())

async function getData(currentUserUID: string | undefined) {
  try {
    // Get a reference to the document
    const q = collection(db, 'Messages', `${currentUserUID}`, 'ChatPartners')
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      let chattingpartnerUID = doc.id
      let chattingPartnerUsername = doc.data().name.toString()
      chatPartners.set(chattingPartnerUsername, chattingpartnerUID)
      currentChatPartnerUIDS.value.add(chattingpartnerUID)
    })
  } catch (error) {
    console.error('Error getting document:', error)
  }
  addUserButtons()
}
let activeButton: HTMLButtonElement | null = null // Keep track of the active button

const addUserButtons = (): void => {
  const iterator = chatPartners.entries()
  const personSelector = document.querySelector('.person-selector')
  if (!personSelector) return // Check if personSelector exists
  personSelector.innerHTML = ''

  for (const [key, value] of iterator) {
    const newButton = document.createElement('button')
    newButton.classList.add('person-selector-button')
    newButton.classList.add('unread-messages')
    newButton.textContent = key // Use the value as button text
    newButton.dataset.key = value // Optionally store the key as a data attribute
    newButton.setAttribute('data-v-a497a79e', '') // Set the data attribut

    newButton.addEventListener('click', (event) => {
      if (activeButton) {
        // Deactivate the previously active button
        activeButton.classList.remove('active')
      }
      // Activate the clicked button
      newButton.classList.add('active')
      // Update the activeButton reference
      activeButton = newButton

      const clickedButton = event.target as HTMLButtonElement
      let partnerUID = clickedButton.dataset.key // Retrieve the key of the clicked button
      // let buttonValue = clickedButton.textContent // Retrieve the value of the clicked button

      //get the chat messages
      getChatMessages(currentUserUID, partnerUID)
      // Update the chat header
      document.querySelector('.chat-header')!.textContent = `${key}`
    })
    document.querySelector('.person-selector')?.appendChild(newButton)
  }
}

async function getChatMessages(
  currentUserUID: string | undefined,
  chattingPartnerUID: string | undefined
) {
  try {
    const q = query(
      collection(
        db,
        'Messages',
        `${currentUserUID}`,
        'ChatPartners',
        `${chattingPartnerUID}`,
        'Messages'
      ),
      orderBy('date', 'asc')
    )

    const querySnapshot = await getDocs(q)
    // querySnapshot.forEach((doc) => {
    //   const message = doc.data()
    // })

    const chatMessages = document.querySelector('.chat-messages')
    if (!chatMessages) return

    chatMessages.innerHTML = '' // Clear the chat messages
    querySnapshot.forEach((doc) => {
      const message = doc.data()
      const newMessage = document.createElement('div')
      newMessage.classList.add('message')
      newMessage.classList.add(message.senderUID === currentUserUID ? 'blue-bg' : 'gray-bg')
      newMessage.setAttribute('data-v-a497a79e', '') // Set the data attribute
      newMessage.innerHTML = `
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.message}</div>
        <div class="message-date">${message.formattedDate}</div>
      `
      chatMessages.appendChild(newMessage)
      chatMessages.scrollTop = chatMessages.scrollHeight
    })

    //fix this shit
    const unreadMessages = query(collection(db, 'Messages', `${currentUserUID}`, 'unReadMessages'))
    getDocs(unreadMessages).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const message = doc.data()
        console.log('message ' + message)
        if (chattingPartnerUID === message.senderUID) {
          deleteDoc(doc.ref)
        }
      })
    })
  } catch (error) {
    console.error('Error getting document:', error)
  }
}
//only create it once, so do a chjeck here
async function createSubcollection(
  documentPath: string,
  chattingPartnerUID: string | undefined,
  username: string | null | undefined
) {
  const db = getFirestore()
  try {
    // Define the path to the subcollection

    // Use setDoc to create a document at the specified path
    await setDoc(doc(db, documentPath), {
      name: username
    })
    console.log('Subcollection created successfully')
  } catch (error) {
    console.error('Error creating subcollection:', error)
  }
}

function sendMessage(event: Event): void {
  event.preventDefault()
  const chatInput = document.querySelector('.chat-input') as HTMLInputElement
  const message = chatInput.value
  chatInput.value = ''
  const currentDate = new Date()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

  if (!message) return

  const chatMessages = document.querySelector('.chat-messages')
  if (!chatMessages) return

  const newMessage = document.createElement('div')
  newMessage.classList.add('message')
  newMessage.classList.add('blue-bg')
  newMessage.setAttribute('data-v-a497a79e', '') // Set the data attribute
  newMessage.innerHTML = `
    <div class="message-sender">${auth.currentUser?.displayName}</div>
    <div class="message-text">${message}</div>
    <div class="message-date">${formattedTime}</div>
  `
  chatMessages.appendChild(newMessage)
  chatMessages.scrollTop = chatMessages.scrollHeight

  const documentPath = `Messages/${activeButton?.dataset.key}/ChatPartners/${currentUserUID}`
  createSubcollection(documentPath, activeButton?.dataset.key, user?.displayName)

  // Send the message to the database
  const collectionref = collection(
    db,
    'Messages',
    `${currentUserUID}`,
    'ChatPartners',
    `${activeButton?.dataset.key}`,
    'Messages'
  )
  addDoc(collectionref, {
    message: message,
    senderUID: currentUserUID,
    sender: auth.currentUser?.displayName,
    date: currentDate,
    formattedDate: formattedTime
  })

  //add message to counter part
  const collectionrefChatPartner = collection(
    db,
    'Messages',
    `${activeButton?.dataset.key}`,
    'ChatPartners',
    `${currentUserUID}`,
    'Messages'
  )
  addDoc(collectionrefChatPartner, {
    message: message,
    senderUID: currentUserUID,
    sender: auth.currentUser?.displayName,
    date: currentDate,
    formattedDate: formattedTime
  })

  //add the message to unread messages
  const unReadChatPartner = collection(
    db,
    'Messages',
    `${activeButton?.dataset.key}`,
    'unReadMessages'
  )
  addDoc(unReadChatPartner, {
    message: message,
    senderUID: currentUserUID,
    sender: auth.currentUser?.displayName,
    date: currentDate,
    formattedDate: formattedTime,
    reciever: activeButton?.dataset.key
  })
}

const markUserWithUnreadMessages = () => {
  if (!currentUserUID) return
  const personSelector = document.querySelector('.person-selector')
  if (!personSelector) return
  const buttons = personSelector.querySelectorAll('button')
  buttons.forEach((button) => {
    const partnerUID = button.dataset.key
    console.log('partnerUID ' + partnerUID)
    const unreadMessages = collection(db, 'Messages', `${currentUserUID}`, 'unReadMessages')
    const q = query(unreadMessages, orderBy('date', 'asc'))
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const message = doc.data()

        if (activeButton?.dataset.key === message.senderUID) {
          getChatMessages(currentUserUID, activeButton?.dataset.key)
          deleteDoc(doc.ref)
        }

        //Add marker to the button
      })
    })
  })
}

onMounted(() => {
  if (!currentUserUID) return
  getData(currentUserUID)
  const q = collection(db, 'Messages', `${currentUserUID}`, 'ChatPartners')
  const unsubscribeChatPartners = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added' || change.type === 'removed') {
        getData(currentUserUID)
      }
    })
  })

  const unreadMessages = collection(db, 'Messages', `${currentUserUID}`, 'unReadMessages')
  const unsubscribeUnreadMessages = onSnapshot(unreadMessages, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added' || change.type === 'removed') {
        markUserWithUnreadMessages()
      }
    })
  })

  // Unsubscribe when component is unmounted
  onBeforeMount(() => {
    if (!currentUserUID) return
    unsubscribeChatPartners()
    unsubscribeUnreadMessages()
  })
})
</script>

<style scoped>
.background {
  min-height: 100vh;
  background: url(../assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.content {
  display: flex;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}

.button {
  border: none;
  padding: 0.625em;
  border-radius: 0.5em;
  cursor: pointer;
}

.button:hover {
  filter: brightness(0.9);
}

.button:active {
  transform: translateY(2px);
}

.person-selector {
  background: #15202b;
  font-family: 'Roboto', sans-serif;
  border-radius: 0.5em;
  padding: 0.5em 1.25em;
  margin: auto;
  max-width: 25em;
  height: 37.5em;
  box-shadow: 0 0 1.25em 0.5em #c3c3c333;
}

.person-selector-button {
  width: 100%;
  background-color: #15202b;
  color: #fff;
  font-size: 2em;
}

.active {
  background: #08529d;
  box-shadow: 0 0 0.5em 0.1em #c3c3c333;
}

.chat-container {
  background: #15202b;
  font-family: 'Roboto', sans-serif;
  border-radius: 0.5em;
  padding: 0.5em 1.25em;
  margin: auto;
  max-width: 37.5em;
  min-width: 45em;
  height: 37.5em;
  box-shadow: 0 0 1.25em 0.5em #c3c3c333;
  margin-left: -10em;
}

.chat-header {
  margin-bottom: 1em;
  color: #fff;
}

.chat-header h2 {
  font-size: 1.25em;
  font-weight: bold;
}

.chat-messages {
  height: 23em;
  overflow-y: scroll;
}

.chat-messages::-webkit-scrollbar {
  display: none;
}

.message {
  padding: 0.625em;
  border-radius: 1em;
  margin-bottom: 0.625em;
  display: flex;
  flex-direction: column;
  color: #fff;
}

.message-sender {
  font-weight: bold;
  margin-bottom: 0.31em;
}

.message-text {
  font-size: 1em;
  margin-bottom: 0.31em;
  word-wrap: break-word;
}

.message-timestamp {
  font-size: 0.75em;
  text-align: right;
}

.blue-bg {
  background-color: #1c9bef;
}

.gray-bg {
  background-color: #3d5365;
}

.chat-input-form {
  display: flex;
  align-items: center;
  margin-top: 2em;
  gap: 0.625em;
}

.chat-input {
  padding: 0.625em;
  border: none;
  border-radius: 0.5em;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1em;
  flex-grow: 1;
}

.send-button {
  background-color: #1c9bef;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
}

.clear-chat-button {
  display: block;
  margin: auto;
}
</style>
