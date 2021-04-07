import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { showNavbar: true },
      component: () => import('./views/Home.vue'),
      async beforeEnter (to, from, next) {
        try {
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
          // console.log(to.params.boardId)
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
      path: '*',
      name: 'NotFound',
      meta: { showNavbar: true },
      component: () => import('./views/NotFound.vue')
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
