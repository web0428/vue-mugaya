<template>
    <div class="detail">
        <img src="../assets/senna/logo.png" height="32" width="50" alt="" style="margin-left:14px;margin-top:10px;float:left">
        <ul class="intro">
                <li>
                    <img src="../assets/senna/c1.png" height="275" width="500" alt="">
                    <div class="img_words">
                        <span>产自肯尼亚伯曼庄园( DORMANS )</span>
                        &emsp;&emsp;穆咯雅( Mugaya )生豆来自肯尼亚超过1800米高海拔产区。酸质、甜感、醇厚以及肯尼亚式莓果风味完美平衡。
                    </div>
                </li>
                <li>
                    <img src="../assets/senna/c2.png" height="275" width="500" alt="">
                    <div class="img_words">
                        <span>关于烘培( Mugaya浅度烘培 )</span>
                        &emsp;&emsp;Senna Coffee每批次咖啡豆烘培完成后，都会进行焦糖化程度测试( Agtron )，参考SCAA对烘培度的定义，结合实际应用的需要，我们会以咖啡粉的焦糖化程度数值来标注咖啡豆的烘培程度。
                        &emsp;&emsp;目前，我们对烘培度的定义分为：浅度烘培、中度烘培、深度烘培。
                    </div>
                </li>
                <li>
                    <img src="../assets/senna/c3.png" height="275" width="500" alt="">
                    <div class="img_words">
                        <span>风味描述( Flavor )</span>
                        干湿香——//8.0//&emsp;酸质——//8.0//&emsp;风味——//7.75//&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        体制感——//7.5//&emsp;余韵——//8.0//&emsp;均衡感——//7.75//&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;总评——//8.0//
                    </div>
                </li>
                <li>
                    <img src="../assets/senna/c4.png" height="275" width="500" alt="">
                    <div class="img_words">
                        <span>制作建议( Advise )</span>
                        水温：94℃<br>
                        时间：2' 30 <br>
                        比例：15g粉240ml水 <br>
                        TDS：1.24% <br>
                    </div>
                    <div class="buy">立即购买</div>
                </li>
        </ul>
        <img src="../assets/senna/dh_close.png" height="18" width="22" alt="" @click="show" v-if="!open" style="position: absolute;right: 10px;top: 20px;">
        <transition name="fade">
        <div class="list" v-if="open" @click="show" >
            <img src="../assets/senna/dh_open.png" height="26" width="26" alt="" style="float:right;margin-right:10px;margin-top:20px;">
            <ul class="nav">
                <li style="margin-top:100px"><router-link to="/">首页</router-link></li>
                <li><router-link to="/coffee">咖啡豆传说</router-link></li>
                <li class="active"><router-link to="/detail">产品详情</router-link></li>
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
.detail{ 
    width: 100%;
    height: 661px;
    position: relative;
    background: #262628;
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
.intro{
    height: 500px;
    width: 90%;
    float: left;
}
.intro li{
    list-style: none;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    position: relative;
}
.img_words{
    position: absolute;
    color: #fff;
    top: 55px;
    left: 20px;
    font-size: 14px;
}
.img_words span{
    display: block;
    font-size: 18px;
    margin-bottom: 20px;
}
.buy{
    position: absolute;
    color: #fff;
    border: #FFF 1px solid;
    font-size: 14px;
    width: 80px;
    text-align: center;
    right: 0;
    cursor:pointer;
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