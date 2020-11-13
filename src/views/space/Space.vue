<template>
  <div>
    <!-- 导航栏 -->
    <nar-bar
      title="校园动态"
      :isLeftArrow="true"
      :isRightArrow="true"
      rightText="发说说"
      @clickRight="onClickRight"
      :fixed="true"
    />

    <!-- main -->
    <div id="main">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <div id="space-item" v-for="(space, index) in spaceData" :key="index">
          <van-row>
            <van-col offset="1" span="3">
              <!-- 头像 -->
              <van-image
                width="3rem"
                height="3rem"
                fit="cover"
                round
                :src="space.avatar"
                @click="user(space.user_id)"
              />
            </van-col>
            <!-- 用户名 和时间 -->
            <van-col span="16">
              <span class="username">{{ space.name }}</span> <br />
              <span class="time">{{ Time(space.time) }}</span>
            </van-col>
            <!-- 更多操作 -->
            <van-col v-if="isShow(space.user_id)" span="3" style="text-align:right;">
              <van-button @click="show=true,delete_space_id = space.space_id" size="small">
                <van-icon name="ellipsis" />
              </van-button>
              
            </van-col>
          </van-row>
          <!-- 说说文字 -->
          <van-row class="space-text">
            <van-col offset="1" span="21">{{space.text}}</van-col>
          </van-row>
          <!-- 说说配图 -->
          <van-row class="space-img">
            <van-grid :border="false" :column-num="2">
              <van-grid-item v-for="(image,index) in imgArr(space.image)" :key="index" >
                <van-image :src="image" 
                v-if="space.image==null?false:true"
                @click="lookImage(space.image, index)" />
              </van-grid-item>
            </van-grid>
          </van-row>
          <!-- 评论信息 -->
          <van-row class="space_msg" v-for="(space_msg_item, index) in space.spaceMsg" :key="index">
            <van-col  span="24">
                <!-- 评论者的用户名 -->
                <span class="space_msg_name" @click="user(space_msg_item.user_id)" >{{space_msg_item.name}}：</span>
                <!-- 评论者的内容 -->
                <span class="space_msg_msg">{{space_msg_item.msg}}</span>
            </van-col>
          </van-row>
          <!-- 评论 -->
          <van-field
            class="space_msg_input"
            v-model="space.null"
            label="评论"
            rows="1"
            autosize
            type="textarea"
            left-icon="smile-o"
            placeholder="说点什么吧"
          >
            <template #button>
              <van-button size="small" type="primary" @click="sendMsg(space.space_id,space.null)">发表</van-button>
            </template>
          </van-field>
        </div>
      </van-list>
    </div>
    <!-- 删除说说 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }" >
      <van-cell title="删除" icon="delete" is-link @click="spaceDelete" />
    </van-popup>
    <!-- footer -->
    <tab-bar :items="items" @tabItemClick="tabItemClick"/>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';

import NarBar from "components/common/narbar/NarBar";
import TabBar from "components/common/tabbar/TabBar";

import { apiSpace, apiSendMsg, apiSpaceMine, apiDeleteSpace } from "network/user";
import {formatDateTime} from 'common/common'
export default {
  props: {},
  data() {
    return {
      items: [
        { path: "/space", icon: "", title: "推荐" },
        { path: "/mine", icon: "", title: "我的说说" },
      ],
      spaceData: [],
      list: [],
      loading: false,
      finished: false,
      msg: '',
      index:0,
      show:false,
      delete_space_id:''
    };
  },
  components: {
    NarBar,
    TabBar,
  },
  methods: {
    onClickRight() {
      this.$router.push({
        path: "/share",
      });
    },
    isShow(user_id) {
      return user_id==this.$store.state.userInfo.user_id?true:false
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.index += 5
        apiSpace(this.index).then((res) => {
          if (res.data.code === 200) {
            this.spaceData = this.spaceData.concat(res.data.space);
            this.loading = false;
            // console.log(this.spaceData)
          } else {
            this.$toast.fail(res.data.msg);
            // this.loading = false;
          }
        });
      },500)
      
    },
    imgArr(imgStr) {
      // console.log(typeof imgStr, imgStr)
      if(imgStr!=null){
        return imgStr.split(",")
      }
      return []
    },
    // 预览
    lookImage(images, index) {
      let imagesArr = this.imgArr(images)
      ImagePreview({
        images:imagesArr,
        startPosition:index  // 指定照片预览位置
      })
    },
    // 时间戳转换
    Time(time) {
      return formatDateTime(time)
    },
    // 发表评论
    sendMsg(space_id, msg) {
      if(msg.trim()!=''){
        apiSendMsg(space_id, this.$store.state.userInfo.user_id,msg).then(res => {
          if(res.data.code === 200){
            msg = ''
            this.getSpaceNew()
            this.$toast.success(res.data.msg)
          } else {
            this.$toast.fail(res.data.msg)
          }
        })
        
      } else {
        this.$toast.fail('请输入内容，再发表哦')
      }
    },
    // 最新的5个说说数据
    getSpaceNew() {
      apiSpace(0).then((res) => {
        if (res.data.code === 200) {
          this.spaceData = res.data.space;
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    tabItemClick(item) {
      // console.log(item)
      if(item.path=='/mine'){
        apiSpaceMine(0,this.$store.state.userInfo.user_id).then((res) => {
          if (res.data.code === 200) {
            this.spaceData = res.data.space;
            // console.log(this.spaceData)
          } else {
            this.$toast.fail(res.data.msg);
          }
        });
      } else {
        this.getSpaceNew()
      }
    },
    user(user_id) {
      console.log(user_id)
    },
    spaceDelete() {
      console.log(this.delete_space_id)
      apiDeleteSpace(this.delete_space_id).then(res => {
        if(res.data.code === 200) {
          this.$toast.success(res.data.msg)
          this.show = false
          this.loading = false
          this.index = 0
          this.getSpaceNew()
        }else{
          this.$toast.success(res.data.msg)
          this.show = false
        }
      })
    }
  },
  computed: {

  },
  created() {
    this.getSpaceNew()
  },
};
</script>

<style scoped>
#main {
  margin-top: 55px;
  width: 100vw;
}
.van-col {
  border: black 1px;
}
.username {
  font-size: 20px;
  font-weight: 10px;
}
.time{
  font-size: 10px;
}
.space-img {
  margin-top: 5px;
}
.space-text {
  margin-top: 10px;
}
.space_msg {
  padding: 5px;

}
.space_msg_name {
  color: darkcyan;
}
.space_msg_msg {
  font-size: 15px;
  font-weight: 500;
}

.space_msg_input {
  background-color: rgba(128,128,128,.1);
  border-radius: 32px;
  padding: 2px 12px;
  margin-bottom: 10px;
}
</style>