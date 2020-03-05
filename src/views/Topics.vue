<template>
  <div>
    <div class="biaoti" v-show="isShow">
      <h2>{{this.name}}</h2>
    </div>
    <div :class="isClass?'change':''">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" overlay="false" />
      </van-dropdown-menu>
    </div>
    <div class="list">
      <ul>
        <li v-for="(data,index) in dataList" :key="index">
          <img :src="data.image.small" alt />
          <p>{{data.title}}</p>
          <div>
            <van-icon name="good-job-o lz" />
            <span>{{data.like_count}}</span>
            <van-icon name="chat-o lz" />
            <span>{{data.comment_count}}</span>
            <van-icon name="share lz" />
          </div>
          <i v-show="data.badges.length>=1?'true':''">
            <img
              src="//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/ordinary-s.25f33d98.svg"
              class="te"
            />
          </i>
          <i v-show="data.badges.length>=2?'true':''">
            <img
              src="//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/copper-s.ff4c9280.svg"
              class="te2"
            />
          </i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
// 主分组
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      dataList: [],
      isShow: true,
      isClass: false,
      name: "",
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      },
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部", value: 0 },
        { text: "视频", value: 1 },
        { text: "图片", value: 2 },
        { text: "全景360", value: 3 }
      ]
    };
  },
  mounted() {
    this.$axios
      .get(
        `/api/v2/topics/${this.$route.params.id}/works?lang=zh-Hans&platform=web&device=mobile&sort=hot&filter=featured:true&limit=15&offset=0`
      )
      .then(res => {
        console.log(res.data.data.items);
        this.dataList = res.data.data.items;
      });
  },
  created() {
    this.$axios
      .get(
        `/api/v2/topics/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
      )
      .then(res => {
        this.name = res.data.data.item.name;
      });
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 12.5rem;
}

.change {
  position: fixed;
  top: 46px;
  width: 100%;
  z-index: 10;
}

.biaoti {
  margin-left: 20px;
  // background: white;
}

ul {
  li {
    margin-bottom: 20px;
    position: relative;
    .te {
      position: absolute;
      top: 5px;
      left: 5px;
      height: 1rem;
      width: 1rem;
    }
    .te2 {
      position: absolute;
      top: 5px;
      left: 25px;
      height: 1rem;
      width: 1rem;
    }
  }
}

.list {
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: #333;
    margin-left: 15px;
  }
  div {
    margin-left: 15px;
    span {
      color: #838385;
      display: inline-block;
      line-height: 16px;
      font-size: 14px;
      margin: 0 10px;
    }
    .lz {
      vertical-align: middle;
      color: #838385;
    }
  }
}
</style>
