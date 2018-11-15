<template>
  <div class="step-content pos-rel" id="step-container">

    <div class="step-pane active" id="step1">
      <div class="alert alert-danger" v-if="errMessage">
        {{ errMessage }}
        <br>
      </div>
      <div class="form-horizontal">
        <div class="form-group">
          <label for="username" class="col-xs-12 col-sm-3 control-label no-padding-right">
            用户名
          </label>
          <div class="col-sm-6 col-xs-12">
																<span class="block">
																	<input type="text" v-model="forgetForm.username" id="username"
                                         class="width-100" @keyup.enter="moveToValidateStep" placeholder="请输入手机号或邮箱"/>
																</span>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 col-xs-12">
            <a class="btn  btn-primary btn-lg btn-block" @click="moveToValidateStep">
              下一步
            </a>
          </div>
        </div>

      </div>
    </div>


  </div><!-- /.widget-body -->
</template>
<style scoped>


  /* .main-content .page-content {
     padding-top: 80px;
   }*/

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
      return {}
    },
    computed: {
      ...mapState([
        "forgetForm",
        "errMessage"
      ]),
    },
    methods: {
      ...mapActions([
        "moveToValidateStep",
      ])
    },

    created: function () {
      this.$store.state.errMessage = ""
    }
  }
</script>
