<template>
<div id="Personal">
<div class="use">
    <p class="user">个人资料</p>
    <p class="pic"></p>
    <p class="name">wodd</p>
    <div class="btn">
        <button>加好友</button><button class="btn2">发纸条</button>
        <button>写留言</button><button class="btn4">加关注</button>
    </div>
    <div class="lis">
        <p>博客等级：<span>24*</span></p>
        <p>博客积分：1,5800</p>
        <p>博客访问：360,000</p>
        <p>关注人气：12,000</p>
        <p>获赠金笔：0</p>
        <p>赠出金笔：0</p>
    </div>
</div>
</div>
</template>



<script>
export default {
 name:'Personal',





}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.use{
    width:218px;
    height: auto;
    border: 1px solid #ccc;
    background-color: #fff;
}
.user{
    font-weight: bold;
    background-color: #f6f3f3;
    margin:3px;
}
.pic{
    border:1px solid #ccc;
    width:150px;
    height:150px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    background-image: url(../assets/imgs/use.png);
    background-size: 100% ;
}
.name{
    text-align: center;
    margin:10px;
}
.btn{
    width:180px;
    margin-left: auto;
    margin-right: auto;
    border-top: 2px dashed #ccc;
    border-bottom: 2px dashed #ccc;
    padding-top:20px;
    padding-bottom:20px;
}
.btn2,.btn4{
    margin-left:10px;
}
.btn4{
    margin-top:10px;
}
button{
    width:80px;
    height:30px;
}
.lis{
    width:180px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    margin-top:20px;
}
.lis p{
    margin-top:5px;
}
.lis p span{
    font-size:25px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:royalblue;
}
</style>