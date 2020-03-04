<template>
  <div class="swiper-container" v-if="swiperlist" :class="swiperClass">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(data,index) in swiperlist" :key="index">
        <!-- <div :style="background-image url(data);"></div> -->
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css'
export default {
  props: ['swiperlist', 'swiperClass'],
  mounted () {
    const str = '.' + (this.swiperClass ? this.swiperClass : 'swiper-container')
    this.swiper = new this.$swiper(str, {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true
    })
  }
}
</script>
