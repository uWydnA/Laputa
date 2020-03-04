import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/views/Index')
  },
  {
    path: '/explore',
    component: () => import('@/views/Explore')
  },
  {
    path: '/photographers',
    component: () => import('@/views/Photographers'),
    children: [{
        path: '/photographers/recommended',
        component: () => import('@/views/Photographers/Recommended')
      },
      {
        path: '/photographers/hot',
        component: () => import('@/views/Photographers/Hot')
      },
      {
        path: '/photographers/new',
        component: () => import('@/views/Photographers/New')
      },
      {
        path: '/photographers/creator',
        component: () => import('@/views/Photographers/Creator')
      },
      {
        path: '/photographers',
        redirect: '/photographers/recommended'
      }
    ]
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
  {
    path: '/topics/:id',
    component: () => import('@/views/Topics')
  },
  {
    path: '*',
    redirect : '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
