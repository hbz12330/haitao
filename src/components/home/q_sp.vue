<template>
  <div class="hello">
    <mt-header title="全部商品" fixed></mt-header>
    <div style="height:2.5rem"></div>
    <app-hddh></app-hddh>
    <app-res ref="quvalue"></app-res>
    <hr style="margin:0" />
    <mt-tabbar v-model="selected" fixed @click.native="btn">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/sy.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="全部商品">
        <img slot="icon" src="../../assets/qs.png" />
        全部
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
    <div class="lieb">
      <div v-for="item in list">
        <div :data-id="item.id" @click="qxy('$event,item.id')">
          <div>
            <img :src="'http://127.0.0.1:3000/'+item.domain" alt />
          </div>
          <div>
            <div class="lsname">{{item.pname}}</div>
            <div class="trr">
              <span>价格:{{item.price}}元</span>
              <span>已售:{{item.sold}}件</span>
            </div>
            <div style="clear:both">商户：{{item.uname}}</div>
          </div>
          </div>
          <mt-button type="danger" size="large" :data-id="item.id" @click="jr('$event,item.id')">加入购物车</mt-button>
            <mt-button type="primary" size="large">去结算</mt-button>
        </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import hddh from "../zujian/hddh";
import res from "../zujian/res";
export default {
  data() {
    return {
      selected: "全部商品",
      list:""
    };
  },
  components: {
    "app-hddh": hddh,
    "app-res": res
  },
  mounted() {
   let url="http://127.0.0.1:3000/product";
   this.axios.post(url).then(result=>{
    this.list=result.data;
    console.log(result)
   })
  },

  methods: {
    btn: function() {
      var selected = this.selected;
      if (selected == "全部商品") {
        Toast("当期为全部商品页面，无法进行跳转");
        return;
      } else if (selected == "首页") {
        this.$router.push("/");
      } else if (selected == "发布") {
        this.$router.push("/fabu");
      } else if (selected == "购物车") {
        this.$router.push('/shppcar')
      } else {
        console.log("我的");
      }
    },
    qxy:function(e){
     let pid=event.currentTarget.getAttribute("data-id");
     this.$router.push({ path: "/particular", query: { pid: pid } });
    },
    //获取搜索框的value
    getsun() {
      this.value = this.$refs["quvalue"].value;
      console.log(this.value);
    },
    jr:function(e){
      let pid=event.currentTarget.getAttribute("data-id");
      let sl=1;
      let url='http://127.0.0.1:3000/shppcar?pid='+pid+"&sl="+sl;
     this.axios.post(url).then(result=>{
      if(result.data=="成功"){
        this.$router.push({ path: "/shppcar"})
      }else{
        this.$router.push({ path: "/login"})
      }
     });
    }
  }
};
</script>