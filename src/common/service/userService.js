import YLBASE from "../base.js";

var UserService =
  {
    login: function (loginForm, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ALogin,
        loginForm, successCB, errorCB
      )
    },
    registerPersion: function (userRegisterForm, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ARegisterUser,
        userRegisterForm, successCB, errorCB
      )
    },
    registerCompany: function (companyRegisterForm, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ARegisterCompany,
        companyRegisterForm, successCB, errorCB
      )
    },

    sendPhoneCode: function (phoneObj, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ASendPhoneCode,
        phoneObj, successCB, errorCB
      )
    },
    sendFindPasswordPhoneCode: function (phoneObj, successCB, errorCB) {
      phoneObj.flag=1;
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ASendPhoneCode,
        phoneObj, successCB, errorCB
      )
    },
    sendFRegPhoneCode: function (phoneObj, successCB, errorCB) {
      phoneObj.flag=0;
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ASendPhoneCode,
        phoneObj, successCB, errorCB
      )
    },


    sendActiveEmail: function (emailObj, successCB, errorCB) {
      emailObj.flag = 0;
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ASendEmail,
        emailObj, successCB, errorCB
      )
    },
    sendFindPassswordEmail: function (emailObj, successCB, errorCB) {
      emailObj.flag = 1;
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ASendEmail,
        emailObj, successCB, errorCB
      )
    },
    checkEmailKey: function (activeKey, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ACheckEmailKey,
        activeKey, successCB, errorCB
      )
    },
    ACheckUserIsExist: function (obj, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.ACheckUserIsExist,
        obj, successCB, errorCB
      )
    },
    getResetPasswordKey: function (obj, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.AGetResetPasswordKey,
        obj, successCB, errorCB
      )
    },
    resetPassword: function (obj, successCB, errorCB) {
      YLBASE.YLAJAX.postForm(
        YLBASE.YLUrlMananger.AResetPassword,
        obj, successCB, errorCB
      )
    },


  };

export  default  UserService;




