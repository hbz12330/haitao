<template>
  <div class="hello">
    <mt-header title="商品搜索" fixed></mt-header>
    <div style="height:2.5rem"></div>
    <div class="dse" style="position:fixed;z-index:1">
      <input type="text" v-model="value" class="inp" placeholder="输入商品名称" />
      <mt-button type="primary" @click="thd">搜 索</mt-button>
    </div>
    <div style="height:2.6rem"></div>
    <div class="lieb">
      <div v-for="item in container">
        <div>
          <img :src="'http://127.0.0.1:3000/'+item.domain" alt />
        </div>
        <div>
          <p>{{item.pname}}</p>
          <div class="trr">
            <span style="float:left">价格:{{item.price}}元</span>
            <span style="float:right">已售:{{item.sold}}件</span>
          </div>
          <div style="clear:both">卖家：{{item.uname}}</div>
          <mt-button type="danger" size="large">加入购物车</mt-button>
          <mt-button type="primary" size="large">去结算</mt-button>
        </div>
      </div>
    </div>
    <hr />
    <mt-tabbar v-model="selected" fixed @click.native="btn">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/sy.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="全部商品">
        <img slot="icon" src="../../assets/qs.png" />
        全部商品
      </mt-tab-item>
      <mt-tab-item id="发布">
        <img slot="icon" src="../../assets/发布.png" />
        发布
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../../assets/购物车.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/我的.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import res from "../zujian/res";
export default {
  data() {
    return {
      selected: "",
      value:'',
      container:""
    };
  },
  components: {
    "app-res": res
  },
  mounted() {
    let value = this.$route.query.value;
    if(value==""){
      Toast("请输入商品名称");
      return;
    }else{
      let url="http://127.0.0.1:3000/product/refer?pname="+value;
      this.axios.post(url).then(result=>{
        this.container=result.data;
      }) 
    }
  },
  methods: {
    thd: function() {
      let value=this.value;
      if(value==""){
      Toast("请输入商品名称");
      return;
      }else{
      let url="http://127.0.0.1:3000/product/refer?pname="+value;
      this.axios.post(url).then(result=>{
        if(result.data.length==0){
          Toast('当前没有您查询的商品');
          return;
        }else
        this.container=result.data;
      }) 
      }
    },
    btn: function() {
      var selected = this.selected;
      if (selected == "首页") {
        this.$router.push("/");
      } else if (selected == "全部商品") {
        this.$router.push("/qsp");
      } else if (selected == "发布") {
        this.$router.push("/fabu");
      }
    }
  }
};
</script>