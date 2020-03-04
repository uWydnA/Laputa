import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index')
  },
  {
    path: '/explore',
    component: () => import('@/views/Explore')
  },
  {
    path: '/photographers/recommended',
    component: () => import('@/views/Photographers')
  },
  {
    path: '/notifications/messages',
    component: () => import('@/views/Notifications')
  },
  {
    path: '/video/:id',
    component: () => import('@/views/Video')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/signup',
    component: () => import('@/views/Signup')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
