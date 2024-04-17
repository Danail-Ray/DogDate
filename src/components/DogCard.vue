<template>
  <div class="container">
    <div class="card">
      <div class="card-inner">
        <div class="front">
          <h2>{{ name }}</h2>
          <p>Brown little shit dog!</p>
          <button>Hover me!</button>
        </div>
        <div class="back">
          <h1>Username</h1>
          <p>Oqweohj qowioqwe oqiwueoq e oqwiejoq w</p>
          <div class="row">
            <div class="col">
              <h2>12k</h2>
              <p>Followers</p>
            </div>
            <div class="col">
              <h2>12k</h2>
              <p>Followers</p>
            </div>
            <div class="col">
              <h2>12k</h2>
              <p>Followers</p>
            </div>
            <div class="row">
              <button @click="goToProfile">Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

// Define props
const props = defineProps({
  name: String
})

const router = useRouter()
const goToProfile = () => {
  router.push({ path: `/dashboard/${props.name}` })
}
</script>

<style scope>
.card {
  width: 350px;
  height: 515px;
  margin: 100px auto 0;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.front,
.back {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  backface-visibility: hidden;
}

.front {
  background: url('../assets/bg.avif');
  background-size: cover;
  background-position: center;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.front h2 {
  font-size: 1.5rem;
  color: #fff;
  text-align: left;
}

.front p {
  font-size: 13px;
  color: #a58080;
}

.front button {
  width: 120px;
  border: 1px solid #fff;
  background: transparent;
  border-radius: 50px;
  padding: 8px 20px;
  cursor: pointer;
  margin-top: 20px;
  color: white;
}

.back {
  background: #dfb5b5;
  color: #333;
  padding: 20px 40px;
  transform: rotateY(180deg);
}

.back h1 {
  font-size: 50px;
  line-height: 55px;
  margin-bottom: 10px;
}

.back span {
  font-weight: 400;
}

.back p {
  font-size: 14px;
  color: #333;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.col {
  flex: 1;
  text-align: center;
  color: #555;
  font-size: 12px;
}

.col h2 {
  font-size: 20px;
}

.col p {
  margin-top: 5px;
}

.back button {
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
  right: 0;
  margin-bottom: 40px;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}
</style>
