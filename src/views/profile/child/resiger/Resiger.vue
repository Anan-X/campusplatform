<template>
  <div>
    <nar-bar
    title="注册"
    :isLeftArrow=true
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        @keyup="BtnisUserName"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="ConfirmPass"
        type="password"
        name="ConfirmPass"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="studentID"
        name="studentID"
        label="学号"
        placeholder="学号"
        :rules="[{ required: true, message: '学号' }]"
      />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        @blur="isPhone"
        :rules="[{ required: true, message: '手机号' }]"
      />
      <van-field
        v-model="code"
        name="code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button 
          class="btn"
          @click="BtnSendCode" 
          type="primary" 
          native-type="button" 
          :disabled="isDisabled || isOnSubmitBtn">{{BtnText}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" :disabled="isOnSubmitBtn">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { isUserName, getPhoneCode, apiResiger, apiIsPhone } from 'network/user'

import { countDown } from 'common/common'

import NarBar from 'components/common/narbar/NarBar'
export default {
  data() {
    return {
      username: '',
      password: '',
      ConfirmPass: '',
      studentID: '',
      phone: '',
      code: '',
      isOnSubmitBtn: false,
      isDisabled: false,
      BtnText: '发送验证码'
    };
  },
  methods: {
    onSubmit(values) {
      if (this.password === this.ConfirmPass) {
        // 提交
        console.log('submit', values);
        apiResiger(values).then(res => {
          console.log(res)
          if(res.data.code === 200) {
            this.$toast.success(res.data.msg)
            this.$router.go(-1)
          } else {
            this.$notify({
            type: 'danger',
            message: res.data.msg,
            duration: 800
          })
          }
        })
      } else {
        this.$notify({
            type: 'danger',
            message: '两次密码不一致',
            duration: 800
          })
      }
    },
    // 判断用户名是否已被注册
    BtnisUserName () {
      isUserName(this.username).then(res => {
        if (res.data.code === 200){
          this.$notify({
            type: 'success',
            message: res.data.msg,
            duration: 800
          })
          this.isOnSubmitBtn = true
        } else {
          this.$notify({
            type: 'danger',
            message: res.data.msg,
            duration: 800
          })
          this.isOnSubmitBtn = false
        }
      }).catch(error => console.log(error))
    },
    // 判断手机号是否注册
    isPhone() {
      apiIsPhone (this.phone).then(res =>{
        if(res.data.code === 400){
          this.$notify({
            type: 'danger',
            message: res.data.msg,
            duration: 800
          })
          this.isOnSubmitBtn = true
          console.log(this.isOnSubmitBtn)
        } else {
          this.isOnSubmitBtn = false
        }
      })
    },
    BtnSendCode () {
      getPhoneCode (this.phone).then(res => {
        if(res.data.code === 200) {
          this.$notify({
            type: 'success',
            message: res.data.msg,
            duration: 800
          })
          let endFun =  (currenTtime) => {
            if(currenTtime === 0){
              this.BtnText = '发送验证码'
              this.isDisabled = false
            } else {
              this.BtnText = currenTtime
              this.isDisabled = true
            }
            console.log(currenTtime)
          }
          countDown(endFun, 60, 1, 1000)
        }else {
          this.$notify({
            type: 'danger',
            message: res.data.msg,
            duration: 800
          })
        }
      })
    }
  },
  components: {
    NarBar
  },
  created () {
  }
}
</script>

<style>
  .btn {
    width: 110px;
    text-align: center;
  }
</style>