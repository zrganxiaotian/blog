<template>
  <div id="Header">
   <div class="idname"><p>{{id+'的博客'}}</p></div>
   <div id="head">
    <ul>
   <li><router-link :to="{name:'Blogs'}">首页</router-link></li>
   <li><router-link :to="{name:'Bloglist'}">博客</router-link></li> 
   <li><router-link :to="{name:'Write'}">写博客</router-link></li>
   <li class="last">个人中心</li>
   </ul>
   </div>
 
  <div class="content">
   <router-view></router-view>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import store from '@/store'
import Footer from '@/components/Footer'
export default {
  name: 'Header',
  store,
  components:{
    Footer,
  },
  data(){
    return{
      data:JSON.parse(localStorage.users),
      id:localStorage.getItem('idname')
    }
  },
  created(){
      let orderId = this.$route.query.orderId;
      console.log(orderId);
      if(orderId){
        localStorage.setItem('idname',orderId)
      }
       
       console.log('idname')
       
  }

}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
#head{
  width:320px;
  height: 30px;
  color:#fff;
  font-size:18px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-left: 500px;
  padding-right:10px;
  margin-top:40px;
}
a{
  width:100%;
  height:100%;
  text-decoration: none;
  color:#000;
}
a:active{
  color:#000;
}
a:hover{
   color:#0199cb;
}
ul{
  display:flex;
}
li{
  width:80px;
  height:22px;
  line-height: 22px;
  text-align:center;
  display:flex;
  flex:1;
  color:#000;
  border-right: 1px dashed #818689;
}
.last{
  border:none;
}
.router-link-active{
  color:#0199cb;
}
.idname{
  width:1000px;
  margin-left:auto;
  margin-right: auto;
  font-size: 40px;
  padding-top:100px;
}
#Header{
  width:100%;
  height: 100%;
  background-image: url(../assets/imgs/bg2.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  background-attachment: fixed;  
  overflow: hidden auto;
}
.content{
  width:1000px;
  height:auto;
  margin-top:30px;
  margin-left:226px;
  margin-left:auto;
  margin-right: auto;
}

</style>
