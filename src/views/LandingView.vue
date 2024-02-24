<script setup lang="ts">
import Header from '../components/GlobalHeader.vue'
</script>

<template>
  <div class="background">
    <Header></Header>
    <section class="hero-section">
      <div class="content-hero">
        <div class="tagline">
          <div class="tagline-line"></div>
          <h5 class="heading-tagline">Meet new people</h5>
        </div>
        <h1 class="h1-title">Need some company while walking your dog?</h1>
        <a href="#down" class="scroll-down">
          <div>scroll down</div>
          <i class="pi pi-arrow-down"></i>
        </a>
      </div>
    </section>
  </div>
  <section class="content-section"></section>
</template>

<style scoped>
.background {
  min-height: 100vh;
  background: url(../assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.hero-section {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 80vh;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.content-hero {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 790px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.tagline {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 32px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fbd784;
}

.tagline-line {
  width: 72px;
  height: 2px;
  margin-right: 24px;
  background-color: #fbd784;
}
.heading-tagline {
  font-size: 12px;
  letter-spacing: 4px;
  color: #fbd784;
}

h5 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 800;
  letter-spacing: 6px;
  text-transform: uppercase;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: var(--Lora);
  font-size: 75px;
  line-height: 120%;
  font-weight: 600;
  text-transform: capitalize;
}
.h1-title {
  font-size: 58px;
}

.scroll-down {
  text-decoration: none;
  font-weight: 600;
  display: flex;
  margin-top: 40px;
}

.scroll-down:hover div,
.scroll-down:hover i {
  color: #fbd784;
}

.pi {
  margin-left: 10px;
}
</style>
