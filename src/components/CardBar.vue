<template>
  <li v-if="cardata">
    <div class="top" @click="setId(cardata.slug)">
      <div class="left">
        <img :src="cardata.user.avatar.small" alt />
      </div>
      <div class="right">
        <div class="name">{{cardata.user.name}}</div>
        <div class="address" v-if="cardata.location">
          <van-icon name="location-o" />
          <p>{{cardata.location?cardata.location.label:''}}</p>
        </div>
      </div>
    </div>
    <div class="content" @click="setId(cardata.slug)">
      <img :src="cardata.image.small" alt />
      <div class="duration" v-if='cardata.duration'>
        <van-icon name="play-circle-o" />
        <span>{{cardata.duration | timeFilter}}</span>
      </div>
    </div>
    <div class="bottom">
      <p class="title">{{cardata.title}}</p>
      <div class="btn">
        <div class="zan" @click="clickZan">
          <van-icon :name="goodjob" size="1.3rem" />
          <p>{{cardata.like_count}}</p>
        </div>
        <div class="chat" @click="clickChat">
          <van-icon name="chat-o" size="1.3rem" />
          <p>{{cardata.comment_count}}</p>
        </div>
        <div class="share">
          <van-icon name="manager-o" size="1.3rem" />
          <p>分享</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import { mapMutations, mapState } from "vuex";
Vue.use(Button);
export default {
  data() {
    return {
      goodjob: "good-job-o"
    };
  },
  props: ["cardata"],
  filters: {
    timeFilter(data) {
      return (
        (parseInt(data / 60) < 10
          ? "0" + parseInt(data / 60)
          : parseInt(data / 60)) +
        ":" +
        (parseInt(data % 60) < 10
          ? "0" + parseInt(data % 60)
          : parseInt(data % 60))
      );
    }
  },
  computed: {
    ...mapState("login", ["token"])
  },
  methods: {
    ...mapMutations("video", ["setVideoId"]),
    setId(data) {
      this.setVideoId(data);
      this.$router.push(`/video/${data}`);
    },
    clickZan() {
      if (!this.token) {
        if (this.goodjob === "good-job-o") {
          this.goodjob = "good-job";
          this.cardata.like_count++;
        } else {
          this.goodjob = "good-job-o";
          this.cardata.like_count--;
        }
      } else {
        this.$router.push("/login");
      }
    },
    clickChat() {
      this.setId(this.cardata.slug);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  display: block;
}
* {
  margin: 0;
  padding: 0;
}
li {
  background-color: #fff;
  width: 100%;
  margin: 0.25rem 0;
  .top {
    display: flex;
    color: #333;
    flex: 1 1 auto;
    align-items: center;
    .left {
      width: 2rem;
      height: 2rem;
      margin: 0.4rem 0.5rem 0.4rem 0.8rem;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      i {
        font-size: 0.5rem;
        font-weight: 600;
        line-height: 1rem;
      }
      .name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        word-wrap: break-word;
        box-sizing: border-box;
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1rem;
      }
      .address {
        font-size: 0.7rem;
        line-height: 1rem;
        color: #838385;
        display: flex;
        align-items: baseline;
      }
    }
  }
  .content {
    position: relative;
    img {
      width: 100%;
      height: 16rem;
    }
    .duration {
      position: absolute;
      top: 0.6rem;
      right: 0.8rem;
      font-size: 0.7rem;
      color: #fff;
      display: flex;
      align-items: center;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      i {
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.225rem;
      }
    }
  }
  .bottom {
    width: 100%;
    // height: 4.2rem;
    padding: 0.75rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      word-wrap: break-word;
      font-size: .9rem;
      font-weight: 500;
      color: #333;
      height: 2rem;
      line-height: 2rem;
    }
    .btn {
      display: flex;
      font-size: 1rem;
      color: #838385;
      .zan,
      .chat,
      .share {
        margin-right: 1rem;
        color: #838385;
        padding: 0.2rem 0;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          margin-right: 0.3rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
      .share p {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
