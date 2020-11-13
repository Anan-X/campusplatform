<template>
  <div>
    <!-- 导航栏 -->
    <nar-bar :isLeftArrow=true title="课表查询" />
    <!-- 选择第几周 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" @change="changeSemester" />
    </van-dropdown-menu>
    <!-- 课表 -->
    <van-tabs @click="foo" v-model="active" ref="tabs">
      <van-tab name="1" title="周一">
        <!-- 有课的状态 -->
        <van-cell-group v-for="(item, index) in course" :key="index">
          <van-cell :title="subjectTime(item.time_id)" :value="item.time"
            :label="'科目：' +item.subjectname + ' 任课老师：' + item.name + ' 上课地点：' + item.addressname" />
        </van-cell-group>
        <!-- 没课的状态 -->
        <van-empty v-if="course.length===0?true:false" class="custom-image" :image="require('assets/img/没课程.png')"
          description="今天没课" />
      </van-tab>
      <van-tab name="2" title="周二">
        <!-- 有课的状态 -->
        <van-cell-group v-for="(item, index) in course" :key="index">
          <van-cell :title="subjectTime(item.time_id)" :value="item.time"
            :label="'科目：' +item.subjectname + ' 任课老师：' + item.name + ' 上课地点：' + item.addressname" />
        </van-cell-group>
        <!-- 没课的状态 -->
        <van-empty v-if="course.length===0?true:false" class="custom-image" :image="require('assets/img/没课程.png')"
          description="今天没课" />
      </van-tab>
      <van-tab name="3" title="周三">
        <!-- 有课的状态 -->
        <van-cell-group v-for="(item, index) in course" :key="index">
          <van-cell :title="subjectTime(item.time_id)" :value="item.time"
            :label="'科目：' +item.subjectname + ' 任课老师：' + item.name + ' 上课地点：' + item.addressname" />
        </van-cell-group>
        <!-- 没课的状态 -->
        <van-empty v-if="course.length===0?true:false" class="custom-image" :image="require('assets/img/没课程.png')"
          description="今天没课" />
      </van-tab>
      <van-tab name="4" title="周四">
        <!-- 有课的状态 -->
        <van-cell-group v-for="(item, index) in course" :key="index">
          <van-cell :title="subjectTime(item.time_id)" :value="item.time"
            :label="'科目：' +item.subjectname + ' 任课老师：' + item.name + ' 上课地点：' + item.addressname" />
        </van-cell-group>
        <!-- 没课的状态 -->
        <van-empty v-if="course.length===0?true:false" class="custom-image" :image="require('assets/img/没课程.png')"
          description="今天没课" />
      </van-tab>
      <!-- 有课的状态 -->
      <van-tab name="5" title="周五">
        <van-cell-group v-for="(item, index) in course" :key="index">
          <van-cell :title="subjectTime(item.time_id)" :value="item.time"
            :label="'科目：' +item.subjectname + ' 任课老师：' + item.name + ' 上课地点：' + item.addressname" />
        </van-cell-group>
        <!-- 没课的状态 -->
        <van-empty v-if="course.length===0?true:false" class="custom-image" :image="require('assets/img/没课程.png')"
          description="今天没课" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import NarBar from 'components/common/narbar/NarBar'
  import {
    apiGetCourse
  } from 'network/user'
  export default {
    data() {
      return {
        active: 0,
        value: '1',
        option: [{
            text: '第一周',
            value: '1'
          },
          {
            text: '第二周',
            value: '2'
          },
          {
            text: '第三周',
            value: '3'
          },
          {
            text: '第四周',
            value: '4'
          },
          {
            text: '第五周',
            value: '5'
          },
          {
            text: '第六周',
            value: '6'
          },
          {
            text: '第七周',
            value: '7'
          },
          {
            text: '第八周',
            value: '8'
          },
          {
            text: '第九周',
            value: '9'
          },
          {
            text: '第十周',
            value: '10'
          },
          {
            text: '第十一周',
            value: '11'
          },
          {
            text: '第十二周',
            value: '12'
          },
          {
            text: '第十三周',
            value: '13'
          },
          {
            text: '第十四周',
            value: '14'
          },
          {
            text: '第十五周',
            value: '15'
          },
          {
            text: '第十六周',
            value: '16'
          },
          {
            text: '第十七周',
            value: '17'
          },
          {
            text: '第十八周',
            value: '18'
          },
          {
            text: '第十九周',
            value: '19'
          },
          {
            text: '第二十周',
            value: '20'
          },
        ],
        // 各天的课程
        course: Array
      }
    },
    methods: {
      changeSemester() {
        // 发送获取课表请求
        apiGetCourse(this.$store.state.userInfo.user_id, this.value)
          .then(res => {
            this.course = res.data.data
          })
      },
      foo(day) {
        // 发送获取课表请求
        apiGetCourse(this.$store.state.userInfo.user_id, this.value, day)
          .then(res => {
            this.course = res.data.data
          })
      },
      // 判读是第几节有课
      subjectTime(time_id) {
        if (time_id == '1') {
          return "第一节课"
        } else if (time_id == '2') {
          return "第二节课"
        } else if (time_id == '3') {
          return "第三节课"
        } else if (time_id == '4') {
          return "第四节课"
        } else if (time_id == '5') {
          return "第五节课"
        } else if (time_id == '6') {
          return "第六节课"
        } else if (time_id == '7') {
          return "第七节课"
        } else if (time_id == '8') {
          return "第八节课"
        }
      }
    },
    components: {
      NarBar
    },
    created() {
      // 发送获取课表请求
      apiGetCourse(this.$store.state.userInfo.user_id, this.value, '1')
        .then(res => {
          this.course = res.data.data
        })
    },
    mounted() {

    }
  }

</script>

<style>

</style>
