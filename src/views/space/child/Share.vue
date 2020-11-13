<template>
   <div>
     <!-- 头部导航 -->
    <nar-bar title="分享生活" 
    :isLeftArrow=true 
    :isRightArrow=true
    rightText="发表"
    @clickRight="onClickRight" />
    <!-- 主体 -->
    <van-form >
       <!-- 上传照片 -->
      <van-field name="avatar" label="图片" >
        <template #input>
          <van-uploader v-model="fileList" :max-count="4" upload-text="更改"/>
        </template>
      </van-field>

      <!-- 说说文字  -->
      <van-field
        v-model="text"
        rows="2"
        autosize
        label="配文"
        name="text"
        type="textarea"
        maxlength="50"
        placeholder=""
        show-word-limit
      />
      <!-- 提交 -->
      <!-- <van-button round block type="info" native-type="submit">
          保存资料
      </van-button> -->
    </van-form>
   
    
    

  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'

import {apiShare} from 'network/user'
export default {
  props: {

  },
  data () {
    return {
      spaceData:[],
      fileList: [
        // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
      ],
      text:''
    }
  },
  components: {
    NarBar
  },
  methods: {
    // 发表
    onClickRight() {
      console.log(this.text, this.fileList)
      apiShare(this.$store.state.userInfo.user_id, this.fileList, this.text,).then(res => {
        if (res.data.code === 200) {
          this.$toast.success(res.data.msg)
          this.$router.go(-1)
        } else {
          this.$toast.fail(res.data.msg)
        }
      })
    },
  }
}
</script>

<style>

</style>