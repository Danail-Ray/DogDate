<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/GlobalHeader.vue'
import LandingView from './views/LandingView.vue'
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <LandingView />
  </main>
</template>

<style>
@import url('./assets/style.css');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

:root {
  --Lora: Lora, sans-serif;
  --Gilroy: Gilroy Bold, sans-serif;
  /* --global-font-size: 0.8rem;
    --global-text-color: #222;
    --global-primary-title-size: 2rem;
    --global-color-primary: #88498f;
    --global-color-secondary: #779fa1;
    --global-color-warning: #e28413;
    --global-color-danger: #ff6542; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  color: #fbd784;
  background: none;
}

/* temporär */
</style>
