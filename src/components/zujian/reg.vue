<template>
  <div class="app-login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
    <mt-field label="确认密码" placeholder="请输入确认密码" type="password" v-model="qupwd"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
    <mt-radio v-model="value" :options="['个人用户', '商家用户']"></mt-radio>
    <mt-button @click="zhuce">
      <img src="../../assets/logo.png" height="20" width="20" slot="icon" title="立即登录" />
      立即注册
    </mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "app-reg",
  data() {
    return {
      value: "个人用户",
      uname: "",
      upwd: "",
      qupwd: "",
      tel: "",
    };
  },
  methods: {
    zhuce: function() {
      let uname = this.uname;
      let upwd = this.upwd;
      let qupwd = this.qupwd;
      let tel = this.tel;
      let leibie = this.value;
      if (!uname) {
        Toast("用户不能为空");
        return;
      } else if (!upwd) {
        Toast("密码不能为空");
        return;
      } else if (!tel) {
        Toast("电话不能为空");
        return;
      } else {
        if (upwd !== qupwd) {
          Toast("两次输入的密码不一致");
          return;
        } else {
          let url = "http://127.0.0.1:3000/";
          url +=
            "reg?uname=" +
            uname +
            "&upwd=" +
            upwd +
            "&tel=" +
            tel +
            "&leibie=" +
            leibie;
          this.axios.post(url).then(result => {
            if (result.data == "成功") {
              let url =
                "http://127.0.0.1:3000/login?uname=" + uname + "&upwd=" + upwd;
              this.axios.post(url).then(result => {
                if (result.data == "成功") {
                  this.$router.push("/");
                } else {
                  Toast("登录失败");
                }
              });
            } else if (result.data == "用户名") {
              Toast("用户名被占用");
            } else if (result.data == "手机号") {
              Toast("手机号被占用");
            }
          });
        }
      }
    }
  }
};
</script>