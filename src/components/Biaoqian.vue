<template>
  <div>
    <div class="title">
      <span class="sp">热门标签</span>
    </div>
    <van-panel :title="data.name" status="查看全部" v-for="data in this.list" :key="data.slug">
      <div class="sw">
        <swiper1></swiper1>
        <router-view></router-view>
      </div>
    </van-panel>
  </div>
</template>

<script>
import Vue from 'vue'
import { Panel } from 'vant'
import axios from 'axios'
import swiper1 from '@/components/ExploreSwiper'
Vue.use(Panel)
export default {
  components: {
    swiper1
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios
      .get(
        '/api/v2/tags?lang=zh-Hans&platform=web&device=mobile&limit=12&offset=0'
      )
      .then(res => {
        // console.log(res.data.data.items);
        this.list = res.data.data.items
      })
  }
}
</script>

<style lang="scss" scoped>
.title {
  display: block;
  margin-top: 10px;
  .sp {
    margin-left: 12px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
