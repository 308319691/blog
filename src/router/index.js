import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Live from '@/components/Live'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Live',
      component: Live
    },
    {
      path: '/register',
      component: {
        template: '<div>注册界面zzz<router-view></router-view></div>',
        children:[{
          path:'/a',
       component:{
         template:'<h4>子页面a</h4>'
       }
        }]
      }
    },
    {
      path: '/login',
      component:{
        template:'<h4>登陆界面</h4>'
      }
    },
    {
      path: '/admin',
      component: {
        template: '<h4>个人中心</h4>'
      }
    }
    ]
})
