<template>
  <div class="wrapper" :style="{ height: loginActive ? '440px' : '500px' }" v-if="!user">
    <span class="icon-close" @click="hideWrapper"><ion-icon name="close"></ion-icon></span>
    <div class="form-box login" v-if="loginActive">
      <h2>Login</h2>
      
        <div class="input-box">
          <span class="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" v-model="loginEmail" required />
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" v-model="loginPassword" required />
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button class="btn" @click="signIn">Login</button>
        <div class="login-register">
          <p>
            Don't have an account?
            <a href="#" class="register-link" @click="loginActive = false">Register</a>
          </p>
        </div>
      
    </div>

    <div class="form-box register" v-if="!loginActive">
      <h2>Registration</h2>
        <div class="input-box">
          <span class="icon"><ion-icon name="person"></ion-icon></span>
          <input type="text" v-model="username" required />
          <label>Username</label>
        </div>
        <div class="input-box">
          <span class="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" v-model="email" required />
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" v-model="password" required />
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox" />I aggree to the terms & conditions</label>
        </div>
        <button class="btn" @click="register">Register</button>
        <div class="login-register">
          <p>
            Already have an account?
            <a href="#" class="login-link" @click="loginActive = true">Login</a>
          </p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useRouter } from 'vue-router'

const loginActive = ref(true)

const emits = defineEmits(['close'])
const hideWrapper = () => {
  // Emit 'close' event to parent component
  emits('close')
}

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const user = ref(auth.currentUser)

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential: { user: any; }) => {
      updateProfile(userCredential.user, {
        displayName: username.value
      })
      // Signed in
      router.push("/dashboard")
    })
    .catch((error: { code: any; message: any; }) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}

const loginEmail = ref('')
const loginPassword = ref('')

const signIn = () => {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential: { user: any; }) => {
      // Signed in 
      const user = userCredential.user;
      router.push("/dashboard")
    })
    .catch((error: { code: any; message: any; }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}



// Load Ionicons script dynamically when the component is mounted
const ioniconsScript = document.createElement('script')
ioniconsScript.type = 'module'
ioniconsScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
document.head.appendChild(ioniconsScript)

const ioniconsNoModuleScript = document.createElement('script')
ioniconsNoModuleScript.setAttribute('nomodule', '')
ioniconsNoModuleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
document.head.appendChild(ioniconsNoModuleScript)
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: height 0.2s ease;
  margin-top: 50px;
}

.wrapper .form-box {
  width: 100%;
  padding: 40px;
}

.wrapper .icon-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: #fbeec1;
  font-size: 2em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  z-index: 1;
  cursor: pointer;
}

.form-box h2 {
  margin-top: 10px;
  font-size: 2em;
  color: #ffffff;
  text-align: center;
}

.input-box {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #fbeec1;
  margin: 30px 0;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #fbeec1;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}

.input-box input:focus~label,
.input-box input:valid~label {
  top: -5px;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #fbeec1;
  font-weight: 600;
  padding: 0 35px 0 5px;
}

.input-box .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #fbeec1;
  line-height: 57px;
}

.remember-forgot {
  color: #fbeec1;
  font-size: 0.9em;
  font-weight: 500;
  margin: -15px 0 15px;
  display: flex;
  justify-content: space-between;
}

.remember-forgot label input {
  accent-color: #fbeec1;
  margin-right: 3px;
}

.remember-forgot label {
  user-select: none;
}

.remember-forgot a {
  color: #fbeec1;
  text-decoration: none;
  user-select: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

.btn {
  width: 100%;
  height: 45px;
  border: none;
  outline: none;
  background: #fbeec1;
  color: #1f1f1f;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 0;
  border-radius: 6px;
  transition: 0.5s;
}

.login-register {
  font-size: 0.9em;
  color: #fbeec1;
  text-align: center;
  font-weight: 500;
  margin: 25px 0 10px;
}

.login-register p a {
  color: #fbeec1;
  text-decoration: none;
  font-weight: 600;
}

.login-register p a:hover {
  text-decoration: underline;
}

.login-register a {
  margin-left: 5px;
  user-select: none;
}
</style>
