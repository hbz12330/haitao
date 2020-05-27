<template>
  <div class="hello">
    <mt-header title="详情页" fixed></mt-header>
    <div style="height:2.5rem"></div>
    <div v-for="item in items">
     <div class="ximg">
      <img :src="'http://127.0.0.1:3000/'+item.domain" alt="">
     </div>
     <div class="title">{{item.pname}}</div>
     <hr>
     <div class="ft"><div><span>价格：{{item.price}}元</span></div><div><span>已售：{{item.sold}}件</span></div></div>
     <div class="ft"><div><span>运费：{{item.tarff}}元</span></div><div><span>商家：{{item.uname}}</span></div></div>
      <mt-navbar v-model="letter">
      <mt-tab-item id="1">详情介绍</mt-tab-item>
      <mt-tab-item id="2">评价列表</mt-tab-item>
      <mt-tab-item id="3">查看商家发布</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="letter">
      <mt-tab-container-item id="1">
       <div class="know">
       {{item.content}}
       </div>
       <div class="rth">
         <div v-if="greeting" v-for='item in pim'>
         <img :src="'http://127.0.0.1:3000/'+item" alt="">
         </div>
       </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        这里是评价列表，功能开发中
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        查看商家发布的所有商品
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <mt-tabbar fixed>
    <mt-tab-item>
     <div class="sfg">
     <span>数量：</span>
     <input type="Number" value="1"  min="1" v-model="sl" @input="changeInput()" onkeyup="this.value=this.value.replace(/\D/g,'')">
     </div>
    </mt-tab-item>
    <mt-tab-item>
    <mt-button type="primary" size="small" @click="join">加入购物车</mt-button>
    </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      items:'',
      letter:"1",
      pim:'',
      greeting: "",
      sl:"1",
      pid:''
    }
  },
  mounted(){
    let pid= this.$route.query.pid;
    this.pid=pid;
    let url="http://127.0.0.1:3000/particulars?pid="+pid;
    this.axios.post(url).then(result=>{
     this.items=result.data;
     let pims=result.data[0].xmain;
     this.pim=pims.split(",");
     console.log(this.pim)
      if(this.pim==''){
         this.greeting = false;
      }else{
         this.greeting = true;
      }
    })
  },
  methods:{
   changeInput(){
     let sl=this.sl;
      if(sl<=0 && sl!=""){
       this.sl='1';
      }
   },
   join:function(e){
    let pid=this.pid;
    let sl=this.sl;
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
}
</script>
