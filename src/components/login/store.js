/**
 * Created by eric on 2017/1/16.
 */
import Vue from "vue";
import Vuex from "vuex";
import 'babel-polyfill'
import userServce from "../../common/service/userService";
Vue.use(Vuex)

const loginStore = new Vuex.Store({
    state: {
      count: 100,
      loginForm: {
        name: "",
        pass: "",
        remember: false
      },
      errMessage: ""
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: function () {
      return {
        /*登陆相关的接口*/
        login({commit, state, dispatch},){
          if (state.loginForm.name == null || state.loginForm.name == "") {
            state.errMessage = "用户名不能为空";
            return;
          }
          if (state.loginForm.pass == null || state.loginForm.pass == "") {
            state.errMessage = "密码不能为空";
            return;
          }
          userServce.login(state.loginForm, function () {
            alert('登陆成功')
          }, function (data) {
            state.errMessage = data.message;
          })
        }
      }
    }()
  })
  ;

export  default  loginStore;
