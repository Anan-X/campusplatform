<template>
  <div class="info">
    <nar-bar title="个人资料" 
    :isLeftArrow=true
    :isRightArrow=true
    :rightText=rightText
    @clickRight="onClickRight"/>
    
    <van-form @submit="onSubmit" v-if="isShow">
      <van-field name="avatar" label="头像上传" :disabled=isDisabled>
        <template #input>
          <van-uploader v-model="fileList" :max-count="1" upload-text="更改" :disabled="isDisabled"/>
        </template>
      </van-field>
      <van-field
        v-model="info.name"
        name="username"
        label="用户名"
        placeholder="用户名"
        :disabled=isDisabled
        @blur="BtnisUsername"
      />
      <van-field
        v-model="studentInfo.name"
        name="name"
        label="真实姓名"
        placeholder="真实姓名"
        disabled
      />
      <van-field
        v-model="studentInfo.phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        disabled
      />
      <van-field
        v-model="info.email"
        name="email"
        label="邮箱"
        placeholder="邮箱"
        :disabled=isDisabled
      />
      <van-field
        v-model="studentInfo.classroom"
        name="classroom"
        label="班级"
        placeholder="班级"
        disabled
      />
      <van-field
        v-model="studentInfo.student_id"
        name="student_id"
        label="学号"
        placeholder="学号"
        disabled
      />
      <van-field
        v-model="info.sex"
        name="sex"
        label="性别"
        placeholder="性别"
        :disabled=isDisabled
      />
      <van-field
        v-model="info.brithday"
        name="brithday"
        label="生日"
        placeholder="生日"
        :disabled=isDisabled
      />
      <van-field
        v-model="info.text"
        rows="2"
        autosize
        label="个性签名"
        name="text"
        type="textarea"
        maxlength="50"
        placeholder="让大家认识你吧"
        show-word-limit
        :disabled=isDisabled
    />
      <div v-show="!isDisabled" style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          保存资料
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'
import { userInfoEdit, apiGetStudentInfo} from 'network/user'
export default {
  components: {
    NarBar
  },
  data() {
    return {
      info:Object,
      studentInfo:Object,
      isDisabled: true,
      isShow: false,
      rightText: "编辑",
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
      ],
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      userInfoEdit (values).then(res =>{
        if (res.data.code === 200) {
          this.$router.go(0) // 刷新当前页面
          this.$toast.success(res.data.msg)
          this.isDisabled = true
          this.rightText = '编辑'
        } else {
          this.$toast.fail(res.data.msg)
        }
      }).catch(error => console.log(error))
    },
    onClickRight () {
      this.isDisabled= !this.isDisabled
      this.isDisabled? this.rightText = '编辑': this.rightText = '关闭'
    },
    // 判断用户名是否被注册
    BtnisUsername () {
      
    }
  },
  created () {
    this.info = this.$store.state.userInfo
    this.fileList[0].url = this.$store.state.userInfo.avatar
    apiGetStudentInfo()
    .then(res => {
      this.studentInfo = res.data.studentInfo
      console.log(this,this.studentInfo)
      this.isShow = true
      // console.log(this.studentInfo)
    })
    // apiGetUserInfo().then(

    // )
    // console.log(this.info)
  }
}
</script>

<style>

</style>