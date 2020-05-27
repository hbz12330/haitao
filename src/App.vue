<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
.aplunbo {
  width: 100%;
  height: 10rem;
}
.foot{
  width:100%;
  height:50px;
  line-height:50px;
  position:fixed;
  bottom:0;
  display:flex;
  justify-content:space-between;
}
.tishi {
  text-align: center;
  color: chocolate;
}
.tishi span {
  color: navy;
}
.sfg{
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 1rem;
  line-height:1rem;
  padding: 0.5rem;
  font-family: "微软雅黑";
  font-size: 16px;
}
.sfg span{
  width: 50%;
}
.sfg input{
  width: 50%;
  border: 0;
  height: 1rem;
}
.dse {
  width: 100%;
  display: flex;
}
.dse button {
  border-top: 0.6rem solid #d9d9d9;
  border-bottom: 0.6rem solid #d9d9d9;
  font-size: 15px;
  height: 3rem;
  border-right: 0.1rem solid #d9d9d9;
}
.dse .inp {
  width: 83%;
  height: 1.7rem;
  border-top: 0.6rem solid #d9d9d9;
  border-bottom: 0.6rem solid #d9d9d9;
}
.lieb {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.lieb div {
  width: 49%;
  background: silver;
  text-align: center;
  margin-bottom: 0.5rem;
}
.lieb div div {
  width: 100%;
  margin: 0;
}
.lieb div button {
  margin-bottom: 0.5rem;
  border-radius: 5%;
}
.fbh {
  width: 100%;
}
.upload-imgs {
  margin: 5px 0 5px 0;
  overflow: hidden;
  font-size: 0;
}
.avatar {
  width: 100%;
  background: #eeeeee;
}
.avatar img {
  width: 200px;
  height: 200px;
}
.upload-imgs li {
  position: relative;
  width: 118px;
  height: 118px;
  font-size: 14px;
  display: inline-block;
  padding: 10px;
  margin-right: 25px;
  border: 2px dashed #ccc;
  text-align: center;
  vertical-align: middle;
}
.upload-imgs li:hover {
  border-color: white;
}
.upload-imgs .add {
  display: block;
  background-color: #ccc;
  color: #ffffff;
  height: 94px;
  padding: 8px 0;
}
.upload-imgs .add .iconfont {
  padding: 10px 0;
  font-size: 40px;
}
.upload-imgs li:hover .add {
  background-color:blueviolet;
}
.upload-imgs li .upload {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 118px;
  height: 118px;
}
.upload-imgs .img {
  position: relative;
  width: 94px;
  height: 94px;
  line-height: 94px;
}
.upload-imgs .img img {
  vertical-align: middle;
}
.upload-imgs .img .close {
  display: none;
}
.upload-imgs li:hover .img .close {
  display: block;
  position: absolute;
  right: -6px;
  top: -10px;
  line-height: 1;
  font-size: 22px;
  color: #aaa;
}
.lieb div p {
  margin: 0;
}
.lieb div img {
  width: 100%;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}
.flex div {
  width: 49%;
  text-align: center;
  margin-right: 1px;
}
.flex div div {
  width: 100%;
}
.flex div div img {
  width: 100%;
}
.mint-radiolist {
  display: flex;
  justify-content: start;
}
/*这是滑动导航 */
.container-wrap {
  width: 100%;
  height: 2rem;
  background: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  overflow: hidden;
  overflow-x: scroll;
  /*-webkit-backface-visibility:hidden;
  -webkit-perspective: 1000;*/
  -webkit-overflow-scrolling: touch;
  text-align: justify;
}
.slide-box {
  display: -webkit-box;
  padding: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
ul {
  margin: 0;
  range: auto;
  padding: 2px;
  position: relative;
}
ul li img {
  width: 100%;
}
ul li {
  list-style: none;
  width: 100px;
  height: 100px;
}
.slide-item {
  width: 100px;
  margin-right: 10px;
}
.trr{
display:flex;
justify-content:space-between;  
}
.trr span{
  font-size:0.9rem;
}
.trr span:first-child{
  color:red;
}
.trr span:last-child{
  color:blue;
}
.shuoming {
  text-align: left;
  line-height: 30px;
}
.title{
      margin: 0 auto;
    font-family: "微软雅黑";
    font-size: 1.5rem;
   color: darkgoldenrod;
    max-width: 400px;
    display: -webkit-box;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.ft{
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
}
.know{
  width: 100%;
  text-align:left;
}
.bioati {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.zengsong {
  height: 100px;
  line-height: 50px;
  display: flex;
}
.card{
  width: 100%;
}
.card .chb{
  text-align: left;
}
.ddre{
  height:4rem;
  line-height: 4rem;
	padding: 0;
	margin: 0 
}
.dimg{
  width: 20%;
}
.dimg img{
  width: 100%;
}
.text-juy,.lsname{
  width:100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card .scar{
  display:flex;
	padding-left: 2px;
  height:66px;
  line-height:66px;
  margin-bottom: 1px;
  justify-content: space-between;
  border-bottom: 1px solid #333333;
}
.container div {
  display: inline-block;
  height: 2rem;
  color: #ffffff;
  text-align: center;
  line-height: 2rem;
  width: 25%;
  border-right: 1px solid wheat;
}
.container div:last-child {
  border-right: 0;
}
.irt{
  width: 30%;
  border:0;
}
.center {
  background: tomato;
  color: #ffffff;
  font-size: 1rem;
}
.fr {
  width: 100%;
  height: 100px;
}
.upload-imgs{margin: 10px 0 0px 0;overflow: hidden;font-size: 0;}
.upload-imgs li{position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 10px;margin-right: 25px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;}
.upload-imgs li:hover{border-color: #6666;}
.upload-imgs .add{display: block;background-color: #ccc;color: #ffffff;height: 94px;padding: 8px 0;}
.upload-imgs .add .iconfont{padding: 10px 0;font-size: 40px;}
.upload-imgs li:hover .add{background-color:#3333;}
.upload-imgs li .upload{position: absolute;top: 0;bottom: 0;left: 0;right: 0;width: 118px;height: 118px;}
.upload-imgs .img{position: relative;width: 94px;height: 94px;line-height: 94px;}
.upload-imgs .img img{vertical-align: middle;}
.upload-imgs .img .close{display: none;}
.upload-imgs li:hover .img .close{display: block;position: absolute;right: -6px;top: -10px;line-height: 1;font-size: 22px;color: #aaa;}
.ximg img, .rth img{
  width: 100%;
  backdrop-filter:inherit;
}
.mint-tab-item-label{
  line-height: 2;
}
.mint-navbar{
  font-size: 1.5rem;
}
</style>
