import Vue from 'vue'
import Router from 'vue-router'
import TabNew from '@/pages/tab-new/TabNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tab',
      name: 'TabNew',
      component: TabNew
    }
  ]
})
