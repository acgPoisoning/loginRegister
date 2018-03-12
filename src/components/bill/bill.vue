<template>
  <section class="bill" @click="test">
    <p class="record">交易记录</p>
    <ul class="content">
      <li class="item clearfix" v-for="(item, index) in account.transferRecords" :key="`records${index}`">
        <p>
          <span class="title">交易单号：</span>
          <span class="text transferId">{{account.transferRecords[index].transferId}}</span>
        </p>
        <p>
          <span class="title">日期时间：</span>
          <span class="text transferId">{{formatTime(account.transferRecords[index].time)}}</span>
        </p>
        <p>
          <span class="title">对方账号：</span>
          <span class="text transferId">{{account.transferRecords[index].transferAccount}}</span>
        </p>
        <p>
          <span class="title">金额：</span>
          <span class="text transferId">{{account.transferRecords[index].amount}}元</span>
        </p>
      </li>
    </ul>
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
        gotData_OK: true
      };
    },
    created() {},
    methods: {
      test() {
        if (this.gotData_OK) {
          console.log(this.account.transferRecords);
          this.gotData_OK = false;
        }
      },
      formatTime(oldformat) {
        let newFormat = '';
        oldformat = oldformat.toString();
        newFormat = `${oldformat.substring(0, 4)}年${oldformat.substring(4, 6)}月${oldformat.substring(6, 8)}日-${oldformat.substring(8, 10)}时${oldformat.substring(10, 12)}分${oldformat.substring(12, 14)}秒`;
        return newFormat;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .bill
    width 100%
    .record
      fslh(16px, 40px)
    .content
      margin-bottom 20px
      .item
        width 100%
        padding 20px 20px
        box-sizing border-box
        bt1px()
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
        p
          width 100%
          &:hover
            background-color mainColorSuperLighter

</style>