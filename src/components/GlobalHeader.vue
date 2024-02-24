<template>
  <div class="header">
    <h1 class="logo">DogDate</h1>
    <nav class="naviagtion">
      <RouterLink to="/">Blog</RouterLink>
      <RouterLink to="/about">Search</RouterLink>
      <RouterLink to="/about">Chats</RouterLink>
      <RouterLink to="/about">Profile</RouterLink>
      <RouterLink to="/about"><i class="pi pi-user"></i>Account</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px 50px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}

.logo {
  font-size: 2em;
  color: #fff;
  user-select: none;
  font-family: var(--Lora);
}

.naviagtion a {
  position: relative;
  font-size: 1.1em;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
  font-family: var(--Gilroy);
  font-weight: 700;
}

.naviagtion a:hover,
.naviagtion a:hover .pi {
  color: #fbd784;
}

.naviagtion a .pi {
  color: #fff;
  margin-right: 10px;
}

.naviagtion a::after {
  content: '';
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background: #fbd784;
  bottom: -6px;
  border-radius: 5px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.5s;
}

.naviagtion a:hover::after {
  transform-origin: left;
  transform: scaleX(1);
  color: #fbd784;
}

.naviagtion .account-button {
  width: 130px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #fff;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;
}

.naviagtion .account-button:hover {
  background-color: #fff;
  color: #162938;
}

@media screen and (min-width: 2300px) {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 600px); /* Subtract 200px from both sides */
    padding: 20px 100px;
    margin-left: 300px; /* Add 200px margin on the left */
    margin-right: 300px; /* Add 200px margin on the right */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
  }
}
</style>
