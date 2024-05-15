import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../main'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard/:username/:uid',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/landing',
      name: 'landing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChatView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/cards',
      name: 'cards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DogCardsView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation guard to check authentication status before accessing protected routes
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    // If the route requires authentication and the user is not logged in, redirect to login page
    next('/')
    return
  } else if (to.params.username && to.params.uid) {
    // If the route contains a username parameter, check if it exists in Firestore
    const username = to.params.username
    const uid = to.params.uid
    try {
      const db = getFirestore()
      const ref = doc(db, 'profiles', uid.toString())
      const docSnap = await getDoc(ref)
      const correctUsername = docSnap.data()?.username

      if (!docSnap.exists()) {
        // If the username does not exist in Firestore, redirect to a 404 page or any other appropriate route
        next('/')
        return
      } else {
        next() // Proceed to the next route if the username exists
        console.log('Username exists:', username)
        return
      }
    } catch (error) {
      console.error('Error checking username existence:', error)
      // Handle the error appropriately (e.g., redirect to an error page)
    }
  } else {
    next() // Proceed to the next route
    return
  }
})

export default router
