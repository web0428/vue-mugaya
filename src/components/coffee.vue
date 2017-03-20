<template>
    <div class="coffee">
        <img src="../assets/senna/logo.png" height="32" width="50" alt="" style="margin-left:14px;margin-top:10px;float:left">
        <div class="words_1">
            <span>牧羊人的故事( The shepherd's story )</span>
            &emsp;&emsp;传说公元十世纪前后，在非洲的埃塞俄比亚的高原上，有个牧羊人卡尔，有一天他看到山羊突然都显得无比兴奋，雀跃不已。他觉得很奇怪，后来经过细心观察，发现这些羊群是吃了某种红色果实才兴奋不已的。卡尔好奇地尝了一些，发觉食后自己觉得精神爽快，兴奋不已，便顺手将这种不可思议的红色果果实摘些带回家，分给当地人吃，所有其神奇效力也就因此流传开来了。
        </div>
        <div class="words_2">
            <span>阿拉伯僧侣( Arabia monks )</span>
            &emsp;&emsp;传说公元1258年的也门山区，因犯罪而被族人驱逐出境的酋长雪克.欧玛尔，被流放到很远的瓦萨巴( 位于阿拉伯 )，当他精疲力尽的在山上走着时，发现枝头上的小鸟在啄食了树上的果实后，发出极为悦耳婉转的啼叫声。于是他便将此果加水熬煮喝，不料竟发出浓郁诱人的香味，饮用后原本疲惫的感觉也随之消除，元气十足。后来，欧玛便采集许多这种神奇的果实，遇见有人病时，就将果实做成汤汁给他们引用，使他们恢复了精神，由于他四处行善，受到信徒的喜爱，不久他的罪得以被赦，回到摩卡的他，因发现这种果实被尊崇为圣者。据说当时神奇的治病良药，就是咖啡。
        </div>
        <img src="../assets/senna/dh_close.png" height="18" width="22" alt="" @click="show" v-if="!open" style="position: absolute;right: 10px;top: 20px;">
        <transition name="fade">
        <div class="list" v-if="open" @click="show" >
            <img src="../assets/senna/dh_open.png" height="26" width="26" alt="" style="float:right;margin-right:10px;margin-top:20px;">
            <ul class="nav">
                <li style="margin-top:100px" ><router-link to="/">首页</router-link></li>
                <li  class="active"><router-link to="/coffee">咖啡豆传说</router-link></li>
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
.coffee{ 
    width: 100%;
    height: 661px;
    position: relative;
    background-image: url(../assets/senna/bg_2.png);
    background-size:100% 661px;
    overflow: hidden;
}
.list{
    position: absolute;
    right: 0;
    width: 150px;
    height: 661px;
    background:rgba(36, 36, 36, 0.5);
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
.words_1{
    color: #fff;
    float: left;
    font-size:14px;
    margin-top: 90px;
    margin-left: 580px;
    width: 535px;
    font-size: 14px;
}
.words_1 span,.words_2 span{
    font-size: 18px;
    display: block;
    margin-bottom: 20px;
}
.words_2{
    color: #fff;
    float: left;
    font-size:14px;
    margin-top: 180px;
    margin-left: 100px;
    width: 535px;
    font-size: 14px;
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