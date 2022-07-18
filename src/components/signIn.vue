<template>
  <div>
    <!-- 遮罩层 -->
    <div id="bg"></div>
    <div id="signIn">
      <div class="signInImg"></div>
      <div class="form">
        <div>
          <h3>Welcome</h3>
          <label for="userName">
            用&emsp;户&emsp;名:<input
              @blur="uNameTest"
              class="mlm"
              type="text"
              placeholder="数字字母下划线组成"
              id="userName"
              v-model="username"
            />
            <span></span> </label
          ><br />
          <label for="userPwd">
            密&emsp;码:<input
              @blur="pwdTest"
              class="mln"
              type="password"
              placeholder="请输入密码"
              id="userPwd"
              v-model="userpwd"
            />
            <span></span> </label
          ><br />
          <label for="userVerificationCode">
            验&emsp;证&emsp;码:
            <input
              type="text"
              id="userVerificationCode"
              v-model="userVerificationCode"
            />
            <div id="captcha" @click="clickCaptcha" v-html="captchaData"></div>
          </label>
          <div class="btn">
            <button @click="postSignIn">登录</button>
            <button @click="cancel" >取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce, thorttle } from "../util/index.js";

export default {
  name: "signIn",
  data() {
    return {
      username: "",
      userpwd: "",
      userVerificationCode: "",
      captchaData: "获取验证码",
    };
  },
  methods: {
    // 用户名格式检测正则
    uNameTest() {
      var input_span = document.getElementById("userName").nextElementSibling;
      var reg = /^[a-zA-Z0-9_]{4,16}$/i; //4到16位（字母，数字，下划线，减号）
      if (reg.test(this.username)) {
        input_span.className = " iconfont icon-gouxuan green";
      } else {
        input_span.className = " iconfont icon-cha red";
      }
    },
    //密码格式正则
    pwdTest() {
      //密码正则，最少6位，以字母开头，以五个数字字母下划线结尾
      var pwdPattern = /^[a-zA-Z]{1}\w{5,17}$/;
      var input_span = document.getElementById("userPwd").nextElementSibling;
      if (pwdPattern.test(this.userpwd)) {
        input_span.className = " iconfont icon-gouxuan green";
      } else {
        input_span.className = " iconfont icon-cha red";
      }
    },
    cancel() {
      signIn.className = "none";
      bg.className = "";
    },
    // 防抖
    postSignIn: debounce(function () {
      let that = this;
      let signInfo = {
        username: this.username,
        userpwd: this.userpwd,
        userVerificationCode: this.userVerificationCode,
      };
      this.$http
        .post(`/signin`, signInfo)
        .then(function (res) {
          that.$emit('resdata',res.data)
          that.$parent.hideBtn();
        })
        .catch(function (err) {
          console.log(err);
        });
    }, 1000),
    // 节流
    clickCaptcha: thorttle(function () {
      this.$http.get(`/captcha`).then((res) => {
        this.captchaData = res.data.data;
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

#signIn {
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
      margin: 30px 0;
    }

    label {
      #userVerificationCode + div {
        height: 30px;
        width: 100px;
        background-color: rgb(33, 128, 211);
        display: inline-block;
        text-align: center;
        line-height: 30px;
        border-radius: 30px;
        cursor: pointer;
        vertical-align: middle;
      }
    }

    .btn {
      margin: 20px 0;
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
