<template>
  <div v-if='datalist'>
    <h3>{{datalist.name}}</h3>
  </div>
</template>
<script>
export default {
  props: ['datalist']
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  position: relative;
  z-index: 20;
  padding: 2rem 2rem 0.8rem;
  box-sizing: border-box;
  line-height: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
