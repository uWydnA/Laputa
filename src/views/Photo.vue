<template>
    <div v-if='item.title'>
        <myheader :item='item'></myheader>
        <div class='imgbox'>
          <img :src='imgUrl'/>
        </div>
        <share :item='item'></share>
        <introduce :item='item'></introduce>
        <div class='banner'>
            <a href='/contests/2019?from=Mobile-detail-banner_2019contest_CN'>
              <img src='https://sp-webfront-cn.oss-cn-hangzhou.aliyuncs.com/skypixel/v2/public/website/assets/1583222779701-66b90de327d828b2003a99f11289421a.jpg'/>
            </a>
        </div>
        <love></love>
    </div>
</template>

<script>
import myvideo from '@/components/Video'
import { mapState } from 'vuex'
import myheader from './video&photo/Header'
import share from './video&photo/Share'
import introduce from './video&photo/Introduce'
import love from './video&photo/Love'

export default {
  data () {
    return {
      imgUrl: '',
      item: {}
    }
  },
  components: {
    myheader,
    myvideo,
    share,
    introduce,
    love
  },
  mounted () {
    this.$axios.get(`/api/v2/photos/${ this.$route.params.id }?lang=zh-Hans&platform=web&device=mobile&compatible=true`)
      .then(res => {
        this.item = res.data.data.item
        this.imgUrl = res.data.data.item.image.small
      })
  },
  computed: {
    ...mapState('video', ['videoId'])
  }
}
</script>

<style lang="scss" scoped>
    .imgbox{
      overflow: hidden;
    }
   .banner{
      a{
        display: block;
        img{
            display:block;
            width: 100%;
            height: 100%;
          }
      }
   }
    
</style>
