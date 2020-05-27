<template>
    <div class="hello">
        <mt-header title="商品分类" fixed></mt-header>
        <div style="height:2.5rem"></div>
         <div class="container-wrap">
    <div class="container">
      <div class="box-1" type="button" @click="fuzhuang">服装</div>
      <div class="box-2" @click="shoushi">首饰</div>
      <div class="box-3" @click="xiangbao">箱包</div>
      <div class="box-4" @click="shuji">书籍</div>
      <div class="box-5" @click="shuma">数码</div>
      <div class="box-6" @click="jiafang">家纺</div>
      <div class="box-7" @click="xuni">虚拟物品</div>
      <div class="box-8" @click="jujia">居家用品</div>
      <div class="box-9" @click="shenghuo">生活用品</div>
      <div class="box-10" @click="shipin">食品</div>
      <div class="box-11" @click="xiewa">鞋袜</div>
      <div class="box-12" @click="muyin">母婴</div>
    </div>
    </div>
     <div class="lieb">
      <div v-for="item in flist">
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
          <mt-button type="danger" size="large" :data-id="item.id" @click="fjr('$event,item.id')">加入购物车</mt-button>
            <mt-button type="primary" size="large">去结算</mt-button>
        </div>
    </div>
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
    </div>
</template>
<script>
export default {
    data(){
        return{
         flist:'',
         selected: "",
        }
    },
    mounted(){
      let lid = this.$route.query.lid;  
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
         this.flist=result.data
      })
    },
    methods:{
       fuzhuang:function(e){
      let lid=1;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
       this.flist=result.data
      })
     },
    shoushi:function(e){
      let lid=2;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    xiangbao:function(e){
      let lid=3;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    shuji:function(e){
      let lid=4;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } }) 
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    shuma:function(e){
      let lid=5;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    jiafang:function(e){
      let lid=6;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    xuni:function(e){
      let lid=7;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    jujia:function(e){
      let lid=8;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    shenghuo:function(e){
      let lid=9;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    shipin:function(e){
      let lid=10;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    xiewa:function(e){
      let lid=11;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    muyin:function(e){
      let lid=12;
      let path=this.$router.history.current.path;
      this.$router.push({path,query: { lid: lid } })
      let url='http://127.0.0.1:3000/classify?lid='+lid;
      this.axios.post(url).then(result=>{
        this.flist=result.data
      })
    },
    btn: function() {
      var selected = this.selected;
      if (selected == "全部商品") {
        this.$router.push("/qsp");
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
    fjr:function(e){
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
    },
    qxy:function(e){
     let pid=event.currentTarget.getAttribute("data-id");
     this.$router.push({ path: "/particular", query: { pid: pid } }); 
    }
    }
}
</script>