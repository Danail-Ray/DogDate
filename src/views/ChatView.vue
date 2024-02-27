<template>
  <div class="background">
    <Header></Header>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/GlobalHeader.vue'

</script>


<style scoped>
  .background {
  min-height: 100vh;
  background: url(../assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

</style>
