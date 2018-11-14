<template>
  <div id="navbar" class="navbar navbar-default navbar-collapse responsive-min">
    <div id="navbar-container" class="navbar-container">

      <div class="navbar-header pull-left">
        <!-- brand text here -->
        <a href="#" class="navbar-brand">
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
    components: {}
  }
</script>

<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style scoped>
</style>
