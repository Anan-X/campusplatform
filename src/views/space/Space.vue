<template>
   <div>
    <nar-bar title="校园动态" :isLeftArrow=true />
    <tab-bar :items=items />
  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'
import TabBar from 'components/common/tabbar/TabBar'
export default {
  props: {

  },
  data () {
    return {
      items: [
        {path: '', icon: '', title: '官方'},
        {path: '', icon: '', title: '推荐'},
        {path: '', icon: '', title: '关注'},

      ]
    }
  },
  components: {
    NarBar,
    TabBar
  }
}
</script>

<style>

</style>