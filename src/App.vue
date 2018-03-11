<template>
  <div id="app">
    <header class="user-wrapper">
      <i class="icon-user out-of-flow"></i>
      <router-link to="/home/user" class="wholeLine">用户中心</router-link>
    </header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/login">登陆</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/register">注册</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  // const ERR_OK = 0; // 状态码

  export default {
    name: 'App',
    components: {
    },
    data() {
      return {};
    },
    created() {},
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/base.styl"

  #app
    position relative
    max-width 800px
    margin 0 auto
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    .user-wrapper
      box-sizing border-box
      width 100%
      min-width 300px
      height 100px
      padding 0 30px
      margin 60px 0 30px 0
      font-size 30px
      line-height 100px
      text-align left
      background-color mainColorSuperLighter
      .out-of-flow
        float left
        font-size 30px
        line-height 100px
      .wholeLine
        display block
        width 100%
    .tab
      position absolute
      top -50px
      right 0
      float right
      display flex
      width 50%
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
          &.active
            font-weight bold
            normalBtn()
            border1px(mainColor)
</style>
