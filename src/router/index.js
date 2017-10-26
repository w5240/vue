import Vue from 'vue'
import Router from 'vue-router'
import curVit from '../components/curriculumVitæ/curVit.vue'
import production from '../components/production/production.vue'
import other from '../components/other/other.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'curVit',
      component: curVit
    },
    {
      path: '/production',
      name: 'production',
      component: production
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }
  ]
})
