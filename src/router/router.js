import Vue from 'vue'
import Router from 'vue-router'

const welcome = r => require.ensure([], () => r(require('../page/welcome')), 'hello');
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login');


const routers = [
  {
    path: '/',
    component: welcome
  },
  {
    path: '/login',
    component: login
  }];
export default routers
