<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/GlobalHeader.vue'
</script>

<template>
  <div class="main">
    <Header />
  </div>
  <!-- <header> 
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.main {
  min-height: 100vh;
  background: url(./assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
