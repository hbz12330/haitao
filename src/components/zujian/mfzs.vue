<template>
  <div class="mfzs">
    <div class="center">付邮免费使用专栏</div>
    <div class="mf-lm">
      <ul class="slide-box fr">
        <li class="slide-item zengsong" style="width:70%" :data-id="item.id" v-for="item in give" @click="qxy('$event,item.id')">
          <div style="width:100px;height:100px;">
            <img :src="'http://127.0.0.1:3000/'+item.domain" style="width:100px;height:100px" />
          </div>
          <div class="shuoming">
            <div class="bioati">{{item.pname}}</div>
            <div class="jiage">价格￥：{{item.price}}元</div>
            <div class="yunfei">运费：{{item.tarff}}元</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-mfzs",
  data() {
    return {
     give:"" 
    };
  },
  mounted(){
    let url="http://127.0.0.1:3000/product/";
    url+="mianfei";
    this.axios.post(url).then(result=>{
      this.give=result.data
    })
  },
  methods:{
    qxy:function(e){
     let pid=event.currentTarget.getAttribute("data-id");
     this.$router.push({ path: "/particular", query: { pid: pid } });
    }
  }
};
</script>