<template>
  <div class="background">
    <Header></Header>

    <!-- asdasdasd -->

    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="profile text-center">
                <div class="avatar">
                  <img
                    src="https://preview.redd.it/transform-your-selfie-into-a-stunning-ai-avatar-with-stable-v0-t1mdnkadob6a1.png?width=1024&format=png&auto=webp&s=07b4edf62cd53cbd30886482090cb7e7c9c16372"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid w-25"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Sebastian Missler</h3>
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
              An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
              Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
              it a warm, intimate feel with a solid groove structure.
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile-tabs">
                <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                      <i class="material-icons">camera</i>
                      Studio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#works" role="tab" data-toggle="tab">
                      <i class="material-icons">palette</i>
                      Work
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#favorite" role="tab" data-toggle="tab">
                      <i class="material-icons">favorite</i>
                      Favorite
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a class="btn btn-primary" href="#" role="button">Link</a>

          <div class="tab-content tab-space">
            <div class="tab-pane active text-center gallery" id="studio">
              <div class="row">
                <div class="col-md-3">
                  <img
                    src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                    class="rounded img-fluid mb-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80"
                    class="rounded img-fluid"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80"
                    class="rounded img-fluid mb-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                    class="rounded img-fluid"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                    class="rounded img-fluid mb-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                    class="rounded img-fluid"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80"
                    class="rounded img-fluid mb-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80"
                    class="rounded img-fluid"
                  />
                </div>
              </div>
            </div>
            <!-- Add other tab-panes as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/GlobalHeader.vue'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const username = ref('')
const route = useRoute()

onMounted(() => {
  username.value = Array.isArray(route.params.username)
    ? route.params.username[0]
    : route.params.username
  // Load jQuery
  const jqueryScript = document.createElement('script')
  jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
  document.head.appendChild(jqueryScript)

  // Load Popper.js
  const popperScript = document.createElement('script')
  popperScript.src = 'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js'
  popperScript.integrity = 'sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U'
  popperScript.crossOrigin = 'anonymous'
  document.head.appendChild(popperScript)

  // Load Bootstrap
  const bootstrapScript = document.createElement('script')
  bootstrapScript.src = '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
  document.head.appendChild(bootstrapScript)

  // After Bootstrap is loaded, load Bootstrap Material Design
  bootstrapScript.onload = () => {
    const materialDesignScript = document.createElement('script')
    materialDesignScript.src =
      'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js'
    materialDesignScript.integrity =
      'sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9'
    materialDesignScript.crossOrigin = 'anonymous'
    document.head.appendChild(materialDesignScript)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

Header {
  padding: 200px;
}
.background {
  min-height: 100vh;
  background: url(../assets/home-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

html * {
  -webkit-font-smoothing: antialiased;
}

.container {
  margin-top: 10vh;
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

.main-raised {
  margin: -60px 30px 0;
  border-radius: 6px;
  box-shadow:
    0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.main {
  background: #4b4b4bba;
  position: relative;
  z-index: 3;
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

.img-raised {
  box-shadow:
    0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  color: #fbd784;
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
  font-size: 14px;
  margin: 0 0 10px;
}

.profile-page .profile-tabs {
  margin-top: 4.284rem;
}

.nav-pills,
.nav-tabs {
  border: 0;
  border-radius: 3px;
  padding: 0 15px;
}

.nav .nav-item {
  position: relative;
  margin: 0 2px;
}

.nav-pills.nav-pills-icons .nav-item .nav-link {
  border-radius: 4px;
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
