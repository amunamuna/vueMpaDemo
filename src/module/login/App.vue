<template xmlns="http://www.w3.org/1999/xhtml">
  <componentLogin></componentLogin>
</template>
<script>
  import componentLogin from "../../components/login/loginContainer.vue"
  export default{
    data(){
      return {
        msg: ''
      }
    },
    components: {
      componentLogin
    }
  }
</script>
