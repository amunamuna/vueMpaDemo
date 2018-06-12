import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const welcome = r => require.ensure([], () => r(require('../page/welcome')), 'hello');
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login');

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转欢迎页面
    {
      path: '',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: login
    },
    {
      path: '/login',
      component: login
    }
  ]
}]
