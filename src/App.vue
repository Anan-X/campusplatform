<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import { apiGetUserInfo } from 'network/user'

// import { formatDateTime } from 'common/common.js'
export default {
  name: 'App',
  components: {
  },
  created () {
    // const date = new Date()
    // const time = date.getTime()
    // console.log('时间戳',time, '日期',formatDateTime(time))
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
      // console.log("state", this.$store.state)
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
    // console.log('lala',this.$store.state)
  },
  mounted() {
    if(sessionStorage.getItem('store')) {
      console.log('刷新')
      apiGetUserInfo().then(res => {
        if (res.data.code === 200){
          this.$store.commit('loginAfter', res)
          console.log('储存')
        }
      })
    }
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
</style>
