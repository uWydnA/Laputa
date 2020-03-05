<template>
    <div class='share'>
        <div class='thumb'>
            <div class='left'>
                <p>
                    <i @click='handelPraise' class='iconfont' :class='ispraise?"icon-dianzan":"icon-dianzan3"'></i>
                    <span>{{ praiseNum }}</span>
                </p>
                <p>
                    <i class='iconfont icon-icon-test2'></i>
                    <span>0</span>
                </p>
                <p>
                    <i class='iconfont icon-share'></i>
                    <span>分享</span>
                </p>
            </div>
            <div class='right'>
                <i @click='handelCollect' class='iconfont' :class='isCollect?"icon-icon_favorite":"icon-shoucang"'></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['item'],
    data () {
        return {
            ispraise: false,
            isCollect: false,
            praiseNum: 0
        }
    },
    mounted () {
        this.praiseNum = this.item.like_count ? parseInt(this.item.like_count) : 0
    },
    methods: {
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

<style scoped lang='scss'>
        p,h3{
            margin:0;
        }
        .share{
            text-align: center;
            padding: 0 2rem;
        i{
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
                      font-size: .9rem
                  }
                }
            }
        }
    }
</style>