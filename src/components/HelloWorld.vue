<template>
  <div class="hello">
    <mt-header title="海淘商城" fixed></mt-header>
    <div style="height:2.5rem"></div>
    <app-lunbo></app-lunbo>
    <app-hddh></app-hddh>
    <app-mfzs></app-mfzs>
    <app-jifen></app-jifen>
    <mt-tabbar v-model="selected" fixed @click.native="btn">
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/sy.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="全部商品">
        <img slot="icon" src="../assets/qs.png" />
        全部
      </mt-tab-item>
      <mt-tab-item id="发布">
        <img slot="icon" src="../assets/发布.png" />
        发布
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../assets/购物车.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/我的.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import lunbo from "./zujian/lunbo";
import hddh from "./zujian/hddh";
import mfzs from "./zujian/mfzs";
import jifen from "./zujian/jifen";
export default {
  name: "HelloWorld",
  data() {
    return {
      selected: "首页"
    };
  },
  components: {
    "app-lunbo": lunbo,
    "app-hddh": hddh,
    "app-mfzs": mfzs,
    "app-jifen": jifen
  },
  methods: {
    btn: function() {
      var selected = this.selected;
      if (selected == "全部商品") {
       let url="http://127.0.0.1:3000/yz";
       this.axios.post(url).then(result=>{
         console.log(result.data)
        if(result.data==false){
          this.$router.push('/login')
          return;
        }else{
          this.$router.push('/qsp');
        }
       })
      } else if (selected == "首页") {
        return;
      } else if (selected == "发布") {
        let url="http://127.0.0.1:3000/yz";
       this.axios.post(url).then(result=>{
         if(result.data==false){
            this.$router.push('/login')
         }else{
           this.$router.push('/fabu')
         }
       })
      } else if (selected == "购物车") {
        let url="http://127.0.0.1:3000/yz";
       this.axios.post(url).then(result=>{
         if(result.data==false){
          this.$router.push('/login');
         }else{
           this.$router.push('/shppcar')
         }
       })
      } else {
        let url="http://127.0.0.1:3000/yz";
       this.axios.post(url).then(result=>{
         if(result.data==false){
           this.$router.push('/login');
         }else{
          // this.$router.push('/qsp')
         console.log("跳转我的");
         }
       })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
