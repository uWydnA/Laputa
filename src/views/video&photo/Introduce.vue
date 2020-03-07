<template>
    <div class='introduce'>
        <div class='title'>
            <img src='//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/ordinary-s.25f33d98.svg'/>
            <p>{{ item.title }}</p>
        </div>
        <div class='browse'>
            <p><span>{{ item.view_count }}</span><span>次浏览</span></p>
            <p><span>使用</span><span class='equipment'>{{ item.equipment.name }}</span><span>拍摄</span></p>
        </div>
        <div class='describe' :class='isOpen?"spread":""'>
            <p class='description'>{{ item.description }}</p>
            <p class='time'>{{ item.created_at | filterDate}}</p>
            <div class='tag'>
                <ul>
                    <li v-for='data in item.tags' :key='data.name'>
                    {{ data.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class='open' @click='isOpen = !isOpen'>
            <i class='iconfont' :class='isOpen?"icon-icon-test58":"icon-icon-test60"'></i>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
// 时间戳过滤
Vue.filter('filterDate', (date) => {
  return moment(date).format('YYYY-MM-DD  h:mm')
})

export default {
  props: ['item'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
    p,h3{
            margin:0;
    }
    .introduce{
        padding: 1rem;
        .title{
                display: flex;
            img{
                width: 1.5rem;
            }
            p{
                margin-left: .5rem;
                font-size: 1rem
            }
        }
        .browse{
            padding: .5rem 0;
            display: flex;
            p{
            margin-right: 2rem;
            font-size: .9rem;
            color: gray;
                span.equipment{
                    color: blue;
                }
            }
        }
    }
    .describe{
        height: 3rem;
        overflow: hidden;
        .description{
            font-size: .9rem;
            padding: .5rem 0;
            color: gray;
        }
        .time{
            font: .8rem/2 '';
            color: rgb(190, 190, 190);
        }
        .tag{
            padding: .5rem 0;
            overflow-x: scroll;
            ul{
                width: 50rem;
                display: flex;
                li{
                    font: .9rem/2 '';
                    padding: 0 .5rem;
                    margin: .1rem .5rem;
                    background:rgb(240, 238, 238);
                    color: gray;
                }
            }
        }
    }
    .open{
        text-align: center;
    }
    .spread{
        overflow:hidden;
        height:auto;
    }
</style>
