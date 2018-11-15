<template>
  <div class="step-content pos-rel" id="step-container">

    <div class="step-pane" :class="{active:this.$route.params.step==2}"
         v-if="this.$route.params.step ==2" id="step2">
      <div class="alert alert-block alert-success">
        <button type="button" class="close" data-dismiss="alert">
          <i class="ace-icon fa fa-times"></i>
        </button>
        <p>
          <strong>
            <i class="ace-icon fa fa-check"></i>
            验证邮件已送达 {{forgetForm.username}}
            请登录邮箱，点击激活链接完成注册，激活链接在24小时内有效。
          </strong>

        <p>1.请检查垃圾邮箱</p>
        <p>2.如果还没有收到邮箱，请点击重新发送</p>

        </p>
        <p>
        <div class="text-right">
          <button class="btn btn-sm btn-success" disabled
                  v-if="senderEnableTimer>0"><span>发送成功({{senderEnableTimer}})</span>
          </button>
          <button class="btn btn-sm btn-success" @click="reSendFindPasswordEmail"
                  v-if="senderEnableTimer<=0">重新发送
          </button>
        </div>
        </p>
      </div>
    </div>

    <div class="step-pane" :class="{active:this.$route.params.step==2.5}"
         v-if="this.$route.params.step == '2.5'" id="step2.5">
      <div class="alert alert-block alert-warning">
        <button type="button" class="close" data-dismiss="alert">
          <i class="ace-icon fa fa-times"></i>
        </button>
        <p>
          <strong>
            <i class="ace-icon fa fa-check"></i>
            邮箱链接已失效 {{forgetForm.username}}，请点击重新发送，并登录邮箱，点击激活链接完成注册，激活链接在24小时内有效。
          </strong>
        <p>1.请检查垃圾邮箱</p>
        <p>2.如果还没有收到邮箱,可再次点击重新发送</p>

        </p>
        <p>
        <div class="text-right">
          <button class="btn btn-sm btn-warnning" disabled
                  v-if="senderEnableTimer>0"><span>等待({{senderEnableTimer}})</span>
          </button>
          <button class="btn btn-sm btn-warnning" @click="reSendFindPasswordEmail"
                  v-if="senderEnableTimer<=0">重新发送
          </button>
        </div>
        </p>
      </div>


      <!-- /section:plugins/fuelux.wizard -->
    </div><!-- /.widget-main -->

    <div class="step-pane" :class="{active:this.$route.params.step==2.6}"
         v-if="this.$route.params.step ==2.6" id="step2.6">
      <div class="alert alert-block alert-danger text-center">
        <button type="button" class="close" data-dismiss="alert">
          <i class="ace-icon fa fa-times"></i>
        </button>
        <p>
          <strong>
            无效的链接地址
          </strong>
        </p>
      </div>

    </div>

    <div class="step-pane" id="step3" :class="{active:this.$route.params.step==3}">
      <div class="alert alert-danger" v-if="errMessage">
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
																	<input type="password" id="rpassword" @keyup.enter="changePassword"
                                         v-model="forgetForm.repass"
                                         class="width-100"/>
																</span>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 col-xs-12">
            <button class="btn  btn-primary btn-lg btn-block" @click="changePassword">
              下一步
            </button>
          </div>
        </div>
      </div>
    </div>
  </div><!-- /.widget-main -->
</template>
<style scoped>

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
        loginPage: YLBase.YLUrlMananger.PLogin
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
                      "reSendFindPasswordEmail"
                    ]),
      routerListener: function () {

        if (this.$route.params.step == 2.5 || this.$route.params.step == 3) {
          //如果是，则检查链接上的有效KEY和邮箱是否存在，如果不存在则跳转到无效链接页
          if (this.$route.query.securityKey == "" || this.$route.query.securityKey == null
              || this.$route.query.email == null || this.$route.query.email == "") {
            router.push({
                          path: '/email/2.6'
                        }
            )
            return;
          }
          //激活注册邮箱
          this.$store.state.forgetForm.key = this.$route.query.securityKey;
          this.$store.state.forgetForm.username = this.$route.query.email;
          this.$store.dispatch("checkEmailKey");
        } else {

        }
      }
    },
    created: function () {
      this.routerListener()

    },
    watch: {
      '$route' (to, from) {
        if (to.path != from.path || (to.path == from.path && to.query != from.query)) {
          this.routerListener()
        }
      }
    },

  }
</script>
