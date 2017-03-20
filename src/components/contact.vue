<template>
    <div class="contact">
        <img src="../assets/senna/logo.png" height="32" width="50" alt="" style="margin-left:14px;margin-top:10px;position:absolute;z-index:99;">
        <div class="contact_img">
            <img src="../assets/senna/5contact.png" height="330" width="100%" alt="">
            <div class="contact_imgwords">
                联系<br>
                Contact us
            </div>
        </div>
        <div class="company">
            <span>
                SENNA COFFE有限公司
            </span>
            地址：山东省青岛市XX区XX写字楼XX楼XX室<br>
            邮编：XXXXXX<br>
            电话：XXX-XXX-XXXXX<br>
            手机：XXXXXXXXXXXX<br>
            邮箱：coffee@163.com<br>
        </div>
        <div class="form_submit">
        <div class="form_text">
            姓名<br>
            <input type="text">
        </div>
        <div class="form_text">
            邮箱<br>
            <input type="text">
        </div>
        <div class="form_text">
            电话<br>
            <input type="text">
        </div>
        <div class="form_content">
            内容<br><br><br>
            <input type="text">
        </div>
        <div class="submit">提交</div>
        </div>
        <div></div>
        <img src="../assets/senna/dh_close.png" height="18" width="22" alt="" @click="show" v-if="!open" style="position: absolute;right: 10px;top: 20px;">
        <transition name="fade">
        <div class="list" v-if="open" @click="show" >
            <img src="../assets/senna/dh_open.png" height="26" width="26" alt="" style="float:right;margin-right:10px;margin-top:20px;">
            <ul class="nav">
                <li style="margin-top:100px" ><router-link to="/">首页</router-link></li>
                <li><router-link to="/coffee">咖啡豆传说</router-link></li>
                <li><router-link to="/detail">产品详情</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
                <li class="active"><router-link to="/contact">联系我们</router-link></li>
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
.contact{
    background: #262628;
    width: 100%;
    height: 661px;
    position: relative;
    background-size:100% 661px;
}
.contact_img{
    float: left;
    position: relative;
}
.contact_imgwords{
    color: #fff;
    position: absolute;
    left: 100px;
    top: 115px;
}
.company{
    color: #fff;
    font-size: 12px;
    position: absolute;
    bottom: 150px;
    left: 100px;
}
.company span{
    font-size: 16px;
    display: block;
    margin-bottom: 20px;

}
.form_submit{
    height: 300px;
    width: 60%;
    left: 400px;
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 14px;
    overflow: hidden;
}
.form_text{
    float: left;
    margin-left: 40px;
}
.form_text input{
    width: 200px;
}
.form_content{
    float: left;
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: 20px;
}
.form_content input{
    width: 680px;
}
.submit{
    float: left;
    color: #fff;
    border:1px #fff solid;
    text-align: center;
    width: 80px;
    height: 25px;
    line-height: 25px;
    margin-left: 40px;
    cursor:pointer;
}
.list{
    width: 150px;
    height: 661px;
    background:rgba(36, 36, 36, 0.5);
    position: absolute;
    right: 0;
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
input{
    border: none;
    background: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #fff;
}
input:focus{ outline: none; }
</style>