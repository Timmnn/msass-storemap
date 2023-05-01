import * as VueRouter from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  { path: '/', component: Home },
  {path: '/live-demo', component: () => import('../views/LiveDemo.vue')},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFound.vue') },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router