<template>
  <section class="login">
    <ul class="content">
      <li>
        <i class="icon-user"></i>
        <input class="conut" type="text" v-model="name" placeholder="请输入用户名或手机号">
      </li>
      <li>
        <i class="icon-lock"></i>
        <input class="psw" type="password" v-model="psw" placeholder="请输入密码">
      </li>
      <li class="verification">
        <i class="icon-shield"></i>
        <input class="verify" type="text" v-model="verify" @blur="confirmCode" placeholder="请输入验证码，不区分大小写">
        <span class="verify-number" @click="verifyNumber">{{givenCode}}</span>
      </li>
      <li>
        <input class="submit" type="submit" @click="loginCount" value="登录">
      </li>
    </ul>
    <div class="test">
      <p><span>测试账号</span>test001</p>
      <p><span>测试手机号</span>13012345678</p>
      <p><span>测试密码</span>000000</p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        psw: '',
        phone: '',
        error: '',
        verify: '',
        givenCode: '',
        VERIFY_YES: true
      };
    },
    props: {
    },
    created() {
      this.verifyNumber();
    },
    methods: {
      confirmCode() {
        if (this.verify.toLowerCase() === this.givenCode.toLowerCase()) {
          this.VERIFY_YES = true;
        } else {
          this.VERIFY_YES = false;
        }
      },
      isPhone(str) {
        // 校验是否为手机号
        let reg = /^1[34578]\d{9}$/;
        return reg.test(str);
      },
      loginCount() {
        let PHONE_YES = this.isPhone(this.name);
        let keyName = PHONE_YES ? 'phone' : 'username';
        if (!this.VERIFY_YES) return;
        // 此处个人开发环境，上线时需改成 $http.post方法传数据给后端......
        this.$http.get(`http://localhost:3000/users?${keyName}=${this.name}&password=${this.psw}`).then((response) => {
          // 这里在 isLogin方法中先判断一下后台返回的是否为空值，
          // 如果不是然后提交后台返回的值。
          // 注意这里是个难点，Vuex与 Vue-Resource结合使用。
          console.log(response);
          if (response.body != null && response.body.length > 0) {
            console.log(response.body, '登录成功');
            this.$store.commit('isLogin', response.body[0]);
            this.name = '';
            this.psw = '';
            this.$router.push({
              path: 'user'
            });
          } else {
            alert('请输入正确的用户名和密码！！！');
            // this.name = '';
            this.psw = '';
          }
        }).catch((error) => {
          this.error = error;
          console.log('服务器错误', this.error);
        });
      },
      verifyNumber() {
        // 验证码由后端给予的更安全
        const verifyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let result = [];
        for (var i = 0; i < 6; i++) {
          var sixChar = verifyArray[Math.floor(Math.random() * verifyArray.length)];
          result.push(sixChar);
        }
        this.givenCode = result.join('');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .login
    display table
    width 50%
    height 400px
    margin 0 auto 10px
    padding 10px
    border1px()
    background-color rgba(0,0,0,.5)
    .content
      display table-cell
      vertical-align middle
      padding 0 10px
      > li
        display flex
        width 400px
        min-width 200px
        height 40px
        margin 10px 0
        padding 10px 0
        background-color #fff
        >input
          flex 1
          float left
          height 40px
          padding-left 6px
          font-size 16px
          line-height 40px
        .verify-number
          flex 0 0 100px
          width 40px
          line-height 40px
        .submit
          width 80%
          margin 0 10%
          normalBtn()
          border-radius 10px
          outline none
          transition: all 0.2s ease-out;
          &:active
            activeElement()
          &:hover
            transform: scale(1.05);

      .verification
        position relative
        p
          position absolute
          bottom 4px
          right 4px
        .waring
          color warningColor
        .green
          color green

      .icon-user, .icon-lock, .icon-shield
        flex 0 0 40px
        float left
        width 40px
        margin 0 10px
        font-size 36px
        line-height 40px
        vertical-align bottom
        color #666

    .test
      position absolute
      right 10px
      top 10px
      color #999
      text-align left
      p
        margin-bottom 10px
        span
          display block
          width 100px
</style>
