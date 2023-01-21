import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { FirebaseAuth } from '../firebase/config.js'

//Route Guard - Auth Guard
const requireAuth = (to, from, next) => {
  let user = FirebaseAuth.currentUser
  console.log('Current User in Auth Guard:', user)
  if(!user){
    next({name:'Welcome'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
