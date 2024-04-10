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
        <a href="#Content" class="scroll-down">
          <div>scroll down</div>
          <i class="pi pi-arrow-down"></i>
        </a>
      </div>
    </section>
  </div>
  <div class="content-section">
    <div id="Content" class="content-wrapper content">
      <div class="grid">
        <div id="w-node-435c3832b714-0b7ceb38" class="content-text">
          <div class="count">01</div>
          <div class="tagline">
            <div class="tagline-line"></div>
            <h5 class="heading-tagline">Get Started</h5>
          </div>
          <h2 class="head">What level of &nbsp;hiker are you?</h2>
          <p>
            Determining what level of hiker you are can be an important tool when planning future
            hikes. This hiking level guide will help you plan hikes according to different hike
            ratings set by various websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert backpacker?
          </p>
          <a href="#Content" class="scroll-down">
            <div>read more</div>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>
        <img
          src="../assets/home-mountain.jpg"
          id="w-node-39e02eb8b346-0b7ceb38"
          alt=""
          class="image right"
        />
      </div>
    </div>
    <div class="content-wrapper content">
      <div class="grid">
        <div id="w-node-12f012158455-0b7ceb38" class="content-text">
          <div class="count">02</div>
          <div class="tagline">
            <div class="tagline-line"></div>
            <h5 class="heading-tagline">Hiking Essentials</h5>
          </div>
          <h2 class="head">Picking the right Hiking Gear!</h2>
          <p>
            The nice thing about beginning hiking is that you don’t really need any special gear,
            you can probably get away with things you already have.<br />Let’s start with clothing.
            A typical mistake hiking beginners make is wearing jeans and regular clothes, which will
            get heavy and chafe wif they get sweaty or wet.
          </p>
          <a href="#Content" class="scroll-down">
            <div>read more</div>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>
        <img src="../assets/home-lake.jpg" id="w-node-12f012158464-0b7ceb38" alt="" class="image" />
      </div>
    </div>
    <div class="content-wrapper content">
      <div class="grid">
        <div id="w-node-af252b1c3813-0b7ceb38" class="content-text">
          <div class="count">03</div>
          <div class="tagline">
            <div class="tagline-line"></div>
            <h5 class="heading-tagline">where you go is the key</h5>
          </div>
          <h2 class="head">Understand Your Map &amp; Timing</h2>
          <p>
            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock
            bag. Read over the guide, study the map, and have a good idea of what to expect. I like
            to know what my next landmark is as I hike. For example, I’ll read the guide and know
            that say, in a mile, I make a right turn at the junction..
          </p>
          <a href="#Content" class="scroll-down">
            <div>read more</div>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>
        <img
          src="../assets/home-beach.jpg"
          id="w-node-af252b1c3822-0b7ceb38"
          alt=""
          class="image"
        />
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="content-wrapper content footer">
      <div class="grid footer">
        <div id="w-node-1aa862d1e6f1-0b7ceb38" class="footer-left">
          <div class="top">
            <a href="#" class="logo footer w-inline-block">
              <div class="dogdate-logo w-embed">DogDate</div>
            </a>
            <div class="footer-text">
              Get out there &amp; discover your next slope, mountain &amp; destination!
            </div>
          </div>
          <div class="copyright">
            Copyright 2024 DogDate, Inc. Terms &amp; Privacy<br />A concept by
            <a href="https://watchr.netlify.app/" target="_blank" class="author"
              >Danail Raykov</a
            >
          </div>
        </div>
        <div id="w-node-4532b953dd02-0b7ceb38" class="footer-right">
          <div class="links">
            <div id="w-node-bec01f52c19d-0b7ceb38" class="footer-links">
              <h4>More on The Blog</h4>
              <a href="#" class="footer-link">About MNTN</a
              ><a href="#" class="footer-link">Contributors &amp; Writers</a
              ><a href="#" class="footer-link">Write For Us</a
              ><a href="#" class="footer-link">Contact Us</a
              ><a href="#" class="footer-link">Privacy Policy</a>
            </div>
            <div id="w-node-98e738a28e3d-0b7ceb38" class="footer-links">
              <h4>More on MNTN</h4>
              <a href="#" class="footer-link">The Team</a><a href="#" class="footer-link">Jobs</a
              ><a href="#" class="footer-link">Press</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

.scroll-down div,
.scroll-down i {
  text-decoration: none;
  font-weight: 600;
  display: flex;
  margin-top: 40px;
  color: #fbd784;
  display: inline-block;
}
.scroll-down i {
  margin-left: 10px;
}

.scroll-down {
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}

.scroll-down:hover {
  margin-left: 10px;
}

/* CONTENT SECTION */

.content-section {
  position: relative;
  z-index: 50;
  padding-top: 200px;
  background: #0b1d26;
}

.content-wrapper.content {
  max-width: 1440px;
  padding-bottom: 280px;
}

.content-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 80px;
  padding-left: 80px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.grid {
  display: -ms-grid;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 81px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.content-text {
  position: relative;
  width: 100%;
  max-width: 550px;
}

.count {
  position: absolute;
  left: -100px;
  bottom: 320px;
  z-index: -1;
  opacity: 0.1;
  font-size: 200px;
  line-height: 100%;
  font-weight: 700;
}

.image {
  /* width: 480px;
  height: 680px; */
  -o-object-fit: cover;
  object-fit: cover;
}

.image.right {
  -o-object-position: 50% 100%;
  object-position: 50% 100%;
}
.head {
  font-size: 48px;
  font-family: var(--Lora);
}

h2 {
  margin-top: 0px;
  margin-bottom: 24px;
  font-family: 'Serif Display', sans-serif;
  font-size: 64px;
  line-height: 110%;
  font-weight: 600;
}

/* FOOTER */
.grid.footer {
  grid-column-gap: 0px;
  -ms-grid-columns: 0.75fr 1fr;
  grid-template-columns: 0.75fr 1fr;
}
.footer-text {
  margin-bottom: 32px;
}
.content-wrapper.content.footer {
  padding-bottom: 200px;
}
.footer {
  background-color: #0b1d26;
}

.footer-left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

h4 {
  margin-top: 0px;
  margin-bottom: 24px;
  color: #fbd784;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}
.top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 290px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.logo.footer {
  margin-bottom: 24px;
}
.dogdate-logo {
  font-size: 1.5em;
  color: #fff;
  user-select: none;
  font-family: var(--Lora);
}

.copyright {
  opacity: 0.5;
}
.author {
  border-bottom: 2px solid hsla(0, 0%, 100%, 0.3);
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  color: #fff;
}
.author:hover {
  border-bottom-color: rgba(251, 215, 132, 0.3);
  color: #fbd784;
}
.links {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.footer-links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.footer-link {
  margin-bottom: 8px;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  color: #fff;
  font-weight: 300;
}

.footer-link:hover {
  color: #fbd784;
}

a {
  text-decoration: none;
  background: transparent;
}
</style>
