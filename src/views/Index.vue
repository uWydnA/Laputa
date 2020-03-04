<template>
  <div>
    <swiper :swiperlist="swiperlist" swiperClass="banner" :key="swiperlist.length"></swiper>
    <div class="hot">
      <div class="left">
        <span>热门航拍点</span>
      </div>
      <a class="right" href="#!">
        <span>热门航拍点集锦</span>
        <van-icon name="play-circle-o" />
      </a>
    </div>
     <!-- <swiper :swiperlist="hotslist" swiperClass="hotslist" :key="hotslist.length"></swiper> -->
     <ul v-if='infolist'>
       <li v-for='(data,index) in infolist' :key='index'>
         <img :src="data.image.small" alt="">
       </li>
     </ul>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
export default {
  components: {
    swiper
  },
  data () {
    return {
      swiperlist: [],
      hotslist: [],
      infolist: []
    }
  },
  mounted () {
    this.$axios({
      url:
        '/api/v2/page-contents/skypixel_root_mobile_banner_top/banners?lang=zh-Hans&platform=web&device=mobile'
    }).then(res => {
      this.swiperlist = res.data.data.items.map(val => val.cover)
    })
    this.$axios({
      url: '/api/v2/geo-tags/weight?lang=zh-Hans&platform=web&device=mobile'
    }).then(res => {
      res.data.data.items.forEach(val => {
        if (val.image && val.featured) {
          this.hotslist.push(val.image.small)
        }
      }
      )
    })
    this.$axios({
      url: '/api/v2/mobile/feeds?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=0'
    }).then(res => {
      res.data.data.items.forEach(val => {
        if (val.cdn_url) {
          this.infolist.push(val)
        }
      })
      console.log(this.infolist)
    })
  }
}
</script>

<style lang="scss" scoped>
.hot {
  padding: 1.6rem 0.8rem 1.2rem;
  display: flex;
  justify-content: space-between;
  .left {
    color: rgba(0, 0, 0, 0.85);
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
  }
  .right {
    font-size: 0.7rem;
    line-height: 1.2rem;
    color: #1890ff;
  }
}
</style>
