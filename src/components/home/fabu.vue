<template>
  <div>
    <mt-header title="商品发布" fixed></mt-header>
    <div style="height:2.5rem"></div>
    <div class="fbh">
      <div>
       名称：
        <input type="text" placeholder="输入商品名称" />
      </div>
      <div class="form-group">
       <label class="control-label">上传主图</label>
       <div class="control-form">
        <ul class="upload-imgs" style="margin:10,0,10,0">
          <li @click="sch"  v-if="imgLen>=1 ? false : true">
            <input type="file" hidden name="tas" class="upload"  @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
            <a class="add"><i class="iconfont icon-plus"></i><p>商品主图</p></a>
          </li>
          <li v-for='(value, key) in imgs'>
            <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
          </li>
        </ul>
        <button @click="submit">确认主图</button>
       </div>
      </div>
      /*
      <!--form action="/upload-multi" method="post" enctype="multipart/form-data">
      <h2>多图上传</h2>
      <input type="file" name="logo">
      <input type="file" name="logo">
      <input type="submit" value="提交">
     </form-->*/
      <div>
        <span>
          进价：
          <input type="text" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
       formData:new FormData(),
        imgs: {},
        imgLen:0,
        files:""
    };
  },
  methods: {
    sch(){
     this.$refs.inputer.click();
    },
    addImg(event){
       // console.log(event.target.files)
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        let oldLen=this.imgLen;
        let len=this.fil.length+oldLen;
        if(len>1){
          Toast('主图仅能有一张，如需修改，请先删除')
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 3*1024*1024) {
            Toast('仅能传3M大小的图片')
            return false
          }
          this.imgLen++;
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
        }
      },
      getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      submit(){
        for(let key in this.imgs){
          let name=key.split('?')[0];
          this.formData.append('multipartFiles',this.imgs[key],name);
        }
        this.axios.post('http://127.0.0.1:3000/upload',this.formData,{headers: {'Content-Type': 'multipart/form-data'}}).then(result=>{

        })
        /*
        this.$http.post('/opinion/feedback', this.formData,{
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => {
          this.alertShow=true;
        });*/
      },
  }
};
</script>
