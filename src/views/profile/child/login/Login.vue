<template>
  <div>
    <nar-bar title="登录"
    :isLeftArrow=true
    :isRightArrow=true
    rightText="注册"
    @clickRight="onClickRight" />
    <!-- 登录方式 -->
    <div class="loginFun">
      <span @click="isPassLogin" :class="isFun ? 'span-left active' : 'span-left'">密码登录</span>
      <span class="link"></span>
      <span @click="isPhoneLogin" :class="!isFun ? 'span-right active' : 'span-left'">手机登录</span>
    </div>
    <!-- form表单 -->
    <!-- 密码登陆 -->
    <van-form v-if="isFun" @submit="onSubmit">
      <van-field
        v-model="student_id"
        name="student_id"
        label="学号"
        placeholder="学号"
        :rules="[{ required: true, message: '请填写学号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
    <!-- 手机号登陆 -->
    <van-form v-else @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <div>
        <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        name="phoneCode"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button @click="sendCode" size="small" type="primary" native-type="button">发送验证码</van-button>
        </template>
      </van-field>
      </div>
      <div style="margin: 16px;">
        <van-button @click="BtnPhoneLogin" round block type="info" native-type="button">
          登陆
        </van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'

import {login, getPhoneCode, Phonelogin} from 'network/user'
export default {
  data() {
    return {
      student_id: '',
      password: '',
      sms: '',
      phone: '',
      isFun: true
    };
  },
  methods: {
    onClickRight () {
      this.$router.push({
        path: '/resiger'
      })
    },
    onSubmit(values) {
      console.log(values)
      login(values).then(res => {
        // console.log(res)
        if(res.data.code === 200){
          // 把用户信息存储在store中
          this.$store.commit('loginAfter', res)
          this.$toast.success('登陆成功')
          this.$router.go(-1)
        } else {
          this.$toast.fail(res.data.msg)
        }
      })
    },
    // 手机登陆
    BtnPhoneLogin () {
      let phone = this.phone
      let code = this.sms
      let data = {
        phone,
        code
      }
      Phonelogin (data).then(res => {
        // console.log(res)
        if(res.data.code === 200){
          // 把用户信息存储在store中
          this.$store.commit('loginAfter', res)

          this.$toast.success('登陆成功')
          this.$router.go(-1)
        }
      })
    },
    isPassLogin () {
      this.isFun = true
    },
    isPhoneLogin () {
      this.isFun = false
    },
    sendCode () {
      getPhoneCode(this.phone)
    }
  },
  components: {
    NarBar
  }
}
</script>

<style>
  .loginFun{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .link {
   width: 100px;
  height: 20%;
  border-right: solid #ACC0D8 1px;
  padding: 0 5px;
  margin-right: 10px;
  /* padding-right: 10px; */
  }
  span{
    padding:5px 0;
  }
  .span-left {
    padding: 5px 10px;
  }
  .span-right {
    padding: 5px 10px;
  }
  .active {
    border-bottom: 2px solid blue;
  }
</style>