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
              <div id="signup-box" class="signup-box visible widget-box no-border">
                <div class="widget-body">
                  <div class="widget-main">
                    <h4 class="header green lighter bigger">
                      <i class="ace-icon fa fa-users blue"></i>
                      注册新用户
                    </h4>

                    <form id="registForm" method="post">
                      <fieldset>
                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input class="form-control"placeholder="需要通过邮件激活帐户" type="email" name="email"/>
															<i class="ace-icon fa fa-envelope"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" name="username" placeholder="登录用户名" />
															<i class="ace-icon fa fa-user"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" name="password" placeholder="密码" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" name="confirm_password"  placeholder="确认密码" />
															<i class="ace-icon fa fa-retweet"></i>
														</span>
                        </label>

                        <div class="center">
                          <input type="submit" id="signup" class="width-35 btn btn-sm btn-primary" value="注册"/>
                        </div>

                        <div class="space-6"></div>

                        <div class="clearfix">
                          <span style="color:red">*</span> “注册” 按钮，即表示您同意并愿意遵守<a class="look-agreeon" target="_blank" href="//passport.cnblogs.com/agreement.html">用户协议</a>
                        </div>
                      </fieldset>
                    </form>
                  </div>

                </div><!-- /.widget-body -->
              </div><!-- /.signup-box -->
            </div><!-- /.position-relative -->

          </div>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.main-content -->
  </div><!-- /.main-container -->
</template>
