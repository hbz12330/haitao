<template>
  <div class="hello">
    <div class="dse">
      <input type="text" v-model="value" class="inp" placeholder="输入商品名称" />
      <mt-button type="primary" @click="sbtn">搜 索</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-res",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    sbtn: function() {
      var val = this.value;
      this.$router.push({ path: "/slb", query: { value: val } });
    }
  }
};
</script>