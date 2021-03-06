import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/Search',
      component:Search
    },
  ]
})



