import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@pages/HomePage'
// import ResumePage from '@pages/ResumePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '*',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/resume',
      name: 'ResumePage',
      component: HomePage,
    },
  ],
  mode: 'history'
})
