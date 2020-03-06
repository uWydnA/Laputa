<template>
  <div>
    <div class="biaoti" v-show="isShow">
      <h2>{{this.name}}</h2>
    </div>
    <div :class="isClass?'change':''" v-titlelz="10">
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="value"
          :options="option"
          overlay="false"
          @change="handleLZ(value)"
        />
      </van-dropdown-menu>
    </div>
    <div>
      <topicslist :myData="this.myData"></topicslist>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import topicslist from '@/components/TopicsList'
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.directive('titlelz', {
  inserted (el, bind) {
    el.className = ''
    window.onscroll = function () {
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >
        bind.value
      ) {
        el.className = 'change'
      } else {
        el.className = ''
      }
    }
  },
  unbind () {
    window.scroll = null
  }
})
export default {
  methods: {
    handleLZ (data) {
      // console.log(data);
      if (data == 0) {
        this.myData = this.dataList
      } else {
        this.myData = this.dataList.filter(
          item => item.type == this.ooption[data]
        )
      }
    }
  },
  components: {
    topicslist
  },
  data () {
    return {
      myData: [],
      dataList: [],
      isShow: true,
      isClass: false,
      name: '',
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部', value: 0 },
        { text: '视频', value: 1 },
        { text: '图片', value: 2 },
        { text: '全景360', value: 3 }
      ],
      ooption: ['all', 'video', 'photo', 'photo_360']
    }
  },
  mounted () {
    this.$axios
      .get(
        `/api/v2/topics/${this.$route.params.id}/works?lang=zh-Hans&platform=web&device=mobile&sort=hot&filter=featured:true&limit=15&offset=0`
      )
      .then(res => {
        // console.log(res.data.data.items);
        this.dataList = res.data.data.items
        this.myData = res.data.data.items
      })
  },
  created () {
    this.$axios
      .get(
        `/api/v2/topics/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
      )
      .then(res => {
        this.name = res.data.data.item.name
      })
  }
}
</script>

<style lang="scss" scoped>
.change {
  position: fixed;
  top: 46px;
  width: 100%;
  z-index: 10;
}

.biaoti {
  margin-left: 20px;
}
</style>
