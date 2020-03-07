<template>
    <div v-if='item.title' :key='this.videoId'>
        <myheader :item='item'></myheader>
        <myvideo :videoUrl='videoUrl' :posterUrl='posterUrl' v-if='videoUrl'></myvideo>
        <share :item='item'></share>
        <introduce :item='item'></introduce>
        <div class='banner'>
            <a>
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
      videoUrl: '',
      posterUrl: '',
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
    this.$axios.get(`/api/v2/videos/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`)
      .then(res => {
        this.videoUrl = res.data.data.item.cdn_url.medium
        this.posterUrl = res.data.data.item.image.medium
        this.item = res.data.data.item
        // console.log(res)
      })
    console.log(this.videoId)
    // console.log(this.$route.params.id)
  },
  computed: {
    ...mapState('video', ['videoId'])
  }
}
</script>

<style lang="scss" scoped>
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
