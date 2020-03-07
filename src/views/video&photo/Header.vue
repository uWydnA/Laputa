<template>
     <div class='header'>
        <div class='user'>
            <img :src='item.user.avatar.small'/>
            <div>
                <h3>{{ item.user.name }}</h3>
                <p v-if='item.location'>
                    <img src='https://i.52112.com/icon/jpg/256/20200113/71287/3038442.jpg'/>
                    <span>{{ item.location.label }}</span>
                </p>
            </div>
        </div>
        <div class='follow' :class='isFollow ? "gray":""' @click='handelFollow'>
            {{ isFollow?'已关注':'+关注'}}
        </div>
    </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      isFollow: false
    }
  },
  methods: {
    // 是否关注
    handelFollow () {
      this.isFollow = !this.isFollow
    }
  }
}
</script>

<style scoped lang='scss'>
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
</style>
