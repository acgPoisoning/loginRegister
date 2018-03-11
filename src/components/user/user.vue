<template>
  <div class="user-center">
    这里是用户中心页面
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        error: ''
      };
    },
    computed: {
      user() {
        // 因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
        return this.$store.state.user;
      }
    },
    methods: {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .user-center
    width 100%
    background-color mainColorDarker
    .user-tab
      display flex
      width 100%
      height 40px
      margin 0 auto 10px
      line-height 40px
      .tab-item
        flex 1
        text-align center
        border1px()
        border-radius 10px
        & > a
          display block
          font-size 16px
          color rgb(77, 85, 93)
          border-radius 10px
          transition: all 0.3s ease-out;
          &.router-link-exact-active
            font-weight bold
            activeLink()
            border1px(mainColor)
</style>
