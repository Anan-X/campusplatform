<template>
  <div class="home">
    <nar-bar 
    class="nav-class"
    title="校园服务系统" />
    <!-- 轮播图 -->
    <swipe :images=images />
    <!-- 功能 -->
    <feature-view/>
    <tab-bar
    @tabItemClick="tabItemClick"/>
  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'
import Swipe from 'components/common/swipe/Swipe'
import FeatureView from 'components/common/featureview/FeatureView'
import TabBar from 'components/common/tabbar/TabBar'
export default {
  data () {
    return {
      images: ['http://img.yzcdn.cn/vant/apple-1.jpg','https://img.yzcdn.cn/vant/apple-1.jpg']
    }
  },
  methods: {
    tabItemClick (item) {
      this.$router.push({
        path: item.path
      }).catch(err => err)
    }
  },
  components: {
    NarBar,
    Swipe,
    FeatureView,
    TabBar
  }
}
</script>

<style scoped>
  .home {
    padding-bottom: 50px;
  }
  .nav-class{
    position: fixed;
    width: 100vw;
  }
</style>