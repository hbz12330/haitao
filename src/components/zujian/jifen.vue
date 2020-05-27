<template>
  <div class="jifen">
    <div class="center">积分兑换区</div>
    <mt-navbar v-model="selected" @click.native="ldh">
      <mt-tab-item id="1">虚拟物品</mt-tab-item>
      <mt-tab-item id="2">居家用品</mt-tab-item>
      <mt-tab-item id="3">生活用品</mt-tab-item>
      <mt-tab-item id="4">食品</mt-tab-item>
      <mt-tab-item id="5">鞋袜</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="flex">
          <div v-for="item in turn">
            <div>
              <img :src="'http://127.0.0.1:3000/'+item.sov" alt />
            </div>
            <div>{{item.dname}}</div>
            <div>
              <span>所需积分：</span>
              <span>{{item.demand}}</span>
            </div>
            <mt-button type="danger" plain>立即兑换</mt-button>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="flex">
           <div v-for="item in turn">
            <div>
              <img :src="'http://127.0.0.1:3000/'+item.sov" alt />
            </div>
            <div>{{item.dname}}</div>
            <div>
              <span>所需积分：</span>
              <span>{{item.demand}}</span>
            </div>
            <mt-button type="danger" plain>立即兑换</mt-button>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="flex">
            <div v-for="item in turn">
            <div>
              <img :src="'http://127.0.0.1:3000/'+item.sov" alt />
            </div>
            <div>{{item.dname}}</div>
            <div>
              <span>所需积分：</span>
              <span>{{item.demand}}</span>
            </div>
            <mt-button type="danger" plain>立即兑换</mt-button>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div class="flex">
            <div v-for="item in turn">
            <div>
              <img :src="'http://127.0.0.1:3000/'+item.sov" alt />
            </div>
            <div>{{item.dname}}</div>
            <div>
              <span>所需积分：</span>
              <span>{{item.demand}}</span>
            </div>
            <mt-button type="danger" plain>立即兑换</mt-button>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <div class="flex">
            <div v-for="item in turn">
            <div>
              <img :src="'http://127.0.0.1:3000/'+item.sov" alt />
            </div>
            <div>{{item.dname}}</div>
            <div>
              <span>所需积分：</span>
              <span>{{item.demand}}</span>
            </div>
            <mt-button type="danger" plain>立即兑换</mt-button>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "app-jifen",
  data() {
    return {
      selected: "1",
      turn:""
    };
  },
  mounted(){
    let category='xn';
    let url='http://127.0.0.1:3000/exchang?category='+category;
    this.axios.post(url).then(result=>{
      this.turn=result.data;
    })
  },
  methods:{
    ldh:function(){
      let selected=this.selected;
      if(selected=='1'){
       let category='xn';
       let url='http://127.0.0.1:3000/exchang?category='+category;
        this.axios.post(url).then(result=>{
        this.turn=result.data;
      })
      }else if(selected=='2'){
        let category='jj';
        let url='http://127.0.0.1:3000/exchang?category='+category;
        this.axios.post(url).then(result=>{
        this.turn=result.data;
       })
      }else if(selected=='3'){
        let category='sh';
        let url='http://127.0.0.1:3000/exchang?category='+category;
        this.axios.post(url).then(result=>{
        this.turn=result.data;
       })
      }else if(selected=='4'){
        let category='sp';
        let url='http://127.0.0.1:3000/exchang?category='+category;
        this.axios.post(url).then(result=>{
        this.turn=result.data;
       })
      }else if(selected=='5'){
        let category='xw';
        let url='http://127.0.0.1:3000/exchang?category='+category;
        this.axios.post(url).then(result=>{
        this.turn=result.data;
       })
      }else{
        Toast("系统出错，请检查！")
      }
    }
  }
};
</script>