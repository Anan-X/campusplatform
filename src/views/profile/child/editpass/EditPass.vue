<template>
  <div>
    <nar-bar title="修改密码" :isLeftArrow="true" />

    <van-form @submit="onSubmit" >
      <van-field
        v-model="form.user_id"
        name="user_id"
        label="学号"
        disabled
      />
      <van-field
        v-model="form.oldPassword"
        name="oldPassword"
        label="原密码"
        placeholder="原密码"
        type="password"
        :rules="[{ required: true, message: '请输入原密码' }]"
      />
      <van-field
        v-model="form.password"
        name="password"
        label="新密码"
        placeholder="新密码"
        type="password"
        :rules="[{ required: true, message: '请输入新密码' }]"
      />
      <van-field
        v-model="form.confirmPass"
        name="confirmPass"
        label="确认新密码"
        placeholder="确认新密码"
        type="password"
        :rules="[{ required: true, message: '请输入新密码' },{validator, message: '两次新密码不一致'}]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          确定修改
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";

import {apiEditPass} from 'network/user'
export default {
  data() {
    return {
      form:{
        user_id: '',
        oldPassword: '',
        password: '',
        confirmPass: '',
      }
    }
  },
  components: {
    NarBar,
  },
  methods:{
    validator (val) {
      return val === this.form.password
    },
    onSubmit(val) {
      apiEditPass(val).then(res => {
        if(res.data.code === 200) {
          this.$toast.success(res.data.msg)
          // 注销
          this.$store.commit('exit')
          this.$router.push('/login')
        } else {
          this.$toast.fail(res.data.msg)
        }
      })
    }
  },
  created () {
    this.form.user_id = this.$store.state.userInfo.user_id
  }
};
</script>

<style>
</style>