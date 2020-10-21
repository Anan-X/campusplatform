<template>
  <van-swipe class="my-swipe" :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    images: Array
  },
  data() {
    return {
      
    };
  }
}
</script>

<style>
  .my-swipe .van-swipe-item img{
    height: 250px;
    width: 100vw;
    margin-top: 45px;
  }
</style>