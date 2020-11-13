import Vue from 'vue'
import VueRouter from 'vue-router'
import { login } from '../network/user'

Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Space = () => import('views/space/Space')
const Share = () => import('views/space/child/Share')
const Market = () => import('views/market/Market')
const Found = () => import('views/found/Found')
const Curriculum = () => import('views/curriculum/Curriculum')
const Score = () => import('views/score/Score')
const Chat = () => import('views/chat/Chat')
const StudentInfo = () => import('views/studentinfo/StudentInfo')

const ProFile = () => import('views/profile/ProFile')
const Info = () => import('views/profile/child/info/Info')
const Login = () => import('views/profile/child/login/Login')
const Resiger = () => import('views/profile/child/resiger/Resiger')
const EditPass = () => import('views/profile/child/editpass/EditPass')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/space',
    component: Space
  },
  {
    path: '/share',
    component: Share
  },
  {
    path: '/market',
    component: Market
  },
  {
    path: '/found',
    component: Found
  },
  {
    path: '/curriculum',
    component: Curriculum
  },
  {
    path: '/score',
    component: Score
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/studentinfo',
    component: StudentInfo
  },
  {
    path: '/profile',
    component: ProFile
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/login',
    name: login,
    component: Login
  },
  {
    path: '/resiger',
    component: Resiger
  },
  {
    path: '/editpass',
    component: EditPass
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
  router.beforeEach((to, from, next) => {
    if(to.path === '/login' || to.path === '/register' || to.path === '/home'|| to.path === '/profile') {
      next()
    } else {
      let token = localStorage.getItem('token');
      if (token === null || token === '' || token === undefined) {
        next('/login');
      } else {
        next();
      }
    }
  })

export default router