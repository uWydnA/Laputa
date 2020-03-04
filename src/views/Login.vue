<template>
  <div class='login'>
    <div class="loginText">
      <span>登录</span>
    </div>
    <form>
      <div class="lable">
        <span>请输入你的邮箱账号\手机*</span>
        <input type="text" />
      </div>
      <div class="lable">
        <span>请输入密码*</span>
        <input type="password" />
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
      <div class='remberPw'>
        <van-checkbox v-model="checked" shape="square" icon-size="18px" @click="handleRemeber()">记住密码</van-checkbox>
        <span style="color:blue" @click="handleForget()">忘记密码?</span>
      </div>
      <div class="loginIN">
        <button>登录</button>
      </div>
    </form>
    <div class='Noaccount'>
      <span>还没有账号？</span>
      <span @click="handleRegister()" class="reger">注册</span>
    </div>
    <div class="otherLogin">
        <div class="otherway">其他登录方式</div>
        <div>新浪微博</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Checkbox } from 'vant'
Vue.use(Checkbox)
export default {
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onSubmit () {
      console.log('点击登录，跳转首页')
    },
    handleRegister () {
      console.log('点击跳转注册页面')
      this.$router.push('/signup')
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
    .code{
      display: flex;
      justify-content: flex-start;
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
    .remberPw{
      display: flex;
      justify-content: space-between;
      margin-top: .75rem;
      font-size: 0.6rem;
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
      .reger{
        color: #1088f2;
      }
    }
    .otherLogin{
      height: 8rem;
      line-height: 1.5rem;
      color: #707473;
      font-size: .7rem;
      text-align: center;
      margin-top: 2rem;
      .otherway{
        height: 6rem;
        line-height: 6rem;
      }
    }
  }
</style>
