<template>
  <div class="home-warpper">
    <div class="home-tab">
      <div class="tab-item">
        <router-link to="/home/user">用户中心</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/transfer">转账</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/charge">充值</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/bill">账单</router-link>
      </div>
    </div>
    <transition name="fall-down">
      <router-view class="fall-down"></router-view>
    </transition>
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
  .home-warpper
    width 100%
    .home-tab
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
          &.active
            font-weight bold
            activeLink()
            border1px(mainColor)

    .fall-down
      &.fall-down-enter-active, &.fall-down-leave-active
        position absolute
        transition all 0.3s cubic-bezier(0.2, 0.4, 0.35, 1)
      &.fall-down-enter, &.fall-down-leave-to
        transform translateY(-100%)
        opacity 0
</style>
