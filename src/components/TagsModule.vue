<template>
  <div v-if="datalist">
    <h3>{{datalist.name}}</h3>
    <van-dropdown-menu duration:0.1 class="menu">
      <van-dropdown-item v-model="value1" :options="option1" @change='handleClick(value1)' />
    </van-dropdown-menu>
     <van-dropdown-menu duration:0.1  v-if='showNav' class="showNav" >
      <van-dropdown-item :title='datalist.name' v-model="value2" :options="option2"  @change='handleClick(value2)' />
    </van-dropdown-menu>
    <div class="carbar">
      <ul>
        <carbar v-for="data in carlist" :key="data.slug" :cardata="data" :noTags='false'></carbar>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'
import carbar from '@/components/CardBar'
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
export default {
  props: ['datalist', 'carlist', 'showNav'],
  components: {
    carbar
  },
  data () {
    return {
      value1: 'works',
      value2: 'works',
      option1: [
        { text: '全部', value: 'works' },
        { text: '视频', value: 'videos' },
        { text: '图片', value: 'photos' },
        { text: '360°全景图', value: 'photo-360s' }
      ],
      option2: [
        { text: '全部', value: 'works' },
        { text: '视频', value: 'videos' },
        { text: '图片', value: 'photos' },
        { text: '360°全景图', value: 'photo-360s' }
      ]
    }
  },
  methods: {
    handleClick (data) {
      this.$emit('event', data)
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.showNav{
  z-index: 11111;
  position: fixed;
  top:46px;
  left:0;
  width: 100%;
  text-align: left;
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
.menu {
  width: 20%;
  background: transparent;
  text-align: left;
  font-size: 0.8rem;
  color: #4b4b4b;
  font-weight: 600;
}
.van-hairline--top-bottom::after {
  border: 0;
}
</style>
