/**
 * Created by eric on 2017/1/16.
 */
import Vue from "vue";
import "babel-polyfill";
import Vuex from "vuex";
import router from "./router";
import userService from "../../common/service/userService";
import YLBASE from "../../common/base";
Vue.use(Vuex)

function sendEnableTick(state) {
  setTimeout(function () {
    state.senderEnableTimer--;
    if (state.senderEnableTimer > 0) {
      sendEnableTick(state);
    }
  }, 1000)
}

function checkMobile(str) {
  var re = /^1\d{10}$/;
  if (re.test(str)) {
    return true;
  } else {
    return false;
  }
}

function
checkEmail(str) {
  var
    re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  if (re.test(str)) {
    return true;
  } else {
    return false;
  }
}
function
checkUser(str) {
  var
    re = /\w{3,15}/;
  if (re.test(str)) {
    return true;
  } else {
    return false;
  }
}

const forgetStore = new Vuex.Store({
    state: {
      senderEnableTimer: 0,
      step: 1,
      errMessage: "",
      forgetForm: {
        username: "",
        vcode: "",
        pass: "",
        repass: "",
        key: "",
      }
    },

    mutations: {},
    actions: function () {
      return {
        moveToValidateStep({commit, state, dispatch},){
          state.errMessage = ""

          if (checkMobile(state.forgetForm.username) == false && checkMobile(
              state.forgetForm.username) == null) {
            state.errMessage = "手机号或邮箱不正确";
            return;
          }
          userService.ACheckUserIsExist({name: state.forgetForm.username}, function () {
            if (checkEmail(state.forgetForm.username)) {
              userService.sendFindPassswordEmail({email: state.forgetForm.username},
                                                 function success() {
                                                   router.push("/email/2")
                                                 }, function error(data) {
                  state.errMessage = data.message
                })
              return;
            }

            if (checkMobile(state.forgetForm.username)) {
              router.push("/phone/2")
            } else {
              state.errMessage = "错误的手机号或用户名";
            }
          }, function () {
            state.errMessage = "错误的邮箱或手机号";
          })

        },

        sendFindPasswordVcode({commit, state, dispatch},) {
          state.errMessage = "";
          userService.sendFindPasswordPhoneCode({"phone": state.forgetForm.username}, function () {
                                                  state.senderEnableTimer = 30;
                                                  sendEnableTick(state)
                                                }, function (data) {
                                                  state.errMessage = data.message;
                                                }
          );
        },

        checkVcodeAndGetKey({commit, state, dispatch},) {
          state.errMessage = "";
          if (state.forgetForm.vcode == null || state.forgetForm.vcode == "") {
            state.errMessage = "验证码不能为空";
            return;
          }

          userService.getResetPasswordKey(
            {name: state.forgetForm.username, vcode: state.forgetForm.vcode}, function (data) {
              state.forgetForm.key = data.data;
              router.push("/phone/3")
            }, function (data) {
              state.errMessage = data.message;
            })
        },
        changePassword({commit, state, dispatch},) {
          state.errMessage = "";
          if (state.forgetForm.key == "") {
            state.errMessage = "无效的KEY";
            return;
          }

          if (state.forgetForm.pass == null || state.forgetForm.pass == "") {
            state.errMessage = "密码不能为空";
            return;
          }

          if (state.forgetForm.repass == null || state.forgetForm.repass == "") {
            state.errMessage = "重复密码不能为空";
            return;
          }

          if (!checkUser(state.forgetForm.pass)) {
            state.errMessage = "密码应由3-16位数字字母或下划线组成";
            return;
          }

          if (!checkUser(state.forgetForm.repass)) {
            state.errMessage = "密码应由3-16位数字字母或下划线组成";
            return;
          }

          if (state.forgetForm.pass != state.forgetForm.repass) {
            state.errMessage = "两次输入的密码不一致";
            return;
          }

          userService.resetPassword(
            {name: state.forgetForm.username, pass: state.forgetForm.pass, key: state.forgetForm.key},
            function (data) {
              router.push("/phone/4")
            }, function (data) {
              state.errorMessage = data.message;
            })
        },
        reSendFindPasswordEmail({commit, state, dispatch}) {
          state.errMessage = "";

          userService.sendFindPassswordEmail({email: state.forgetForm.username}, function () {
            state.senderEnableTimer = 30;
            sendEnableTick(state)
          }, function (data) {
            state.errMessage = data.message;

          })
        },
        checkEmailKey({commit, state, dispatch}) {
          userService.checkEmailKey({securityKey: state.forgetForm.key}, function () {
            router.push({
                          path: "/email/3",
                          query: {securityKey: state.forgetForm.key, email: state.forgetForm.username}
                        })
          }, function (data) {
            if (data.code == YLBASE.YLError.ActiveEmailExpiredErr) {

            } else {
              router.push("/email/2.6")
            }
          })
        }
      }
    }()
  })
  ;

export  default  forgetStore;
