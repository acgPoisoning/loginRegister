<template>
  <section class="transfer">
    <ul class="content">
      <li class="item clearfix">
        <span class="title">转账ID：</span>
        <input type="text" class="transferId" v-model="inputText.transferId" placeholder="请填入转入账号">
      </li>
      <li class="item clearfix">
        <span class="title">金额：</span>
        <input type="text" class="money" v-model="inputText.money" placeholder="￥">
      </li>
      <li class="item clearfix">
        <span class="title">备注：</span>
        <input type="text" class="remark" v-model="inputText.remark" placeholder="如需要，在此填写备注信息">
      </li>
      <li class="item clearfix">
        <span class="title">支付密码：</span>
        <input type="password" class="money" v-model="inputText.payPassword"  placeholder="此处填入支付密码">
      </li>
    </ul>
    <button class="btn-style submit">提交转账申请</button>
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
          'money': '',
          'remark': '',
          'payPasssword': ''
        }
      };
    },
    created() {},
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .transfer
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