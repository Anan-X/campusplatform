<template>
   <div>
    <nar-bar title="分享生活" 
    :isLeftArrow=true 
    :isRightArrow=true
    rightText="发表"
    @clickRight="onClickRight" />
  </div>
</template>

<script>
import NarBar from 'components/common/narbar/NarBar'
export default {
  props: {

  },
  data () {
    return {
    }
  },
  components: {
    NarBar
  },
  methods: {
    onClickRight() {
      console.log("lalala")
    }
  }
}
</script>

<style>

</style>