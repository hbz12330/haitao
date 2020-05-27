<template>
  <div class="app-login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
    <mt-button @click="denglu">
      <img src="../../assets/logo.png" height="20" width="20" slot="icon" title="立即登录" />
      立即登录
    </mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "app-login",
  data() {
    return {
     uname:"",
     upwd:"",
     ts:""
    };
  },
  methods:{
     denglu:function(){
       let uname=this.uname;
       let upwd=this.upwd;
       let url="http://127.0.0.1:3000/login?uname="+uname+"&upwd="+upwd;
       this.axios.post(url).then(result=>{
         if(result.data=="失败"){
           Toast("登录失败，请检查");
           return;
         }else{
           this.$router.push('/');
         }
       })
     }
  }
  
};
</script>