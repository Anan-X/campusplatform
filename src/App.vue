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
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  mounted() {
    // 页面刷新时保持本地store数据和数据库数据同步
    if(sessionStorage.getItem('store')) {
      apiGetUserInfo().then(res => {
        if (res.data.code === 200){
          this.$store.commit('loginAfter', res)
        }
      })
    }
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
</style>
