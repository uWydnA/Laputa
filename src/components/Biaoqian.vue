<template>
  <div>
    <div class="title">
      <span class="sp">热门标签</span>
    </div>
    <van-panel :title="data.name" icon status="查看全部" v-for="data in this.list" :key="data.slug">
      <div class="sw">
        <swiper1 :urlList="data.slug"></swiper1>
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
.van-cell__title {
  color: #4b4b4b;
  font-size: 0.9rem;
  font-weight: 600;
}
.van-cell__value {
  color: #838385;
  font-size: 0.6rem;
  font-weight: 400;
}
.title {
  display: block;
  padding-top: 15px;
  background-color: white;

  .sp {
    margin-left: 12px;
    font-size: 1rem;
    font-weight: 600;
  }
}
.sw {
  margin-left: 0.8rem;
}
</style>
