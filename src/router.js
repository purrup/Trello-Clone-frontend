import Vue from 'vue'
import Router from 'vue-router'
import Board from './views/Board.vue'
import Card from './views/Card.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: Board,
      children: [
        {
          path: 'card/:id',
          name: 'card',
          component: Card
        }
      ]
    }
  ]
})
