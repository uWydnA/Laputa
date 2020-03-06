<template>
  <div>
    <div class="swiper-container" v-if="this.dataList" :class="'lz'+urlList.substring(0,4)">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in this.dataList" :key="data.slug">
          <img :src="data.image.small" alt />
          <div class="meng"></div>
          <div>
            <img :src="data.user.avatar.small" class="head" />
          </div>
          <div class="name">{{data.user.name}}</div>
          <div>
            <van-icon name="play-circle-o" class="icon" v-show="data.type=='video'?'video':''" />
            <van-icon name="photo-o" class="icon" v-show="data.type=='photo'?'photo':'' " />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      dataList: []
    };
  },
  props: ["urlList"],
  mounted() {
    this.$axios
      .get(
        `/api/v2/tags/${this.urlList}/works?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=0`
      )
      .then(res => {
        // console.log(res.data.data.items);
        this.dataList = res.data.data.items;
      });
  },
  updated() {
    const str =
      "." +
      ("lz" + this.urlList.substring(0, 4)
        ? "lz" + this.urlList.substring(0, 4)
        : "swiper-container");
    new this.$swiper(str, {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true
    });
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 125px;
  height: 125px;
  border-radius: 5px;
}
.swiper-slide {
  position: relative;
  .meng {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 125px;
    height: 125px;
    background: black;
    opacity: 0.4;
    border-radius: 5px;
  }
  .head {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 15px;
    left: 14px;
    border-radius: 50%;
  }
  .name {
    position: absolute;
    bottom: 17px;
    left: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.8rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: #fff;
    width: 5rem;
    overflow: hidden;
  }
  .icon {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 5px;
    right: -15px;
    color: white;
  }
}
</style>