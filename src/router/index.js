import Vue from 'vue'
import Router from 'vue-router'
import ResumePage from '@pages/ResumePage'
import ProjectsPage from '@pages/ProjectsPage'
import PresentationsPage from '@pages/PresentationsPage'
// import ResumePage from '@pages/ResumePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ResumePage',
      component: ResumePage
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: ProjectsPage
    },
    {
      path: '/presentations',
      name: 'PresentationsPage',
      component: PresentationsPage,
    },
    {
      path: '*',
      name: 'ResumePage',
      component: ResumePage,
    },
  ],
  mode: 'history'
})
