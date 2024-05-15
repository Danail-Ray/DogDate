<template>
  <div class="background">
    <Header></Header>
    <div class="profile-card-bg">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="profile text-center">
            <div class="avatar" v-if="viewedUserUID === currentUserUID">
              <img
                v-if="profileImg"
                :src="profileImg"
                alt="Profile Image"
                class="img-raised rounded-circle show-pointer"
                style="width: 150px; height: auto"
                @click="uploadProfilePicture"
              />
              <img
                v-else
                src="https://preview.redd.it/transform-your-selfie-into-a-stunning-ai-avatar-with-stable-v0-t1mdnkadob6a1.png?width=1024&format=png&auto=webp&s=07b4edf62cd53cbd30886482090cb7e7c9c16372"
                alt="Circle Image"
                class="img-raised rounded-circle show-pointer"
                style="width: 150px; height: auto"
                @click="uploadProfilePicture"
              />
              <input
                v-if="viewedUserUID === currentUserUID"
                type="file"
                accept="image/*"
                style="display: none"
              />
            </div>
            <div class="avatar" v-else>
              <img
                v-if="profileImg"
                :src="profileImg"
                alt="Profile Image"
                class="img-raised rounded-circle"
                style="width: 150px; height: auto"
              />
              <img
                v-else
                src="https://preview.redd.it/transform-your-selfie-into-a-stunning-ai-avatar-with-stable-v0-t1mdnkadob6a1.png?width=1024&format=png&auto=webp&s=07b4edf62cd53cbd30886482090cb7e7c9c16372"
                alt="Circle Image"
                class="img-raised rounded-circle"
                style="width: 150px; height: auto"
              />
            </div>
            <div class="name">
              <h3 class="title">{{ username }}</h3>
              <h6>Senior Fullstack Developer</h6>
              <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"
                ><i class="fa fa-dribbble"></i
              ></a>
              <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"
                ><i class="fa fa-twitter"></i
              ></a>
              <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"
                ><i class="fa fa-pinterest"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="description text-center">
        <p>
          {{ userBio }}
        </p>
      </div>
      <div>
        <!-- <ProfileEditModal v-if="showModal" /> -->
      </div>
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto">
          <div class="profile-tabs">
            <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
              <li class="nav-item" v-if="username !== currentUser">
                <a class="nav-link" href="#favorite" role="tab" data-toggle="tab">
                  <i class="material-icons">favorite</i>
                  Favorite
                </a>
              </li>
              <li class="nav-item" v-else>
                <a class="nav-link" href="#studio" role="tab" data-toggle="tab">
                  <i class="material-icons">settings</i>
                  Edit Profile
                </a>
              </li>
              <li class="nav-item" v-if="username !== currentUser">
                <a class="nav-link" href="#works" role="tab" data-toggle="tab">
                  <i class="material-icons" @click="addChattingPartner">forum</i>
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-content tab-space">
        <div class="tab-pane active text-center gallery" id="studio">
          <div class="row">
            <div class="col-md-4">
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                  class="rounded img-fluid mb-3"
                />
              </div>
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80"
                  class="rounded img-fluid"
                />
              </div>
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80"
                  class="rounded img-fluid mb-3"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                  class="rounded img-fluid"
                />
              </div>
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80"
                  class="rounded img-fluid mb-3"
                />
              </div>
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80"
                  class="rounded img-fluid"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                  class="rounded img-fluid mb-3"
                />
              </div>
              <div class="p-3">
                <img
                  src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                  class="rounded img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Add other tab-panes as needed -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/GlobalHeader.vue'
import { db } from '@/main'

import { getAuth } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  getStorage,
  ref as refFirestore,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import ProfileEditModal from '@/components/ProfileEditModal.vue'

const currentUser = getAuth().currentUser?.displayName
let username = ref('')
const route = useRoute()
const router = useRouter()
const currentUserUID = getAuth().currentUser?.uid
let profileImg = ref('')
const viewedUserUID = ref('')
const showModal = ref(true)
const userBio = ref('')

watch(
  () => route.params.uid,
  (newUID) => {
    console.log(newUID)
    if (newUID) {
      if (Array.isArray(newUID)) {
        viewedUserUID.value = newUID[0]
      } else {
        viewedUserUID.value = newUID
      }
      getProfileData()
    }
  }
)

const getProfileData = async () => {
  try {
    //query the database to get the profile data
    const ref = doc(db, 'profiles', viewedUserUID.value)
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
      username.value = docSnap.data().name
      userBio.value = docSnap.data().bio
      console.log('Document data:', docSnap.data())
      getImage(viewedUserUID.value)
    } else {
      console.log('No such document!')
    }
  } catch (error) {
    console.error('Error getting document:', error)
  }
}

const getImage = async (UID: String) => {
  try {
    const docRef = doc(db, 'images', `${UID}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      profileImg.value = docSnap.data().profilePicture
    } else {
      profileImg.value = ''
      console.log('No such document!')
    }
  } catch (error) {
    console.error('Error getting document:', error)
  }
}

async function uploadProfilePicture() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*' // Accept only image files
  input.onchange = function (event) {
    const files = (event.target as HTMLInputElement).files
    //delete current image from database
    deletePreviousImageFromFirestore()

    if (files && files.length > 0) {
      const image = files[0]
      const storage = getStorage()
      const folderPath = `user_profiles/${currentUserUID}/profile_pictures/` // Specify folder path
      const imageRef = refFirestore(storage, `${folderPath}${image.name}`)

      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          setDoc(doc(db, 'images', `${currentUserUID}`), {
            username: username.value,
            profilePicture: downloadUrl,
            createdAt: new Date()
          })
          profileImg.value = downloadUrl
        })
      })
    }
  }
  input.click()
}

const deletePreviousImageFromFirestore = async () => {
  try {
    const docRef = doc(db, 'images', `${currentUserUID}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const previousImage = docSnap.data().profilePicture
      const storage = getStorage()
      const imageRef = refFirestore(storage, previousImage)
      deleteObject(imageRef)
        .then(() => {
          console.log('Previous image deleted successfully')
        })
        .catch((error) => {
          console.error('Error deleting previous image:', error)
        })
    } else {
      console.log('No such document!')
    }
  } catch (error) {
    console.error('Error getting document:', error)
  }
}

const addChattingPartner = () => {
  addChattingPartnerToDb(username.value).then(() => {
    router.push('/chat')
  })
}

const addChattingPartnerToDb = async (username: string) => {
  const currentUser = getAuth().currentUser
  const currentUserUID = currentUser ? currentUser.uid : ''

  checkAndCreateDocument(currentUserUID)
  const documentPath = `Messages/${currentUserUID}`
  createSubcollection(documentPath, viewedUserUID.value, username)
}

async function checkAndCreateDocument(currentUserUID: string) {
  try {
    // Get a reference to the document
    const docRef = doc(db, 'Messages', `${currentUserUID}`)

    // Fetch the document snapshot
    const docSnap = await getDoc(docRef)

    // Check if the document exists
    if (docSnap.exists()) {
      console.log('Document already exists:', docSnap.id)
    } else {
      // Document does not exist, create it
      await setDoc(docRef, {})
      console.log('Document created successfully')
    }
  } catch (error) {
    console.error('Error checking or creating document:', error)
  }
}

async function createSubcollection(
  documentPath: string,
  chattingPartnerUID: string,
  username: string
) {
  try {
    // Define the path to the subcollection
    const subcollectionPath = `${documentPath}/ChatPartners`

    // Use setDoc to create a document at the specified path
    await setDoc(doc(db, subcollectionPath, chattingPartnerUID), {
      name: username
    })
    console.log('Subcollection created successfully')
  } catch (error) {
    console.error('Error creating subcollection:', error)
  }
}

onMounted(() => {
  if (route.params.username) {
    if (Array.isArray(route.params.username)) {
      username.value = route.params.username[0]
    } else {
      username.value = route.params.username
    }
  }

  if (route.params.uid) {
    if (Array.isArray(route.params.uid)) {
      viewedUserUID.value = route.params.uid[0]
    } else {
      viewedUserUID.value = route.params.uid
    }
    getProfileData()
  }
})
</script>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  background: url(../assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.profile-card-bg {
  margin: 5vh 10vw 0 10vw;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 25px;
  background-color: #63636337;
}

.h6,
h6 {
  font-size: 0.75rem !important;
  font-weight: 500;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5em;
  text-transform: uppercase;
}

.name h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

a .material-icons {
  vertical-align: middle;
}

.fixed-top {
  position: fixed;
  z-index: 1030;
  left: 0;
  right: 0;
}

.profile-page .page-header {
  height: 380px;
  background-position: center;
}

.page-header {
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
}

.header-filter:after,
.header-filter:before {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: '';
}

.header-filter::before {
  background: rgba(0, 0, 0, 0.5);
}

.profile-page .profile {
  text-align: center;
}

.profile-page .profile img {
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
  -webkit-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
  -o-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

.show-pointer {
  cursor: pointer;
}

.img-raised {
  box-shadow: 10px 10px 10px rgba(33, 33, 33, 0.7);
}

.rounded-circle {
  border-radius: 50% !important;
}

.img-fluid,
.img-thumbnail {
  max-width: 100%;
  height: auto;
}

.title {
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 32px;
  color: #ffd061;
  font-weight: 700;
  font-family: 'Roboto Slab', 'Times New Roman', serif;
}

.profile-page .description {
  margin: 1.071rem auto 0;
  max-width: 600px;
  color: #999;
  font-weight: 300;
}

p {
  font-size: 16px;
  margin: 10px 0 10px 0;
}

.profile-page .profile-tabs {
  margin-top: 4.284rem;
}

.nav-pills,
.nav-tabs {
  border: 0;
  border-radius: 4px;
  padding: 15px 15px;
}

.nav .nav-item {
  position: relative;
  margin: 0 10px;
}

.nav-pills.nav-pills-icons .nav-item .nav-link {
  border-radius: 4px;
  color: #fff;
}

.nav-pills .nav-item .nav-link.active {
  color: #fff;
  background-color: #9c27b0;
  box-shadow:
    0 5px 20px 0 rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(156, 39, 176, 0.6);
}

.nav-pills .nav-item .nav-link {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  min-width: 100px;
  color: #555;
  transition: all 0.3s;
  border-radius: 30px;
  padding: 10px 15px;
  text-align: center;
}

.nav-pills .nav-item .nav-link:not(.active):hover {
  background-color: rgba(200, 200, 200, 0.2);
}

.nav-pills .nav-item i {
  display: block;
  font-size: 30px;
  padding: 15px 0;
}

.tab-space {
  padding: 20px 0 50px;
}

.profile-page .gallery {
  margin-top: 3.213rem;
  padding-bottom: 50px;
}

.profile-page .gallery img {
  width: 100%;
  margin-bottom: 2.142rem;
}

.profile-page .profile .name {
  margin-top: -80px;
}

img.rounded {
  border-radius: 6px !important;
}

.tab-content > .active {
  display: block;
}

/*buttons*/
.btn {
  position: relative;
  padding: 12px 30px;
  margin: 0.3125rem 1px;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.428571;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
  border: 0;
  border-radius: 0.2rem;
  outline: 0;
  transition:
    box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: box-shadow, transform;
}

.btn.btn-just-icon {
  font-size: 20px;
  height: 41px;
  min-width: 41px;
  width: 41px;
  padding: 0;
  overflow: hidden;
  position: relative;
  line-height: 41px;
}

.btn.btn-just-icon fa {
  margin-top: 0;
  position: absolute;
  width: 100%;
  transform: none;
  left: 0;
  top: 0;
  height: 100%;
  line-height: 41px;
  font-size: 20px;
}

.btn.btn-link {
  background-color: transparent;
  color: #999;
}
</style>
