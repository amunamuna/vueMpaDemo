<template>
  <div class="footer">
    <div class="footer-content">
      <div class="row">
        <div class="col-xs-12 center">
          <a href="#">
            帮助中心
          </a>
          |
          <a href="#">
            意见反馈
          </a>
          |
          <a href="#">
            关于我们
          </a>
          |
          <a href="#">
            联系我们
          </a>
        </div>
      </div>
      <div class="space-8"></div>
      <div class="row">
        <div class="col-xs-12 center">
          北京友联信宇科技有限责任公司
        </div>
      </div>
      <div class="space-2"></div>
      <div class="row">
        <div class="col-xs-12 center">
          联系电话：010-58549805 / 010-58549806
        </div>
      </div>
      <div class="space-2"></div>
      <div class="row">
        <div class="col-xs-12 center">
          联系地址：北京市海淀区西二旗大街39号A座3层
        </div>
      </div>
      <div class="space-8"></div>
      <div class="row">
        <div class="col-xs-12 center" style="padding-bottom: 75px;">
          友联信宇 @2016 北京友联信宇科技有限责任公司 版权所有
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }

</script>

<style scoped>

  .footer-content .row a {
    border-right-color: #428bca;
    color: black;
    padding: 0px 40px;

  }

  .footer {
    width: 100% !important;
  }
</style>
