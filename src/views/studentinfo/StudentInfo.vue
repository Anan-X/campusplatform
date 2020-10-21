<template>
  <div>
    <nar-bar title="学生信息" :isLeftArrow=true />
    <van-field v-for="(values,key) in studentInfo" :key="key" :value="values" :label="rename(key)" readonly/>
  </div>
  
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'

import {apiGetStudentInfo} from 'network/user'
export default {
  data() {
    return {
      studentInfo:Object
    }
  },
  components: {
    NarBar
  },
  methods: {
    rename(item) {
        if (item === 'student_id') {
          return item = "学号"
        } else if (item === 'name') {
          return item = "姓名"
        } else if (item === 'classroom') {
          return item = "班级"
        } 
        else if (item === 'sex') {
          return item = "性别"
        }
        else if (item === 'card_id') {
          return item = "身份证号"
        }
        else if (item === 'school') {
          return item = "学校"
        }
        else if (item === 'college') {
          return item = "学院"
        }
        else if (item === 'adress') {
          return item = "籍贯"
        }
        else if (item === 'phone') {
          return item = "手机号"
        }
        else if (item === 'star_year') {
          return item = "年级"
        }
        
        else {
          return item
        }
      },
  },
  created () {
    apiGetStudentInfo(this.$store.state.student_id)
    .then(res => {
      this.studentInfo = res.data.studentInfo
    })
  }
}
</script>

<style>

</style>