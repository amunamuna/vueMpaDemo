<template>
  <div id="navbar" class="navbar navbar-default navbar-collapse responsive-min">
    <div id="navbar-container" class="navbar-container">

      <div class="navbar-header pull-left">
        <!-- brand text here -->
        <a href="#" class="navbar-brand">
          <!--          <img src="../../assets/u2682.png" style="width: 100px">-->
          <span class="small"> 企业采购平台</span>
          | <span class="small">{{ page }}</span>
        </a>
      </div><!-- /.navbar-header -->

    </div><!-- /.navbar-container -->

  </div><!-- /.navbar -->
</template>

<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    props:["page"],
    components: {}
  }
</script>

<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style scoped>
  /*  #navbar {
  !*    background-color: #eaf2ff;*!
      background-color: white;
    }*/

  #navbar .navbar-brand {
    color: #EEE;
  }

  * {
    font-family: "Microsoft YaHei";
  }
</style>
