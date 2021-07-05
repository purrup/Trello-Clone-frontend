import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress'

Vue.use(Router)

// 若未登入，導回登入頁
const authLogin = (next) => {
  if (store.getters['user/isLogin'] === 'true') {
    next()
    return
  }
  store.commit('notification/SET_ERROR_MESSAGE', '請先登入或註冊，謝謝')
  next({ name: 'login' })
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      meta: { showNavbar: false },
      component: () => import('./views/Landing.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: { showNavbar: true },
      component: () => import('./views/Home.vue'),
      async beforeEnter (to, from, next) {
        try {
          authLogin(next)
          await store.dispatch('board/getBoards')
          next()
        } catch (error) {
          throw error
        }
      }
    },
    {
      path: '/boards/:boardId',
      name: 'board',
      meta: { showNavbar: true },
      component: () => import('./views/Board.vue'),
      async beforeEnter (to, from, next) {
        try {
          authLogin(next)
          await store.dispatch('board/getBoard', to.params.boardId)
          next()
        } catch (error) {
          throw error
        }
      },
      children: [
        {
          path: 'cards/:id',
          name: 'card',
          meta: { showNavbar: true },
          component: () => import('./views/Card.vue')
        }
      ]
    },
    {
      path: '/users',
      name: 'user',
      meta: { showNavbar: true },
      component: () => import('./views/User.vue'),
      async beforeEnter (to, from, next) {
        try {
          authLogin(next)
          await store.dispatch('user/getUser')
          next()
        } catch (error) {
          throw error
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: { showNavbar: false },
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: { showNavbar: false },
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      meta: { showNavbar: false },
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '*',
      redirect: 'NotFound'
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
