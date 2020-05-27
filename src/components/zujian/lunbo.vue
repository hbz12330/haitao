<template>
  <div class="aplunbo">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="item in lb">
        <img :src="'http://127.0.0.1:3000/'+item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: "app-lunbo",
  data() {
    return {
      lb: ""
    };
  },
  mounted() {
    var url = "http://127.0.0.1:3000/lb";
    this.axios.post(url).then(result => {
      console.log(result)
     this.lb=result.data;
    });
  }
};
</script>