<template>
  <div>
    <div class="photographers">
      <div class="_2e8y">
        <div class="oJjm_3Ucp" v-for="data in datalist" :key="data.slug">
          <div class="_1tZU">
            <div class="imgbox">
              <img :src="data.avatar.small" />
            </div>
            <i>{{data.name}}</i>
            <p>{{data.country_name}}</p>
            <div class="_22r_" style="margin-left:3rem;">
              <span>{{data.credit_score}}</span>
              <span>声望</span>
            </div>
            <div class="_22r_">
              <span>{{data.follower_count}}</span>
              <span>粉丝</span>
            </div>
            <div class="_22r_">
              <span>{{data.work_count}}</span>
              <span>作品</span>
            </div>
            <button @click="handleClick()">关注</button>
          </div>
          <div class="_1iEQ">
            <div class="img" v-for="data in data.works" :key="data.slug" @click="handleClick1(data.slug)">
              <img :src="data.image.small" />
              <div class="time" v-show="data.duration">{{data.duration | detaFilter}}</div>
              <div class="time" v-show="data.album_photo_count"><van-icon name="orders-o" />{{data.album_photo_count}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-pagination v-model="currentPage" :page-count="2" mode="simple" @change="handleChange()"/>
  </div>
</template>
<script>
import Vue from 'vue'
import moment from 'moment'
import { Pagination, Popup } from 'vant'
Vue.use(Pagination).use(Popup)
Vue.filter('detaFilter', data => {
  if (data) {
    return moment(data * 1000).format('mm:ss')
  }
})
export default {
  data () {
    return {
      datalist: [],
      currentPage: 1,
      page: ''
    }
  },
  mounted () {
    this.$axios({
      url: `/api/v2/photographers/contract?user_type=&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
    }).then(res => {
      // console.log(res)
      this.datalist = res.data.data.items
    })
  },
  methods: {
    handleChange () {
      this.datalist = []
      this.page = (this.currentPage - 1) * 20
      this.$nextTick(() => {
        this.$axios({
          url: `/api/v2/photographers/contract?user_type=&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
        }).then(res => {
          // console.log(res)
          this.datalist = res.data.data.items
        })
      })
    },
    handleClick () {
      // 登录注册 完成后在完善部分功能
      this.$router.push('/Login')
    },
    handleClick1 (id) {
      this.$router.push(`/Video/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.photographers {
  margin-bottom: 2.5rem;
  // margin-top: 4rem;
  ._2e8y {
    width: 100%;
    margin: 0 auto;
    .oJjm_3Ucp {
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      margin: 0.8rem;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      align-items: center;
      ._1tZU,
      ._1iEQ {
        width: 100%;
      }
      ._1tZU {
        position: relative;
        .imgbox {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          overflow: hidden;
          float: left;
          img {
            width: 2.4rem;
            height: 2.4rem;
          }
        }
        i {
          font-style: normal;
          margin-left: 0.625rem;
          margin-top: 0.625rem;
          font-size: 1rem;
          font-weight: bolder;
        }
        p {
          margin: 0;
          margin-left: 3rem;
          margin-top: 0.325rem;
          font-size: 0.7rem;
          line-height: 0.8rem;
          color: rgba(0, 0, 0, 0.45);
        }
        ._22r_ {
          display: flex;
          flex-direction: column;
          font-size: 0.6rem;
          line-height: 0.8rem;
          color: rgba(0, 0, 0, 0.45);
          float: left;
          margin-left: 0.625rem;
          margin-top: 0.625rem;
          :nth-child(1) {
            color: rgba(0, 0, 0, 0.85);
          }

        }
        button {
          position: absolute;
          color: #fff;
          width: 3.5rem;
          height: 1.6rem;
          font-size: 0.6rem;
          float: right;
          border-radius: 0.2rem;
          border: none;
          background-color: #1088f2;
          right: 0.5rem;
          top: 0rem;
        }
      }
      ._1iEQ {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .img {
          margin-left: 0.625rem;
          margin-bottom: 1rem;
          height: 4.5rem;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .time {
            position: absolute;
            top: 5%;
            right: 4%;
            background-color: rgba(0, 0, 0, 0.6);
            color: #fff;
            font-size: 0.6rem;
            line-height: 1.2rem;
                padding: 0 .4rem;
            font-weight: 600;
            height: 1.2rem;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
