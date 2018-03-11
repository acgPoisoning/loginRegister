<template>
  <section class="user-center">
    <ul class="content-wrapper">
      <li class="item clearfix">
      <span class="title" @click="tellData">用户余额：</span>
      <span class="balance">{{users.balance}}元</span>
      </li>
      <li class="item clearfix">
        <span class="title">ID：</span>
        <span class="id">{{users.id}}</span>
      </li>
      <li class="item clearfix">
        <span class="title">用户名：</span>
        <span class="username">{{users.username}}</span>
      </li>
    </ul>
    <button class="change-psw">修改密码</button>
    <button class="change-psw">修改支付密码</button>
  </section>
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
    props: {
      users: {
        type: Object
      }
    },
    computed: {
      user() {
        // 因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
        return this.$store.state.user;
      }
    },
    methods: {
      tellData() {
        console.log(this.users);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .user-center
    width 100%
    // background-color mainColorDarker
    .content-wrapper
      margin-bottom 20px
      .item
        width 100%
        padding 0 20px
        box-sizing border-box
        bt1px()
        &:hover
          background-color mainColorSuperLighter
        span
          display block
          float left
          min-width 200px
          font-size 16px
          line-height 40px
          text-align left

    .change-psw
      width 200px
      margin 10px
      fslh(16px, 40px)
      cursor pointer
      border-radius 10px
      background-color #fff
      outline none
      &:hover
        hoverElement(,mainColor)

</style>
