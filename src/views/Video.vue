<template>
    <div>
        <div class='header'>
            <div class='user'>
                <img :src='userImg'/>
                <div>
                    <h3>{{ userName }}</h3>
                    <p v-if='location'>
                       <img src='https://i.52112.com/icon/jpg/256/20200113/71287/3038442.jpg'/>
                       <span>{{ location }}</span>
                    </p>
                </div>
            </div>
            <div class='follow' :class='isFollow ? "gray":""' @click='handelFollow'>
                {{ isFollow?'已关注':'+关注'}}
            </div>
        </div>
        <myvideo :videoUrl='videoUrl' :posterUrl='posterUrl' v-if='videoUrl'></myvideo>
        <div class='share'>
            <div class='thumb'>
                <div class='left'>
                    <p>
                       <img @click='handelPraise'
                       :src='ispraise?"https://i.52112.com/icon/jpg/256/20190827/55875/2492795.jpg":
                       "https://i.52112.com/icon/jpg/256/20190827/55874/2492789.jpg"'/>
                       <span>{{ praiseNum }}</span>
                    </p>
                    <p>
                       <img src='https://i.52112.com/icon/jpg/256/20191127/67812/2918605.jpg'/>
                       <span>0</span>
                    </p>
                    <p>
                       <img src='https://i.52112.com/icon/jpg/256/20180926/22083/1056842.jpg'/>
                       <span>分享</span>
                    </p>
                </div>
                <div class='right'>
                    <img @click='handelCollect'
                    :src='isCollect?"https://i.52112.com/icon/jpg/256/20140810/393/35883.jpg":
                    "https://i.52112.com/icon/jpg/256/20170915/8716/494850.jpg"'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myvideo from '@/components/Video'
import axios from 'axios'
import { mapState } from 'Vuex'

export default {
  data () {
    return {
      isFollow: false,
      ispraise: false,
      isCollect: false,
      praiseNum: 0,
      videoUrl: '',
      posterUrl: '',
      userImg: '',
      userName: '',
      location: ''
    }
  },
  components: {
    myvideo
  },
  mounted () {
    // 请求数据
    axios.get(`/api/v2/videos/${this.videoId}?lang=zh-Hans&platform=web&device=mobile`)
      .then(res => {
        // this.videoUrl = res.data.data.item.cdn_url.medium
        // this.posterUrl = res.data.data.item.image.medium

        this.userImg = res.data.data.item.user.avatar.small
        this.userName = res.data.data.item.user.name
        this.location = res.data.data.item.location ? res.data.data.item.location.label : ''
        this.praiseNum = res.data.data.item.like_count
      })
    // console.log(this.videoId)
    // console.log(this.$route.params)
  },
  computed: {
    ...mapState('video', ['videoId'])
  },
  methods: {
    // 是否关注
    handelFollow () {
      this.isFollow = !this.isFollow
    },
    // 点赞
    handelPraise () {
      this.ispraise = !this.ispraise
      // 点赞数计算
      this.ispraise ? this.praiseNum++ : this.praiseNum--
    },
    // 收藏
    handelCollect () {
      this.isCollect = !this.isCollect
    }
  }
}
</script>

<style lang="scss" scoped>
    p,h3{
        margin:0;
    }
    .header{
        display: flex;
        padding: .5rem 2rem;
        justify-content: space-between;
        .user{
            display: flex;
            justify-content: space-between;
            img{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 1rem;
                h3{
                    font-size: 1rem;
                }
                p{
                    color:gray;
                    img{
                        width: .7rem;
                        height: .7rem;
                        margin-bottom: .1.7rem;
                    }
                }
            }
        }
        .follow{
            width: 2.6rem;
            height: 2rem;
            text-align: center;
            align-self: center;
            background: rgb(236, 235, 235);
            font: .8rem/2rem '';
            padding: 0 .5rem;
            color: blue;
        }
        .gray{
            color: gray;
        }
    }
    .share{
        text-align: center;
        padding: 0 2rem;
        img{
            width: 1rem;
            align-self: center;
        }
        .thumb{
            padding: 1rem 0;
            border-bottom: .1rem solid rgb(236, 236, 236);
            display: flex;
            justify-content: space-between;
            .left{
                display: flex;
                p{
                  display: flex;
                  justify-content: space-between;
                  span{
                      align-self: center;
                      width: 3rem;
                  }
                }
            }
        }
    }
</style>
