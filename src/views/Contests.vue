<template>
  <div v-if='datalist'>
    <div class="header">
      <div class="back">
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg1.2bce50b4.png"
          alt
        />
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg2.6ed12418.png"
          alt
        />
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg3.3643a22d.png"
          id="headerbg3"
          alt="snow mountain"
          style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"
        />
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg4.db12d957.jpg"
          id="headerbg4"
          alt="sky"
          style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"
        />
      </div>
      <div class="logo">
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-brand-cn.5297cbc3.png"
          alt
        />
        <img src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/five-years.46c34474.png" alt="">
        <h2 class="title">{{datalist.title}}</h2>
        <h3 class="des">{{datalist.description}}</h3>
        <h4>向下滑查看获奖名单</h4>
        <div class="jR7N"><div class="_2FQi"><div class="dcML"></div></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    this.$axios({
      url: `/api/v2/contests/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
    }).then(res => {
      this.datalist = (res.data.data.item)
      console.log(this.datalist)
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  .back {
    img {
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
    }
    img:nth-child(2) {
      z-index: 33;
      bottom: 0;
    }
    img:first-child {
      z-index: 44;
      bottom: -21.8rem;
    }
    img:nth-child(3) {
      z-index: 22;
      bottom: 5.8rem;
    }
    img:nth-child(4) {
      z-index: 11;
      height: 28rem;
    }
  }
}
.logo {
  transform-origin: 0 100%;
  animation: showOut 2s ease ;
  position: absolute;
  z-index: 111;
  width: 11.8rem;
  top:7rem;
  left:0;
  right: 0;
  margin:0 auto;
  height: 1rem;
  text-align: center;
  img{width: 100%;margin-bottom: 1rem;}
  .title{
  font-size: 1.5rem;
  line-height: 1.7rem;
  font-weight: 600;
  color:#fff;
  }
  .des{
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 1.2rem;
  color:#fff;
  font-weight: 400;
  }
  h4{
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 1.2rem;
  color:#fff;
  font-weight: 400;
  }
}
.jR7N {
    margin: 1.6rem auto 0;
}
.jR7N ._2FQi {
    width: 1px;
    height: 2rem;
    margin: 0 auto;
}
.jR7N ._2FQi .dcML {
    background-color:
    #fff;
    width: 100%;
    height: 100%;
    transform-origin: 0 100%;
    animation: fade 2s ease infinite;
}
@keyframes fade {
   0%{
     transform: translateY(0px);
       height: 100%;
      opacity: 1;
    }

    100%{
       transform: translateY(50px);
      height: 0;
      opacity: 0;
    }
}
@keyframes showOut {
   0%{
     transform: translateY(500px);
    }

    100%{
       transform: translateY(0px);
    }
}
</style>
