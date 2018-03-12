<template>
  <div class="register" @click="test">
    <form class="content" @submit.prevent="doSubmit">
      <div class="form-item">
        <h3 class="item-name">用户名</h3>
        <input type="text" class="text" v-model="inputText.username" placeholder="6~16位用户名，限数字、大小写字母">
        <!-- <p class="warning" v-show="">用户名不符合规则</p> -->
      </div>
      <div class="form-item">
        <h3 class="item-name">登陆密码</h3>
        <input type="password" class="text" v-model="inputText.password" placeholder="请输入6~16位密码" @blur="pswRules">
        <p class="warning" v-show="!pswRules_OK">密码不符合规则</p>
      </div>
      <div class="form-item">
        <h3 class="item-name">重复登陆密码</h3>
        <input type="password" class="text" v-model="inputText.pswRepeat" placeholder="请重复输入密码" @blur="pswRepeatDiff">
        <p class="warning" v-show="!pswRepeatDiff_OK">两次密码不一样</p>
      </div>
      <div class="form-item">
        <h3 class="item-name">手机号</h3>
        <input type="text" class="text" v-model="inputText.phone" placeholder="请输入手机号" @blur="isPhone">
        <p class="warning" v-show="!isPhone_OK">您输入的不是手机号</p>
      </div>
      <div class="form-item">
        <h3 class="item-name">手机验证码</h3>
        <input type="text" class="text" v-model="inputText.phoneVerify" placeholder="请输入手机验证码">
        <phone-text-verify :start='start' @countDownFinish='`${start = true}`' @click.native='sendText'></phone-text-verify>
      </div>
      <div class="form-item">
        <h3 class="item-name">支付密码</h3>
        <input type="password" class="text" v-model="inputText.payPassword" placeholder="请输入6~16位支付密码" @blur="pswRules">
        <p class="warning" v-show="!payPswRules_OK">密码不符合规则</p>
      </div>
      <div class="form-item">
        <h3 class="item-name">重复支付密码</h3>
        <input type="password" class="text" v-model="inputText.payPswRepeat" placeholder="请重复支付密码" @blur="pswRepeatDiff">
        <p class="warning" v-show="!payPswRepeatDiff_OK">两次密码不一样</p>
      </div>
      <div class="form-item">
        <input class="submit" type="submit" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
  import phoneTextVerify from './phoneTextVerify.vue';

  export default {
    components: {
      phoneTextVerify
    },
    data() {
      return {
        start: true,
        inputText: {
          'username': '',
          'password': '',
          'payPassword': '',
          'phone': '',
          'phoneVerify': ''
        },
        RULES_OK: false, // 状态码
        countRules_OK: true,
        pswRules_OK: true,
        pswRepeatDiff_OK: true,
        isPhone_OK: true,
        payPswRules_OK: true,
        payPswRepeatDiff_OK: true
      };
    },
    methods: {
      test() {
        // this.inputText.username = 'abcd123';
        // this.inputText.password = 123456;
        // this.inputText.pswRepeat = 123456;
        // this.inputText.payPassword = 654321;
        // this.inputText.payPswRepeat = 654321;
        // this.inputText.phone = 13077778888;
        // this.inputText.phoneVerify = 'NoMean';
      },
      countRules() {
        // 校验账号规则
        let reg = /^[a-zA-Z0-9]{6,16}$/;
        if (this.inputText.username !== '') {
          this.countRules_OK = reg.test(this.inputText.username);
        }
      },
      pswRules() {
        // 校验密码规则
        let reg = /^[a-zA-Z0-9+-/=*]{6,16}$/;
        if (this.inputText.password !== '') {
          this.pswRules_OK = reg.test(this.inputText.password);
        }
        if (this.inputText.payPassword !== '') {
          if (this.inputText.payPassword !== this.inputText.password) {
            this.payPswRules_OK = reg.test(this.inputText.payPassword);
          } else {
            alert('支付密码不可与登录密码一样');
            this.inputText.payPassword = '';
          }
        }
      },
      pswRepeatDiff() {
        // 校验两次密码是否相同
        if (this.inputText.pswRepeat !== '' && this.inputText.password !== '') {
          this.pswRepeatDiff_OK = (this.inputText.pswRepeat === this.inputText.password);
        }
        if (this.inputText.payPswRepeat !== '' && this.inputText.payPassword !== '') {
          this.payPswRepeatDiff_OK = (this.inputText.payPswRepeat === this.inputText.payPassword);
        }
      },
      isPhone() {
        // 校验是否为手机号
        let reg = /^1[34578]\d{9}$/;
        if (this.inputText.phone !== '') {
          this.isPhone_OK = reg.test(this.inputText.phone);
        }
      },
      sendText() {
        // 前面发送ajax请求成功之后调用this.start = true开始短信倒计时
        if (this.start === true) {
          console.log('短信发送成功');
        }
        this.start = false;
      },
      isEmpty(obj) {
        // 只检测是否一个没填
        for (var key in obj) {
          return true;
        }
        return false;
      },
      doSubmit() {
        // 传回后端，后端再次校验，等结果，
        // 成功则跳转页面并完成登陆，不成功再重填注册信息
        let bEmpty = this.isEmpty(this.inputText);
          // console.log(
          //   this.inputText,
          //   'countRules_OK', this.countRules_OK,
          //   'pswRules_OK', this.pswRules_OK,
          //   'pswRepeatDiff_OK', this.pswRepeatDiff_OK,
          //   'isPhone_OK', this.isPhone_OK,
          //   'payPswRules_OK', this.payPswRules_OK,
          //   'payPswRepeatDiff_OK', this.payPswRepeatDiff_OK,
          //   'bEmpty', bEmpty,
          //   'RULES_OK', this.RULES_OK
          // );

        this.RULES_OK = this.countRules_OK && this.pswRules_OK && this.pswRepeatDiff_OK && this.isPhone_OK && this.payPswRules_OK && this.payPswRepeatDiff_OK && bEmpty;
        if (this.RULES_OK) {
          // 填写注册信息符合规则
          console.log('注册成功\n', JSON.stringify(this.inputText));
          /*
          let url = '';
          let formData = JSON.stringify(this.inputText); // 这里才是你的表单数据

          this.$http.post(url, formData).then(function(data) {
            if (data.json().state === "success") {
              // 注册成功
              console.log("success");
            }
          }).catch(function() {
            // 注册失败
            console.log('账号已存在或是手机验证码填写错误');
            console.log("服务器异常！");
          });
          */
        }
      }
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .register
    display table
    width 50%
    margin 0 auto 10px
    padding 50px 10px
    border1px()
    background-color rgba(0,0,0,.5)
    .content
      display table-cell
      vertical-align middle
      padding 0 10px
      .form-item
        position relative
        display flex
        width 400px
        height 40px
        margin 10px 0
        padding 10px 0
        background-color #fff
        .item-name
          flex 0 0 100px
          margin-right 6px
          font-size 16px
          line-height 40px
          text-align right
        .text
          z-index 2
          flex 1
          float left
          height 40px
          padding-left 6px
          margin-right 6px
          font-size 16px
          line-height 40px
          background-color #fff0
        .verify-number
          flex 0 0 100px
          width 40px
          line-height 40px
        .warning
          z-index 1
          position absolute
          right 0
          top 50%
          font-size 12px
          color warningColor

      .submit
        width 80%
        height 40px
        margin 0 10%
        transition: all 0.2s ease-out;
        normalBtn()
        border-radius 10px
        outline none
        &:active
          activeElement()
        &:hover
          transform: scale(1.05);
</style>
