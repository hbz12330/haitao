<template>
    <div class="hello">
        <mt-header title="我的购物车" fixed></mt-header>
        <div style="height:2.5rem;"></div>
        <div class="card">
         <div class="chb"> 
			<h4><input type="checkbox" @click="selectAll" :checked="allcb">全选</h4>
		 </div>
         <div class="scar" v-for="(item,i) in xianshi" :key="item.id" >
          <div class="ddre">
				<input type="checkbox" :checked="item.cb" :data-i="i" @click="modifyItem"/>
		  </div>
          <div class="dimg">
			<img :src="'http://127.0.0.1:3000/'+item.domain">
		  </div>
          <div style="line-height: 2rem;width: 50%;text-align: left;padding-left: 10px;">
            <div class="text-juy">
			{{item.pname}}
			</div>
            数量：
            <input type="Number" :value="item.sl" class="irt">
            价格：
			{{item.price}}
          </div>	
			<div class="text-shanchu">
			<button @click="del" :data-uid="item.id" :data-idx="i">删除</button>
			</div>
         </div>
		 
		 <div class="foot">
		    <div> 商品总价：
		       <span>¥：{{price.toFixed(2)}}元</span>
			   ;含运费：<span>¥：{{tarff.toFixed(2)}}元</span>
			</div>
			<div>
			<mt-button type="danger">去付款</mt-button>
			</div>
		 </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         xianshi:"",
         allcb:false,
         cb:false,
         price:0,
		 tarff:0,
		 sl:0,
        }
    },
    mounted(){
        let url="http://127.0.0.1:3000/shppcar/spcar";
        this.axios.post(url).then(result=>{
         this.xianshi=result.data;
        })

        
    },
    methods:{
        selectAll(e){
            var cb=e.target.checked;
			this.allcb=cb;
			for(var tem of this.xianshi){
				tem.cb=cb;
			}
			for(var i=0;i<this.xianshi.length;i++){
				if(cb==true){
				this.price+=this.xianshi[i].price*this.xianshi[i].sl+this.xianshi[i].tarff	
				this.tarff+=this.xianshi[i].tarff
				}else if(cb==false){
					this.price=0
					this.tarff=0
				}
			}
        },
       modifyItem(e){
			//获取元素下标
		 	var idx=e.target.dataset.i;
			//将下标对象数组中的元素cb修改当前复选框状态
			var checked=e.target.checked;
			this.xianshi[idx].cb=checked;
			var count=0;
			for(var item of this.xianshi){
				if(item.cb){
					count++;
				}
			}
			if(count==this.xianshi.length){
				this.allcb=true;
			}else{
				this.allcb=false;
			}
			if(checked==true){
			 this.price+=this.xianshi[idx].price*this.xianshi[idx].sl+this.xianshi[idx].tarff	
			 this.tarff+=this.xianshi[idx].tarff;	
			}else{
				this.price-=this.xianshi[idx].price*this.xianshi[idx].sl+this.xianshi[idx].tarff;
				this.tarff-=this.xianshi[idx].tarff;
			}

        },
        del(e){
			console.log(e.target.dataset)
			var id=e.target.dataset.uid;//传递给服务器进行操作数据库删除
			var idx=e.target.dataset.idx;//用作页面删除项目
			var url="http://127.0.0.1:3000/del?id="+id;
			this.axios.post(url).then(result=>{
				if(result.data=='ok'){
					this.xianshi.splice(idx,1)
				}else{
					Toast('系统出错，请联系站点客服人员处理')
				}
			})
			
			//this.xianshi.splice(idx,1)
			/*获取当前购物车商品id
			var id=e.target.dataset.uid;
			var idx=e.target.dataset.idx;
			var url="http://127.0.0.1:3000/del?id="+id;
			this.axios.get(url).then(result=>{
				if(result.data.code==1){
					Toast("删除商品成功");
					this.list.splice(idx,1)
				}
			})*/
		}
    }
}
</script>