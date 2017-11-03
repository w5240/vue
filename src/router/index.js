import Vue from 'vue'
import Router from 'vue-router'
import viate from '../components/vitae/vitae.vue'
import production from '../components/production/production.vue'
import other from '../components/other/other.vue'

//production
import css3D from '../components/production/css3D/css3D.vue'
import lee from '../components/production/lee/lee.vue'
import heml from '../components/production/heml/heml.vue'



Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [
      {
         path: '/viate',
         name: 'viate',
         component: viate,
         meta: {name: '简历', auth: true},
      },
      {
         path: '/production',
         name: 'production',
         component: production,
         meta: {name: '产品', auth: true},
         redirect:'/production/css3D',
         children:[
            {
               path:'/production/css3D',
               name:'css3D',
               component:css3D
            },
            {
               path:'/production/lee',
               name:'lee',
               component:lee
            },
            {
               path:'/production/heml',
               name:'heml',
               component:heml
            },
         ]
      },
      {
         path: '/other',
         name: 'other',
         component: other
      }
   ]
})
