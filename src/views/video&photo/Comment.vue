<template>
    <div class='content'>
        <div class='commentArea'>
            <van-popup class='popup' v-model="show" position="top">
                <label>
                    <textarea placeholder="点击输入你的评论..." v-model='text'></textarea>
                </label>
                <div class='button'>
                    <div class='cancel' @click='show=false'>取消</div>
                    <div class='sure' @click='handelComment'>评论</div>
                </div>
            </van-popup>
            <h3>2条评论</h3>
            <div class='commentInput'>
                <img src='https://cdn-usa.skypixel.com/uploads/usa_files/default_images/default_avatar/99e9657e-0b4b-4547-9e9f-7f0bf6cc5cca.png@!64x64'/>
                <van-cell @click="showPopup">
                    <input readonly = 'readonly' type='text' placeholder="点击输入你的评论"/>
                </van-cell>
            </div>
        </div>
        <ul>
            <li v-for='item in computedData' :key='item.id'>
                <div class='left'>
                    <img :src='item.user.avatar.small'/>
                </div>
                <div class='right'>
                    <div class='user'>
                        <p>{{ item.user.name }}</p>
                        <span>回复</span>
                    </div>
                    <div class='time'>
                        {{ item.user.created_at }}
                    </div>
                    <div class='message'>
                        {{ item.content }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'vant'
import { mapState, mapMutations } from 'vuex'
Vue.use(Popup)

export default {
  props: ['count'],
  data () {
    return {
      show: false,
      text: ''
    }
  },
  mounted () {
    this.$axios.get(`/api/v2/videos/${this.$route.params.id}/comments?lang=zh-Hans&platform=web&device=mobile&limit=10&offset=0`)
      .then(res => {
        this.setComment({
          slug: this.$route.params.id,
          count: this.count,
          items: [...res.data.data.items]
        })
        // console.log(this.comment)
      })
  },
  methods: {
    ...mapMutations('comment', ['setComment']),
    showPopup () {
      this.show = true
    },
    handelComment () {
      var d = new Date()
      this.comment.forEach(val => {
        if (val.slug === this.$route.params.id) {
          val.items.push({
            id: `${d}`,
            user: {
              slug: d,
              name: '游客',
              avatar: {
                small: 'https://cdn-usa.skypixel.com/uploads/usa_files/default_images/default_avatar/99e9657e-0b4b-4547-9e9f-7f0bf6cc5cca.png@!64x64',
                medium: 'https://cdn-usa.skypixel.com/uploads/usa_files/default_images/default_avatar/99e9657e-0b4b-4547-9e9f-7f0bf6cc5cca.png@!64x64',
                large: 'https://cdn-usa.skypixel.com/uploads/usa_files/default_images/default_avatar/99e9657e-0b4b-4547-9e9f-7f0bf6cc5cca.png@!64x64'
              }
            },
            content: this.text,
            like_count: 0,
            liked: false,
            created_at: d
          })
        }
      })
      // console.log(this.comment)
      this.show = false
    }
  },
  computed: {
    ...mapState('comment', ['comment']),
    computedData () {
      var data = this.comment.filter(val => val.slug === this.$route.params.id)
      if (data.length) {
        return data[0].items
      } else {
        return [{
          id: '',
          user: {
            slug: '',
            name: '',
            avatar: {
              small: '',
              medium: '',
              large: ''
            }
          },
          content: '',
          like_count: 0,
          liked: false,
          created_at: ''
        }]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
    p,h3{
        margin: 0;
    }
    .content{
        background: #fff;
        h3{
          font-size: .875rem;
          padding: .8rem 0;
        }
        .commentArea{
            padding: 0 1rem;
            .commentInput{
                display: flex;
                // padding: 1rem 0
                img{
                    width: 2.1875rem;
                    height: 2.1875rem;
                    border-radius: 50%;
                    align-self: center;
                }
                input{
                    width: 100%;
                    height: 2.0625rem;
                    border: none;
                    background: rgb(231, 230, 230);
                    text-indent: .5rem;
                }
            }
        }
    }
    ul{
        padding: 1rem 0;
        font-size: .875rem;
        li{
            border-top: .1rem solid rgb(231, 230, 230);
            padding: 1rem;
            display: flex;
            .left{
                display: flex;
                flex-direction: column;
                img{
                    width: 2.1875rem;
                    height: 2.1875rem;
                    border-radius: 50%;
                }
            }
            .right{
                flex: 1;
                margin-left: 1rem;
                .user{
                    display: flex;
                    justify-content: space-between;
                    span{
                        font-size: .75rem;
                        color: #5151e0;
                    }
                }
                .time{
                    font-size: .75rem;
                    color: gray;
                }
                .message{
                    color: grey;
                }
            }
        }
    }
    .popup{
        label{
            display: block;
            padding: .75rem 1.25rem 1.875rem 1.25rem;
            margin-top: 1.875rem;
            textarea{
                width: 100%;
                height: 8.675rem;
                font-size: .75rem;
                border: none;
            }
        }
        .button{
            display: flex;
            text-align: center;
            font: .875rem/3.125rem '';
            .cancel{
                flex: 1;
                border: .1rem solid rgb(235, 234, 234);
                border-right: none;
            }
            .sure{
                flex: 1;
                border: .1rem solid rgb(235, 234, 234)
            }
        }

    }
</style>
