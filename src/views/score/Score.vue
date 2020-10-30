<template>
   <div>
    <nar-bar title="我的成绩" :isLeftArrow=true />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" @change="changeSemester" />
    </van-dropdown-menu>
    <!-- <van-field v-for="(values,key) in score" :key="key" :value="values" :label="key" readonly/> -->
    <!-- 课表 -->
    <van-tabs v-if="isScore">
      <van-tab 
      v-for="(item, index) in score" 
      :key="index"  :title="item['课程']">
        <van-cell-group v-for="(value, key) in item" :key="key">
          <van-cell :title="key" :value="value"/>
        </van-cell-group>
      </van-tab>
    </van-tabs>
    <!-- 成绩没有出来 -->
    <van-empty v-if="!isScore" class="custom-image" 
      :image="require('assets/img/没课程.png')" 
      description="成绩还没有发布" />
  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'

import {apiGetStudentScore, apiGetSemester} from 'network/user'
export default {
  data() {
    return {
      score: Object,
      isShow:false,
      isScore: false,
      value: 1,
      option: [
        { text: '2018-2019-第一学期', value: 1},
        { text: '2018-2019-第二学期', value: 2 },
      ]
    };
  },
  methods: {
    changeSemester() {
      apiGetStudentScore(this.$store.state.userInfo.user_id, this.value)
      .then(res => {
        if(res.data.code === 200){
          console.log(res)
          this.score = res.data.score
          if(res.data.score.length==0) {
            this.isScore = false
          }else {
            this.isScore = true
          }
        }
      })
    }
  },
  components: {
    NarBar
  },
  created () {
     // 获取学期
      apiGetSemester()
      .then(res  => {
        console.log(res)
        this.option = res.data.data
      })
    apiGetStudentScore(this.$store.state.userInfo.user_id, this.value)
    .then(res => {
      if(res.data.code === 200){
        console.log(res)
        this.score = res.data.score
        if(res.data.score.length==0) {
            this.isScore = false
          }else {
            this.isScore = true
          }
      }
    })
  }
}
</script>

<style>

</style>