<template>
  <div class="header">
    <mt-header title="网站用户登录" v-if="cs"></mt-header>
    <mt-header title="网站用户注册" v-if="zs"></mt-header>
    <app-lunbo></app-lunbo>
    <app-login v-if="cs"></app-login>
    <app-reg v-if="zs"></app-reg>
    <hr />
    <div class="tishi" v-if="cs">
      还有账号，请先进行
      <span @click="zc">注册</span>
    </div>
    <div class="tishi" v-if="zs">
      已有本站账号，去
      <span @click="dl">登录</span>
    </div>
  </div>
</template>
<script>
import log from "../../components/zujian/log";
import lunbo from "../zujian/lunbo";
import reg from "../zujian/reg";
export default {
  data() {
    return {
      cs: true,
      zs: false
    };
  },
  components: {
    "app-login": log,
    "app-lunbo": lunbo,
    "app-reg": reg
  },
  methods: {
    zc: function() {
      this.zs = true;
      this.cs = false;
    },
    dl: function() {
      this.zs = false;
      this.cs = true;
    }
  }
};
</script>
<style lang="">
</style>