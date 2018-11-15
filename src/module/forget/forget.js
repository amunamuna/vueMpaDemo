import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import router from "../../components/forgetPassword/router";



new Vue({
  el: '#App',
  template: '<App/>',
  router,
  components: {App}
})
