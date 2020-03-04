<template>
  <div>
    <div class="title">
      <router-link to="/explore/list" v-for="(data,index) in titleImg" :key="index" class="box">
        <img :src="data.image" class="img1" />
        <div class="box1">
          <img :src="data.icon" class="img2" />
          <p>自然</p>
        </div>
      </router-link>
      <biaoqian></biaoqian>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Image } from 'vant'
import axios from 'axios'
import biaoqian from '@/components/Biaoqian'
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
export default {
  components: {
    biaoqian
  },
  data () {
    return {
      titleImg: []
    }
  },
  mounted () {
    axios
      .get('/api/v2/topics?lang=zh-Hans&platform=web&device=mobile&limit=10')
      .then(res => {
        console.log(res.data.data.items)
        this.titleImg = res.data.data.items
      })
  }
}
</script>

  <style lang="scss" scoped>
.title {
  .box {
    position: relative;
    display: inline-block;
    width: 50%;
    .img1 {
      width: 100%;
      vertical-align: bottom;
      box-sizing: border-box;
      padding-bottom: 2px;
      padding-right: 2px;
    }
    .box1 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      .img2 {
        margin: 28px 0 0 50px;
        width: 50%;
      }
      p {
        vertical-align: baseline;
        top: 69px;
        left: 50px;
        color: white;
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}

// .title {
//   width: 100%;
//   .box {
//     position: relative;
//     .img1 {
//       box-sizing: border-box;
//       width: 50%;
//       vertical-align: bottom;
//       padding: 2px;
//     }
//     .box1 {
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       top: -75px;
//       left: 50px;
//       .img2 {
//         width: 50%;
//       }
//       p {
//         text-align: center;
//         color: white;
//         text-align: left;
//         margin-left: 35px;
//       }
//     }
//   }
// }
</style>
