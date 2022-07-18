<template>
  <div>
    <!-- 遮罩层 -->
    <div id="regBg"></div>
    <div id="register">
      <div class="signInImg"></div>
      <div class="form">
        <div>
          <h3>Welcome</h3>
          <label for="regUserName">
            用&emsp;户&emsp;名:<input
              @blur="uNameTest"
              class="mlm"
              type="text"
              placeholder="字母，数字，下划线"
              id="regUserName"
              v-model="regUserName"
            />
            <span></span> </label
          ><br />
          <label for="regUserPwd">
            密&emsp;码:<input
              @blur="pwdTest"
              class="mln"
              type="password"
              placeholder="请输入密码"
              id="regUserPwd"
              v-model="regUserPwd"
            />
            <span></span> </label
          ><br />
          <label for="confirmUserPwd">
            确认密码:<input
              @blur="pwd2Test"
              type="password"
              placeholder="请确认您的密码"
              id="confirmUserPwd"
              v-model="confirmUserPwd"
            />
            <span></span> </label
          ><br />
          <label for="regUserVerificationCode">
            验&emsp;证&emsp;码:
            <input
              type="text"
              id="regUserVerificationCode"
              v-model="regUserVerificationCode"
            />
            <div
              id="reg_captcha"
              @click="clickRegCaptcha"
              v-html="reg_captchaData"
            ></div>
          </label>
          <div class="btn">
            <button @click="regPost">注册</button>
            <button @click="cancel()">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce, thorttle } from "../util/index";
export default {
  name: "regsiter",
  data() {
    return {
      regUserName: "",
      regUserPwd: "",
      confirmUserPwd: "",
      regUserVerificationCode: "",
      reg_captchaData: "验证码",
    };
  },
  methods: {
    // 用户名格式检测正则
    uNameTest() {
      var input_span =
        document.getElementById("regUserName").nextElementSibling;
      var reg = /^[a-zA-Z0-9_]{4,16}$/i; //4到16位（字母，数字，下划线）
      if (reg.test(this.regUserName)) {
        input_span.className = " iconfont icon-gouxuan green";
      } else {
        input_span.className = " iconfont icon-cha red";
      }
    },
    //密码格式正则
    pwdTest() {
      //密码正则，最少6位，以字母开头，以五个数字字母下划线结尾
      var pwdPattern = /^[a-zA-Z]{1}\w{5,17}$/;
      var input_span = document.getElementById("regUserPwd").nextElementSibling;
      if (pwdPattern.test(this.regUserPwd)) {
        input_span.className = " iconfont icon-gouxuan green ";
      } else {
        input_span.className = " iconfont icon-cha red";
      }
    },
    pwd2Test() {
      var input_span = document.getElementById("confirmUserPwd").nextElementSibling;
      input_span.className = " iconfont icon-cha red";
      if (this.regUserPwd === this.confirmUserPwd && this.confirmUserPwd !== null) {
        input_span.className = " iconfont icon-gouxuan green";
      }
    },
    cancel() {
      register.className = "none";
      regBg.className = "";
    },
    clickRegCaptcha: thorttle(function () {
      this.$http.get('/captcha').then((res) => {
        this.reg_captchaData = res.data.data;
      });
    }, 1000),
    regPost: debounce(function () {
      let regInfo = {
        regUserName: this.regUserName,
        regUserPwd: this.regUserPwd,
        confirmUserPwd: this.confirmUserPwd,
        regUserVerificationCode: this.regUserVerificationCode,
      };
      this.$http
        .post(`/register`, regInfo)
        .then(function (res) {
          // console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }, 1000),
  },
};
</script>

<style lang="less" scoped>
.bg {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
#register {
  display: none;
  height: 350px;
  width: 840px;
  background-color: bisque;
  position: fixed;
  z-index: 999;
  top: 200px;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  .signInImg {
    height: 100%;
    width: 500px;
    background: url(../static/imgs/signIn.jpeg) no-repeat;
    background-size: 100% 100%;
    float: left;
  }
}
.form {
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  input {
    height: 30px;
    width: 120px;
    margin: 10px;
    border-radius: 10px;
    border-color: #eaffea;
    padding-left: 10px;
  }

  div {
    h3 {
      text-align: center;
      margin: 20px 0;
    }
    label {
      #regUserVerificationCode + div {
        height: 30px;
        width: 100px;
        background-color: darkcyan;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        border-radius: 30px;
        vertical-align: middle;
        cursor: pointer;
      }
    }
    .btn {
      margin: 20px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      button {
        height: 30px;
        width: 120px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
      }
      button:hover {
        background-color: sandybrown;
      }
    }
  }
}
.mln {
  margin-left: 36px !important;
}
.mlm {
  margin-left: 15px !important;
}
</style>
