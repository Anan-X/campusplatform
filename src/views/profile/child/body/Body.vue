<template>
  <div>
    <van-divider />
    <!-- 注销 -->
    <van-cell is-link @click="showPopup">注销</van-cell>
    <van-cell is-link @click="editPass">修改密码</van-cell>
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '30%' }"
    >
    <h3 class="title">是否确认注销</h3>
    <van-button @click="exitBtn" class="btn" type="primary" >确定注销</van-button>
    <div>
      
    </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    exitBtn () {
      this.$store.commit('exit')
      this.$router.go(0)
    },
    editPass() {
      this.$router.push('editpass')
    }
  },
  computed: {
    isAdmin () {
      return this.$store.state.admin
    }
  }
}
</script>

<style>
  .title {
    margin: auto;
    text-align: center;
    padding-top: 50px;
  }
  .btn {
    width: 70%;
    margin-left: 15%;
    margin-top: 40px;
  }
</style>