import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import unfound from '@/components/404'
import productLib from '@/components/productLib'
import DocLib from '@/components/DocLib/DocLib'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }, {
      path: '/test/:id',
      name: 'test',
      component: test, // 可为对象模式，按router-view的name属性分配
      children: [{// 组件嵌套
        path: '404',
        component: unfound
      }]
    }, {
      path: '/404',
      name: 'unfound',
      alias: '/b', // 别名，访问/b相当于访问/404
      component: unfound,
      beforeEnter: (to, from, next) => { // 钩子函数
        next()  // 允许进入
        // next(false) 不允许进入
        // next('/DocLib') 进入DocLib界面
      }
    }, {
      path: '/4',
      name: 'invalid',
      // // 重定向，a）'/404' b){name:'umfound'} c)如例子函数返回值
      // redirect:'/404',
      // redirect:{ name: 'unfound' },
      redirect: to => {
        return { name: 'unfound' }
      }
    }, {
      path: '/productLib',
      name: 'productLib',
      component: productLib
    }, {
      path: '/DocLib',
      name: 'DocLib',
      component: DocLib
    }
  ]
})

export default router
// 此种方式import时为对象形势
// export {
//   router
// }
// location可为字符串或对象
// router.push(location)     <router-link :to="...">           添加历史记录
// router.replace(location)  <router-link :to="..." replace>   不添加历史记录
// router.go(n) 网页向前退后
