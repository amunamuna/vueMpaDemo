import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)


var email = require('./../../components/forgetPassword/email')
var phone = require('./../../components/forgetPassword/phone')
var entry = require('./../../components/forgetPassword/entry')

const router = new VueRouter({
  routes: [
    {path: '/email/:step', component: email},
    {path: '/phone/:step', component: phone},
    {path: '/phone', component: phone},
    {path: '/email', component: email},
    {path: '/', component: entry},
    {path: '', component: entry},
  ]
})

export default router;
