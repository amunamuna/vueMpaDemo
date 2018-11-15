<template>
  <div class="step-content pos-rel" id="step-container">
    <div class="step-pane" id="step2" :class="{active:this.$route.params.step==2}">
      <div class="alert alert-danger" v-if="errMessage">
        {{errMessage}}
        <br>
      </div>
      <div class="form-horizontal">
        <!-- #section:elements.form.input-state -->
        <div class="form-group">
          <label for="vcode" class="col-xs-12 col-sm-3 control-label no-padding-right">
            验证码
          </label>
          <div class="col-sm-6 col-xs-12">
            <div class="input-group">
              <input class="form-control" id=vcode type="text" @keyup.enter="checkVcodeAndGetKey" v-model="forgetForm.vcode">
              <span class="input-group-btn">
																	<a class="btn btn-sm btn-default" v-if="senderEnableTimer<=0"
                                          @click="sendFindPasswordVcode"  type="button">
																		发送验证码
																	</a>
                	                <a class="btn btn-sm btn-default" v-if="senderEnableTimer>0"
                                          type="button" disabled>
																		等待 {{senderEnableTimer}}秒
																	</a>
              </span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 col-xs-12">
            <button class="btn  btn-primary btn-lg btn-block" @click="checkVcodeAndGetKey"
                    data-last="Finish">
              下一步
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="step-pane" id="step3" :class="{active:this.$route.params.step==3}">
      <div class="alert alert-danger" v-if="errMessage" >
        {{errMessage}}
        <br>
      </div>
      <div class="form-horizontal" id="sample-form">
        <!-- #section:elements.form.input-state -->
        <div class="form-group">
          <label for="password" class="col-xs-12 col-sm-3 control-label no-padding-right">
            新密码
          </label>
          <div class="col-sm-6 col-xs-12">
																<span class="block">
																	<input type="password" id="password" v-model="forgetForm.pass"
                                         class="width-100"/>
																</span>
          </div>
        </div>
        <div class="form-group">
          <label for="rPassword" class="col-xs-12 col-sm-3 control-label no-padding-right">
            确认密码
          </label>
          <div class="col-sm-6 col-xs-12">
																<span class="block">
																	<input type="password" id="rpassword" @keypress.enter="changePassword" v-model="forgetForm.repass"
                                         class="width-100"/>
																</span>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 col-xs-12">
            <a class="btn  btn-primary btn-lg btn-block" @click="changePassword">
              下一步
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="step-pane" id="step4" :class="{active:this.$route.params.step==4}">>

      <div class="alert alert-block alert-success">
        <button type="button" class="close" data-dismiss="alert">
          <i class="ace-icon fa fa-times"></i>
        </button>
        <p class="center">
          <strong>
            <i class="ace-icon fa fa-check"></i>
            修改密码成功
          </strong>
          <strong>
            点击 <a :href="loginPage">返回登陆页</a>
          </strong>
        </p>

      </div>

    </div><!-- /.widget-main -->
  </div>
</template>
<style>
  body {
    background-color: #ff0000;
  }
</style>
<script>

  import router from "../../components/forgetPassword/router"
  import {mapState, mapGetter, mapMutations, mapActions} from 'vuex'
  import store from "../../components/forgetPassword/store"
  import YLBase from "../../common/base"
  export default{
    store: store,
    components: {},
    data: function () {
      return {
          loginPage:YLBase.YLUrlMananger.PLogin
      }
    },
    computed: {
      ...mapState([
                    "forgetForm",
                    "errMessage",
                    "senderEnableTimer"
                  ]),
    },
    methods: {
      ...mapActions([
                      "moveToValidateStep",
                      "sendFindPasswordVcode",
                      "checkVcodeAndGetKey",
                      "changePassword",

                    ])
    },

    created: function () {
      if (this.$store.state.forgetForm.username == "") {
        router.push("/")
      }
    }
  }
</script>
