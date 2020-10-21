<template>
  <van-tabbar v-model="active">
    <van-tabbar-item 
    v-for="(item, index) in items"
    :key="index"
    :name=item.path 
    :icon=item.icon @click="itemClick(item)">{{item.title}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: {
    items:{
      type: Array,
      default () {
        return [{path: '/home', icon: 'home-o', title: '首页'}, {path: '/profile', icon: 'user-o', title: '我的'}]
      }
    }
  },
  data() {
    return {
      active: null,
    }
  },
  methods: {
    itemClick (item) {
      this.$emit('tabItemClick', item)
    }
  },
  created () {
    // 防止刷新时active选错
    setTimeout(() => {
      this.active = this.$route.path
    },100)
  }
  
}
</script>

<style>
</style>