<template>
  <van-grid clickable :column-num="2">
  <van-grid-item 
   v-for="(item, index) in items"
   :key="index"
   :icon="item.icon" :text="item.text" :to="item.path" />
</van-grid>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {icon: 'home-o', text: '动态校园', path: '/space'},
        {icon: 'shop-o', text: '二手交易', path: '/market'},
        {icon: 'bullhorn-o', text: '失物招领', path: '/found'},
        {icon: 'calender-o', text: '校园课表', path: '/curriculum'},
        {icon: 'points', text: '学生成绩', path: '/score'},
        {icon: 'friends-o', text: '兴趣小组', path: '/chat'},
        {icon: 'browsing-history-o', text: '学生信息', path: '/studentinfo'},
      ]
    }
  }
}
</script>

<style>

</style>