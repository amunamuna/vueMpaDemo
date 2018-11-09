<template>
  <div class="main-container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
          <div class="login-container">
            <div class="center">
              <h1>
                <span class="red">纳豆</span>
              </h1>
            </div>

            <div class="space-6"></div>

            <div class="position-relative">
              <div id="login-box" class="login-box visible widget-box no-border">
                <div class="widget-body">
                  <div class="widget-main">
                    <h4 class="header blue lighter bigger">
                      <i class="ace-icon fa fa-coffee green"></i>
                      账户登录
                    </h4>

                    <div class="space-6"></div>
                    <form id="loginForm" method="post">
                      <fieldset>
                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" name="name"  placeholder="输入用户名/邮箱/手机号" onkeydown="check_enter(event)"/>
															<i class="ace-icon fa fa-user"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" name="pass"  placeholder="输入密码" onkeydown="check_enter(event)" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
                        </label>

                        <!--<label class="block clearfix">-->
                        <!--<span class="block input-icon input-icon-right">-->
                        <!--<input type="text" class="form-control"  name="vcode" required  placeholder="验证码" />-->
                        <!--</span>-->
                        <!--</label>-->

                        <!--<label class="block clearfix">-->
                        <!--<span class="block input-icon input-icon-right">-->
                        <!--<img alt="captcha image" src="/c/vcode" width="120px" height="50px"/>-->
                        <!--</span>-->
                        <!--</label>-->

                        <div class="clearfix">
                          <label class="inline">
                            <input type="checkbox" class="ace" name="remember-me"/>
                            <span class="lbl"> 下次自动登录</span>
                          </label>
                          <input type="submit" id="signin" class="width-35 pull-right btn btn-sm btn-primary" value="登 录"/>
                        </div>

                        <div class="space-4"></div>
                      </fieldset>
                    </form>

                    <div class="social-or-login center">
                      <span class="bigger-110">社交帐号登录</span>
                    </div>

                    <div class="space-6"></div>

                    <div class="social-login center">
                      <a class="btn btn-primary">
                        <i class="ace-icon fa fa-facebook"></i>
                      </a>

                      <a class="btn btn-info">
                        <i class="ace-icon fa fa-twitter"></i>
                      </a>

                      <a class="btn btn-danger">
                        <i class="ace-icon fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div><!-- /.widget-main -->

                </div><!-- /.widget-body -->
              </div><!-- /.login-box -->
            </div><!-- /.position-relative -->

          </div>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.main-content -->
  </div><!-- /.main-container -->
</template>

