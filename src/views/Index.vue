<template>
  <div>
    <swiper
      :swiperlist="swiperlist"
      swiperClass="banner"
      :key="swiperlist.length?swiperlist.length:'swiper'"
    ></swiper>
    <div class="hot">
      <div class="left">
        <span>热门航拍点</span>
      </div>
      <a class="right" href="#!">
        <span>热门航拍点集锦</span>
        <van-icon name="play-circle-o" />
      </a>
    </div>
    <swiperHot
      :swiperlist="hotslist"
      swiperClass="hotslist"
      :key="hotslist.length?hotslist.length:'swiperHot'"
    ></swiperHot>
    <lazy-component>
      <ul class="infoUl">
        <carbar v-for='data in barlist' :key="data.slug" :cardata="data"></carbar>
      </ul>
    </lazy-component>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast, Lazyload } from "vant";
import swiper from "@/components/Swiper";
import swiperHot from "@/components/SwiperBackground";
import carbar from "@/components/CardBar";
import { mapMutations, mapState } from "vuex";
Vue.use(Toast);
Vue.use(Lazyload, {
  lazyComponent: true
});
export default {
  components: {
    swiper,
    swiperHot,
    carbar
  },
  data() {
    return {
      swiperlist: [],
      hotslist: [],
      barlist: [],
      ulHeight: 5500,
      flag: true,
      inow : 0
    };
  },
  mounted() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true
    });
    this.$axios({
      url:
        "/api/v2/page-contents/skypixel_root_mobile_banner_top/banners?lang=zh-Hans&platform=web&device=mobile"
    }).then(res => {
      this.swiperlist = res.data.data.items.map(val => val.cover);
    });
    this.$axios({
      url: "/api/v2/geo-tags/weight?lang=zh-Hans&platform=web&device=mobile"
    }).then(res => {
      res.data.data.items.forEach(val => {
        if (val.image && val.featured) {
          this.hotslist.push(val);
        }
      });
    });
    this.$axios({
      url:
        "api/v2/mobile/feeds?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=0"
    }).then(res => {
      this.barlist = res.data.data.items;
      setTimeout(() => {
        this.ulHeight = document.querySelector(".infoUl").clientHeight - 1200;
      }, 0);
      Toast.clear();
    });
    this.scrollGet();
  },
  methods: {
    ...mapMutations("login", ["setToken"]),
    scrollGet() {
      if (this.barlist) {
        window.onscroll = () => {
          var num = 0;
          if (document.documentElement.scrollTop > this.ulHeight) {
            num = parseInt(
              document.documentElement.scrollTop / this.ulHeight
            );
            if(num>this.inow){
              this.flag = true;
            }
            if (this.flag) {
              this.flag = false;
              this.inow = num;
              this.$axios({
                url: `/api/v2/mobile/feeds?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=${16 *
                  num}`
              }).then(res => {
                if (this.barlist) {
                  this.barlist = [...this.barlist, ...res.data.data.items];
                }
              });
            }
          }
        };
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    window.onscroll = null
    next();
  },
  computed: {
    ...mapState("login", ["token"])
  }
};
</script>

<style lang="scss" scoped>
.hot {
  background-color: #fff;
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
