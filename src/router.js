import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/password-first-step',
      name: 'PasswordFirstStep',
      component: () => import(/* webpackChunkName: "home" */ './components/page-chunk/PasswordFirstStep.vue')
    },
    {
      path: '/password-second-step',
      name: 'PasswordSecondStep',
      component: () => import(/* webpackChunkName: "home" */ './components/page-chunk/PasswordSecondStep.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "home" */ './views/Register.vue')
    },
    {
      path: '/login-page',
      name: 'login-page',
      component: () => import(/* webpackChunkName: "home" */ './views/LoginPage.vue')
    },
  ]
})