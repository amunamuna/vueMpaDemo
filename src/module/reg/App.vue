<template xmlns="http://www.w3.org/1999/xhtml">
  <componentReg></componentReg>
</template>
<script>
  import componentReg from "../../components/reg/reg.vue"
  export default{
    data(){
      return {
        msg: ''
      }
    },
    components: {
      componentReg
    }
  }
</script>
