import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const hello = r => require.ensure([], () => r(require('../page/HelloWorld')), 'hello');

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: hello
    }
  ]
}]
