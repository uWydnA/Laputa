<template>
  <div>
    <!-- {{$route.params.id}} -->
    <div class="banner">
      <div class="iconfont icon-icon-test16 set" @click="setTing()"></div>
    </div>
    <div class="head">
      <div class="iconfont icon-icon-test35 user"></div>
      <div class="name">{{$route.params.id | filter }}</div>
    </div>
    <div class="many">
      <ul>
        <li v-for="(data,index) in datalist" :key="index">
          <div>{{data.number}}</div>
          <div>{{data.title}}</div>
        </li>
      </ul>
    </div>
    <div class="more">
        <ul>
          <li :class="isShowA" @click="handleA()">全部作品</li>
          <li :class="isShowB" @click="handleB()">收藏</li>
        </ul>
        <div class="botton">
          <div class="iconfont icon-ai238 gengduo" :class="isShowC" @click="handleC()"></div>
          <div class="iconfont icon-liebiao2 liebiao" style="font-size:1.5rem;margin-top:0.24rem;" :class="isShowD" @click="handleD()"></div>
        </div>
        <div class="all" v-show='this.isShowA.active'>
          <div>你还没有发过作品哦</div>
          <div>在<a href="https://www.dji.com/cn/goapp">DJI GO</a>或桌面端网页发布作品</div>
        </div>
        <div class="Sc" v-show="this.isShowB.active">
          <div>你还没有收藏哦</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        { number: 1, title: '声望' },
        { number: 0, title: '粉丝' },
        { number: 0, title: '关注' },
        { number: 0, title: '被赞' }
      ],
      isShowA: {
        active: true
      },
      isShowB: {
        active: false
      },
      isShowC: {
        activeB: true
      },
      isShowD: {
        activeB: false
      }
    }
  },
  methods: {
    setTing () {
      console.log(111)
    },
    handleA () {
      this.isShowA.active = true
      this.isShowB.active = false
    },
    handleB () {
      this.isShowA.active = false
      this.isShowB.active = true
    },
    handleC () {
      this.isShowC.activeB = true
      this.isShowD.activeB = false
    },
    handleD () {
      this.isShowC.activeB = false
      this.isShowD.activeB = true
    }
  },
  filters: {
    filter (data) {
      return data.slice(0, 13)
    }
  }

}
</script>
<style lang="scss" scoped>
  .banner{
    width: 100%;
    height: 13rem;
    background: url('https://cdn-usa.skypixel.com/uploads/usa_files/default_images/default_personal_cover/508c62ce-a382-49a9-b395-fadeeaa91c59.jpg@!550') no-repeat;
    background-size: 100% 100%;
    position: relative;
    .set{
      color: white;
      position: absolute;
      bottom: 0.6rem;
      right: 0.6rem;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
  .head{
    display: flex;
    justify-content: flex-start;
    padding: 0 .8rem;
    position: relative;
    .user{
      width: 4.8rem;
      height: 4.8rem;
      font-size: 4.8rem;
      flex: 1;
      color:#ccc;
      background:white;
      border-radius:50%;
      position: absolute;
      left: .8rem;
      top:-2.8rem;
    }
    .name{
      flex: 3;
      height: 2rem;
      font-size: 1rem;
      line-height: 2rem;
      color: #4b4b4b;
      margin-left: 5.5rem;
    }
  }
  .many{
    margin-top: .4rem;
    padding: 1rem;
    ul{
      display: flex;
      justify-content: space-between;
      li{
        color: #838385;
        text-align: center;
        font-size: .8rem;
        font-weight: 700;
      }
    }
  }
  .more{
    display: flex;
    justify-content:space-between;
    position: relative;
    ul{
      padding: .8rem;
      display: flex;
      justify-content: flex-start;
      flex: 2;
      li{
        font-size: 1rem;
        margin-right: 1rem;
        font-weight: 600;
        color: #b0b0b0;
      }
    }
    .botton{
      flex: 0.35;
      display: flex;
      justify-content: space-between;
      padding: .65rem .8rem;
      div{
        font-size: 1.8rem;
        color:#bbb;
      }
      .activeB{
        color: #4b4b4b;
      }
    }
    .active{
      color: #4b4b4b;
    }
    .all{
      position: absolute;
      font-size: 1rem;
      font-weight: 700;
      padding: 0 .8rem;
      box-sizing: border-box;
      color: #4b4b4b;
      text-align: center;
      width: 100%;
      top:5rem;

    }
    .Sc{
      position: absolute;
      font-size: 1rem;
      font-weight: 700;
      color: #4b4b4b;
      text-align: center;
      width: 100%;
      top:5rem;
    }
  }

</style>
