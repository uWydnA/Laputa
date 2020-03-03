<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  components: {
    navbar
  },
}
</script>
<style lang="scss">
  body{
        font-family: Open Sans,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }
</style>
