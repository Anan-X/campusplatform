<template>
  <div class="profile">
    <nar-bar title="个人中心" 
    :isRightArrow=isAdmin
    :rightText=isRightText
    @clickRight="onClickRight"/>
    <!-- 头部-->
    <prohand
    :info=userInfo />
    <tab-bar @tabItemClick="tabItemClick"/>
    <profile-body v-show="isAdmin" />
  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'
import TabBar from 'components/common/tabbar/TabBar'

import Prohand from 'views/profile/child/prohand/prohand'
import ProfileBody from 'views/profile/child/body/Body'

export default {
  data () {
    return {
      userInfo:{
          name: '游客，抓紧登陆吧',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        }
    }
  },
  methods: {
    tabItemClick (item) {
      this.$router.push({
        path: item.path
      }).catch(err => err)
    },
    onClickRight (isRightArrow) {
      if (isRightArrow) {
        this.$router.push({
          path: '/info'
        })
      }else{
        return
      }
      
    }
  },
  computed: {
    isAdmin () {
      return this.$store.state.admin
    },
    isRightText () {
      return !this.isAdmin ? '' : '个人资料'
    }
  },
  mounted () {
    if (this.$store.state.userInfo) {
      this.userInfo = this.$store.state.userInfo
    } else {
      console.log('no')
    }
    // let token = localStorage.getItem("token")
  },
  components: {
    NarBar,
    TabBar,
    Prohand,
    ProfileBody
  }
}
</script>

<style>
  .profile {
    padding-bottom: 50px;
  }
</style>