import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'paginaprincipal',
    component: PaginaPrincipal
  },
  {
    path: '/adicionartarefa',
    name: 'adicionartarefa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdicionarTarefa.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
