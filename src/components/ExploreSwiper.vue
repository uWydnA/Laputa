<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(data,index) in this.dataList" :key="index">
          <img :src="data.image.small" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
// import swiper from 'swiper'
export default {
  data () {
    return {
      url: '4364b0a3-8383-42b9-9118-4ef91d11bbb0',
      dataList: []
    }
  },
  mounted () {
    this.$axios
      .get(
        `/api/v2/tags/${this.url}/works?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=0`
      )
      .then(res => {
        // console.log(res.data.data.items);
        this.dataList = res.data.data.items
      })
  },
  updated () {
    new this.$swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 125px;
  height: 125px;
}
</style>
