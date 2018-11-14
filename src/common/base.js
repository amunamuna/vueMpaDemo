var YLAJAX = function () {

  //通用的JSON数据处理函数
  var errorfn = function (data, status, xhr, errorCB) {
    var data = {
      success: false,
      statusCode: XMLHttpRequest.status,
      message: "服务器忙，请稍后再试",
    }
    if (errorCB != null) {
      errorCB(data)
    }
  }

  //通用的JSON成功处理函数
  var successfn = function (data, successCB, errorCB) {
    if (data.success == true) {
      successCB(data)
    } else {
      if (errorCB != null) {
        errorCB(data)
      }
    }
  }
  var _ajax = function (url, method, dataType, data, successCB, errorCB) {
    var contentType = "application/x-www-form-urlencoded;charset=utf-8";
    if (dataType == "json") {
      contentType = "application/json; charset=utf-8";
    }

    $.ajax({
             url: url,
             dataType: "json",
             contentType: contentType,
             data: data,
             type: method,
             success: function (data) {
               successfn(data, successCB, errorCB)
             },
             error: function (data, status, xhr) {
               errorfn(data, status, xhr, errorCB)
             }
           }
    )
  }

  var _getJson = function (url, data, successCB, errorCB) {
    _ajax(url, "GET", "json", data, successCB, errorCB);
  }

  var _postJson = function (url, data, successCB, errorCB) {
    _ajax(url, "POST", "json", data, successCB, errorCB);
  }

  var _getForm = function (url, data, successCB, errorCB) {
    _ajax(url, "GET", "form", data, successCB, errorCB);
  }

  var _postForm = function (url, data, successCB, errorCB) {
    _ajax(url, "POST", "form", data, successCB, errorCB);
  }

  return {
    getJson: _getJson,
    postJson: _postJson,
    getForm: _getForm,
    postForm: _postForm,
    ajax: _ajax,
  }
}();

/*
 *
 * URL管理。。。。。。。。。。。。。。。。。。。
 * */

var YLUrlMananger = function () {

  //var apiHost = "http://192.168.75.202:8080";
  //var apiHost = "http://127.0.0.1:8081";
  var apiHost = "http://127.0.0.1:8080";
  var pageHost = "";
  var ALogin = apiHost + "/api/u/login"; //登陆请求地址
  var AVcodeImg = apiHost + "/api/u/vcode"; //验证码图片
  var ARegisterUser = apiHost + "/api/u/userRegister";
  var ARegisterCompany = apiHost + "/api/u/companyRegister";
  var ASendPhoneCode = apiHost + "/api/u/sendValidCode";
  var ASendEmail = apiHost + "/api/u/sendEmail";
  var ACheckEmailKey = apiHost + "/api/u/responseEmail";
  var AGetUserBaseInfo = apiHost + "/api/u/queryBasicUser";
  var ACheckUserIsExist = apiHost + "/api/u/checkUserIsExist";
  var AGetResetPasswordKey = apiHost + "/api/u/userCertValid";
  var AResetPassword = apiHost + "/api/u/resetPass";

  var PMain = pageHost + "admin";    //管理页地址
  var PForgetPassword = pageHost + "forget.html";
  var PRegPageUrl = pageHost + "reg.html";
  var PLogin = pageHost + "login.html";
  var PXieYi = pageHost + "xieyi.html";


  return {
    ALogin,
    AVcodeImg,
    ARegisterUser,
    ARegisterCompany,
    ASendPhoneCode,
    ASendEmail,
    ACheckEmailKey,
    AGetUserBaseInfo,
    AGetResetPasswordKey,
    ACheckUserIsExist,
    AResetPassword,

    PMain,
    PForgetPassword,
    PRegPageUrl,
    PLogin,
    PXieYi,
  }
}();

/*错误管理器*/

var YLError = {
  UserTokenExpiredError: 11004,
  ImgVcodeError: 11009,
  ActiveEmailExpiredErr:12006,
};

export default  {
  YLAJAX,
  YLError,
  YLUrlMananger,
}
