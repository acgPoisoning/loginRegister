<template>
  <section class="charge-warpper">
    <ul class="content">
      <li class="item clearfix">
        <span class="title">充值地址：</span>
        <input type="text" class="transferId" v-model="inputText.transferId" placeholder="">
      </li>
      <li class="item clearfix">
        <span class="title">金额：</span>
        <input type="text" class="money" v-model="inputText.money" placeholder="￥">
      </li>
    </ul>
    <button class="btn-style submit">提交充值申请</button>
  </section>
</template>

<script>
  export default {
    components: {},
    props: {
      account: {
        type: Object
      }
    },
    data() {
      return {
        inputText: {
          'transferId': '',
          'money': ''
        }
      };
    },
    created() {},
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .charge-warpper
    width 100%
    .content
      margin-bottom 20px
      .item
        width 100%
        padding 0 20px
        box-sizing border-box
        bt1px()
        &:hover
          background-color mainColorSuperLighter
        *
          display block
          float left
          min-width 200px
          font-size 16px
          line-height 40px
          text-align left
        .title
          padding 0 20px 0 0
          box-sizing border-box
        input
          width 100%
          max-width 560px

</style>