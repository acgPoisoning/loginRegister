<template>
  <section class="user-center">
    <ul class="content">
      <li class="item clearfix">
      <span class="title">用户余额：</span>
      <span class="balance">{{account.balance}}元</span>
      </li>
      <li class="item clearfix">
        <span class="title">ID：</span>
        <span class="id">{{account.id}}</span>
      </li>
      <li class="item clearfix">
        <span class="title">用户名：</span>
        <span class="username">{{account.username}}</span>
      </li>
    </ul>
    <button class="btn-style">修改密码</button>
    <button class="btn-style">修改支付密码</button>
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
      account: {
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
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .user-center
    width 100%
    // background-color mainColorDarker
    .content
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
        .title
          padding 0 20px 0 0
          box-sizing border-box

</style>
