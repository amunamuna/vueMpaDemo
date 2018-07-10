<template>
  <nav-bar></nav-bar>
</template>

<script  type="text/ecmascript-6">
  import navBar from '../components/nav/navbar.vue'
  import {demo} from '../service/getData'
  export default {
    mounted(){
      // 获取当前城市
      demo().then(res => {
      })
    },
    components:{
      navBar
    }
  }
</script>
