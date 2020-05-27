<template>
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
</template>
<script>
export default {
  name: "app-hddh",
  data() {
    return {};
  },
  methods:{
    fuzhuang:function(e){
      let lid=1;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    shoushi:function(e){
      let lid=2;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    xiangbao:function(e){
      let lid=3;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    shuji:function(e){
      let lid=4;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    shuma:function(e){
      let lid=5;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    jiafang:function(e){
      let lid=6;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    xuni:function(e){
      let lid=7;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    jujia:function(e){
      let lid=8;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    shenghuo:function(e){
      let lid=9;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    shipin:function(e){
      let lid=10;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    xiewa:function(e){
      let lid=11;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    },
    muyin:function(e){
      let lid=12;
      this.$router.push({ path: "/fenlei", query: { lid: lid } })
    }
  }
};
</script>
<style>
</style>