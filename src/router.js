import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      async beforeEnter (to, from, next) {
        try {
          const userCreated = '6054a8b8ad53c477636ffffc'
          await store.dispatch('board/getBoards', userCreated)
          const data = {
            _id: userCreated
          }
          store.commit('user/SET_USER', data)
          next()
        } catch (error) {
          throw error
        }
      }
    },
    {
      path: '/boards/:boardId',
      name: 'board',
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
          component: () => import('./views/Card.vue')
        }
      ]
    }
  ]
})
