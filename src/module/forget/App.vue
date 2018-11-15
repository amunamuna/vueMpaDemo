<template xmlns="http://www.w3.org/1999/xhtml">
  <div>
    <div class="main-content">
      <!-- /section:basics/content.breadcrumbs -->
      <div class="page-content">
        <div class="page-header">
          <h1>
            纳豆
            <small>
              <i class="ace-icon fa fa-angle-double-right"></i>
              找回密码
            </small>
          </h1>
        </div><!-- /.page-header -->

        <div class="row">
          <div class="center">
            <h2>找回密码</h2>
          </div>
          <!-- PAGE CONTENT BEGINS -->
          <div class="col-sm-8 col-sm-offset-2 col-xs-12 ">
            <!-- #section:plugins/fuelux.wizard -->
            <div id="fuelux-wizard-container">
              <!-- #section:plugins/fuelux.wizard.steps -->
              <ul class="steps">
                <li data-step="#step1" :class="{active:true,complete:this.$route.params.step>=2}">
                  <span class="step">1</span>
                  <span class="title">基本信息</span>
                </li>

                <li data-step="#step2" :class="{active:this.$route.params.step>=2,complete:this.$route.params.step>=3}">
                  <span class="step">2</span>
                  <span class="title">身份验证</span>
                </li>

                <li data-step="#step3" :class="{active:this.$route.params.step>=3,complete:this.$route.params.step>=4}">
                  <span class="step">3</span>
                  <span class="title">密码重置</span>
                </li>

              </ul>
              <!-- /section:plugins/fuelux.wizard.steps -->
              <!-- /section:plugins/fuelux.wizard.container -->
            </div>
            <router-view></router-view>
            <!-- /section:plugins/fuelux.wizard -->
          </div><!-- /.widget-main -->
        </div><!-- /.row -->

      </div><!-- /.page-content -->
    </div><!-- /.main-content -->
  </div><!-- /.main-container -->

</template>
<style>
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    padding: 0px;
    overflow-x: hidden;;
    background-color: white !important;
  }

  .main-content .page-content {
    padding: 40px 0px 0px 0px;
  }

  .step-content {
    padding-top: 50px;
  }

  .page-content .form-group {
    padding-top: 30px;
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: ''
      }
    }
  }
</script>
