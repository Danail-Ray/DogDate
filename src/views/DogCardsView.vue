<template>
  <div class="container">
    <div class="dog-card">
      <dogCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import dogCard from '../components/DogCard.vue'
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7c4242;
}

</style>
