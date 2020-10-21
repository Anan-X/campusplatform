<template>
  <van-nav-bar
  class="nav-class"
  :title=title
  :left-text=LeftText
  :left-arrow= isLeftArrow
  :right-text=rightText
  @click-left="onClickLeft"
  @click-right="onClickRight"
  />
</template>

<script>
export default {
  props: {
    title: String,
    isLeftArrow: {
      type: Boolean,
      default: false
    },
    isRightArrow: {
      type: Boolean,
      default: false
    },
    rightText:{
      type: String,
      default () {
        return ''
      }
    },
    
  },
  methods: {
    onClickLeft() {
      if (this.isLeftArrow){
        this.$router.back()
      }else{
        return
      }
    },
    onClickRight () {
      this.$emit('clickRight', this.isRightArrow)
    }
  },
  computed: {
    LeftText () {
      return this.isLeftArrow ? '返回':''
    }
  }
}
</script>

<style scoped>

</style>