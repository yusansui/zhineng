import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index/index'
import first from '@/components/first/first'
import two from '@/components/two/two'
import three from '@/components/three/three'
import four from '@/components/four/four'
import five from '@/components/five/five'
import six from '@/components/six/six'
import seven from '@/components/seven/seven'
import FirstNew from '@/components/first/FirstNew'
import FirstList from '@/components/first/FirstList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'//重定向登录页
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'/index/1',
          component:first,
          children:[
            {
              path:'/index/1/FirstNew',
              component:FirstNew
            },
            {
              path:'/index/1/FirstList',
              component:FirstList
            }
          ]
        },
        {
          path:'/index/2',
          component:two
        },
        {
          path:'/index/3',
          component:three
        },
        {
          path:'/index/4',
          component:four
        },
        {
          path:'/index/5',
          component:five
        },
        {
          path:'/index/6',
          component:six
        },
        {
          path:'/index/7',
          component:seven
        }
      ]
    }
  ]
})
