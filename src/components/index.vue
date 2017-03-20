<template>
    <div class="index">
        <img src="../assets/senna/logo.png" height="32" width="50" alt="" style="margin-left:14px;margin-top:10px;float:left">
        <div class="words">
            <span>MUGAYA</span><br>
            Kenya AA roasted coffee beans
        </div>
        <img src="../assets/senna/dh_close.png" height="18" width="22" alt="" @click="show" v-if="!open" style="position: absolute;right: 10px;top: 20px;">
        <transition name="fade">
        <div class="list" v-if="open" @click="show" >
            <img src="../assets/senna/dh_open.png" height="26" width="26" alt="" style="float:right;margin-right:10px;margin-top:20px;">
            <ul class="nav">
                <li style="margin-top:100px" class="active"><router-link to="/">首页</router-link></li>
                <li><router-link to="/coffee">咖啡豆传说</router-link></li>
                <li><router-link to="/detail">产品详情</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
        </div>
        </transition>
        <div class="footer">
            ©2003-2016 SennaCoffee.com 版权所有
            <img src="../assets/senna/fn.png" height="14" width="18" alt="" >
            <img src="../assets/senna/wx.png" height="14" width="15" alt="">
            <img src="../assets/senna/in.png" height="14" width="14" alt="">
            <img src="../assets/senna/ff.png" height="14" width="8" alt="" style="margin-left:20px">
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                open:true
            }
        },
        methods:{
            show(){
                this.$store.dispatch("agree")
                this.open=this.$store.state.open
            }
        }
    }
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.index{ 
    background-image: url(../assets/senna/bg_1.png);
    /*background-size: cover;*/
    width: 100%;
    height: 661px;
    position: relative;
    background-size:100% 661px;
}
.list{
    width: 150px;
    height: 661px;
    background:rgba(36, 36, 36, 0.5);
    position: absolute;
    right: 0
}
.nav{
    padding: 0;
}
.nav li{
    list-style: none;
    height: 30px;
    line-height: 30px;
    margin-top: 62px;
    margin-bottom: 62px;
}
.nav li a{
    color: #fff;
    padding-left: 10px;
}
.active,.active a{
    background:#fff;
    color: #242424 !important;
}
.words{
    color: #fff;
    float: left;
    font-size:14px;
    margin-top: 200px;
    margin-left: 180px;
}
.words span{
    font-size: 50px;
}
.footer{
    width: 100%;
    height: 25px;
    background:rgba(36, 36, 36, 0.8);
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 10px;
    line-height: 25px;
    text-align: right;
}
.footer img{
    margin-right: 20px;
    float: right;
    margin-top: 5px;
}
</style>