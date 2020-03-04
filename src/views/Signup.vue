<template>
  <div class='login'>
    <div class="loginText">
      <span>注册</span>
    </div>
    <div class="pro">
      <a class="active">
        <span>个人 </span>
      </a>
      <a>
        <span>公司</span>
      </a>
    </div>
    <form>
      <div class="lable">
        <span>请输入你的手机号*</span>
        <input type="text" />
      </div>
      <div class="code">
        <div class="lable">
          <span>验证码*</span>
          <input type="text" />
        </div>
        <div class="codeImg" @click="handleChangeCode()">
          <span>111</span>
        </div>
      </div>
      <div class='phoneN'>
        <div class="lable">
          <span>请输入手机验证码*</span>
          <input type="text" />
        </div>
        <div class="setNum">
          <button class='setN'>发送验证码</button>
        </div>
      </div>
      <div class="enter">
        <div class="lable">
          <span>请输入密码*</span>
          <input type="password" />
        </div>
      </div>
      <div class="lable">
        <span>请再次填写密码*</span>
        <input type="password" />
      </div>
      <div class='remberPw'>
        <van-checkbox-group v-model="result">
          <van-checkbox name="a"  shape="square" icon-size="18px">
              我同意
            <span>使用条款</span>
              和
            <span>隐私政策</span>
          </van-checkbox>
          <van-checkbox name="b"  shape="square" icon-size="18px">获取天空之城最新活动、服务、资讯等信息。</van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="loginIN">
        <button>注册</button>
      </div>
    </form>
    <div class='Noaccount'>
      <span>已有账号？</span>
      <span @click="handleLogin()" class="login">登录</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Checkbox, CheckboxGroup } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup)
export default {
  data () {
    return {
      checked: false,
      result: []
    }
  },
  methods: {
    onSubmit () {
      console.log('点击登录，跳转首页')
    },
    handleLogin () {
      console.log('点击跳转登录页面')
      this.$router.push('/login')
    },
    handleChangeCode () {
      console.log('点击更换验证码')
    },
    handleForget () {
      console.log('忘记密码')
    },
    handleRemeber () {
      console.log('是否记住密码', !this.checked)
    }
  }
}
</script>
<style lang="scss" scoped>
  .login{
    box-sizing: border-box;
    padding: 1.2rem .8rem .8rem;
    .loginText{
      font: 900 2rem "";
      margin-bottom: .8rem;
    }
    .pro{
      height: 2rem;
      line-height: 2rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: flex-start;
      a{
        margin-right: 1.6rem;
        font-weight: 700;
      }
    }
    .code{
      display: flex;
      justify-content: flex-start;
      margin-bottom: 0.6rem;
    }
    .enter{
      margin-bottom: 0.6rem;
    }
    .phoneN{
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.6rem;
      .lable{
        flex: 2;
      }
      .setNum{
          flex: 1;
          position: relative;
        .setN{
          color: white;
          width: 100%;
          position: absolute;
          top:1.1rem;
          left: 0.5rem;
          right: 0;
          height: 2.3rem;
          background: #1088f2;
          border: 0;
          border-radius: 0.2rem;

        }
      }

    }
    .lable{
      flex: 3;
      margin-bottom: .5rem;
      font-size: .6rem;
      color: #4b4b4b;
      line-height: .8rem;
      span{
        font-weight: 700;
        display: block;
        margin-bottom: .5rem;
      }
      input{
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        font-weight: 400;
        padding: .6rem;
        border-radius: .2rem;
        border: .5px solid #dfdfdf;
        margin: 0;
      }
    }
    .codeImg{
      flex: 1;
      background: url(../../public/codeBg.jpg) no-repeat;
      margin-left: 0.5rem;
      height: 2.3rem;
      margin-top: 1.2rem;
      line-height: 2.3rem;
      text-align: center;
    }
    .loginIN{
      button{
        width: 100%;
        height: 2.5rem;
        background: #1088f2;
        color: white;
        border: 0;
        border-radius: .2rem;
        margin-top: 2rem;
      }
    }
    .Noaccount{
      text-align: center;
      margin-top: .4rem;
      color: #707473;
      font-size: 0.6rem;
      .login{
        color: #1088f2;
      }
    }
    .remberPw{
      display: flex;
      justify-content: flex-start;
      margin-top: .75rem;
      font-size: 0.6rem;
    }
  }
</style>
