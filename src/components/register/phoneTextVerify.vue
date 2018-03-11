<template>
  <div class="phone-text-verify">
    <div ref="count" class="send-text-btn">{{time | change}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: '获取验证码'
      };
    },
    props: {
      start: {
        type: Boolean
      }
    },
    watch: {
      start(value, oldvalue) {
        if (value === false) {
          this.$refs.count.style.backgroundColor = '#999';
          this.countDown();
        }
      }
    },
    methods: {
      countDown() {
        this.time = 30;
        let countTimer = setInterval(() => {
          this.time--;
          if (this.time === 0) {
            this.$emit('countDownFinish');
            this.time = '获取验证码';
            this.$refs.count.style.backgroundColor = 'rgb(0, 135, 255)';
            clearInterval(countTimer);
          }
        }, 1000);
      }
    },
    filters: {
      change(value) {
        if (!value) return '';
        if (!isNaN(value)) {
          return `${value}S后可重新发送`;
        } else {
          return value;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/base.styl';
  .phone-text-verify
    display table
    .send-text-btn
      display table-cell
      topCenter()
      padding 6px 6px
      width 70px
      height 40px
      line-height 20px
      font-size 14px
      vertical-align middle
      activeLink()
      border-radius 10px
      outline none
      cursor pointer
      transition: all 0.3s ease-out;
      &:active
        activeLink(,mainColorDarker)
</style>
