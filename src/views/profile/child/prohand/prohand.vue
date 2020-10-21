<template>
  <div class="profile-hand">
    <div class="logo">
      <van-image
        round
        fit="cover"
        width="5rem"
        height="5rem"
        :src=info.avatar
        @click="show=true"
      />
    </div>
    <!-- 编辑头像 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '15%' }">
      <div class="avator">
        <van-button class="avator-btn" type="default">编辑头像</van-button>
      </div>
    </van-popup>
    <!-- 登录按钮 -->
    <div v-show="!isLogin" class="login" @click="login">
      <span class="text">立即登录</span>
      <img src="~assets/img/arrow_right.svg">
    </div>

    <div class="name">
      <h4>{{this.$store.state.username}}</h4>
    </div>
    <p class="name">{{info.name}}</p>
    <van-divider/>
    <div class="care">
      <div class="care-item" v-for="(value, key) in careItems" :key="key">
        <div>{{key}}</div>
        <div>{{value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info:Object
  },
  data () {
    return{
      isLogin: false,
      show: false,
      careItems: 
      {'我的关注': 0, '我的好友': 0, '我的班级': 0}
    }
  },
  methods: {
    login () {
      this.$router.push({
        path: '/login'
      })
    }
  },
  mounted() {
    // console.log(this.$store.state.userInfo)
    if(this.$store.state.userInfo){
      this.isLogin = true
    }
  }
}
</script>

<style>

  .avator-btn{
    width: 70%;
    margin-top: 20px;
    /* margin: auto; */
    margin-left: 15%;

 
  }
  /* .avator {

  } */
  .logo, .name {
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }

  .login {
    position: fixed;
    top: 90px;
    right: 10px;
    cursor: pointer;
  }
  .login img {
    height: 30px;
     /* display:inline-block; */
     vertical-align: middle;
  }
  .text{
    height: 30px;
     /* display:inline-block; */
     vertical-align: middle;
  }
 

  .care{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .care-item {
    flex: 1;
    flex-direction: column-reverse;
    font-size: 12px;
  }
</style>