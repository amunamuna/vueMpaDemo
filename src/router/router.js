import Vue from 'vue'
import Router from 'vue-router'

const welcome = r => require.ensure([], () => r(require('../module/welcome')), 'hello');
const login = r => require.ensure([], () => r(require('../module/login/login')), 'login');
const test = r => require.ensure([], () => r(require('../module/test')), 'test');


const routers = [
  {
    path: '/',
    component: welcome
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/test',
    component: test
  }
];
export default routers
