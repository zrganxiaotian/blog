<template>
  <div id="Login">
    <div id="logo">
    <h1>Hello  Blog!</h1>
    <button id="log" @click="log"><a :class="{isactive:active}">登 录</a></button>
    <button @click="reg"><a :class="{isactive:activetwo}">注 册</a></button>
    <div class="list" v-show="userlogin">
      <form>
        <p class="name"><label>用户名：</label> <input type="text" v-model="name"></p>
        <p class="password"><label>密码：</label><input type="password" v-model="psdword"></p> 
        <div class="antor">
        <span v-show="antor">*用户名和密码不能为空</span>
        <span v-show="psdnone">*密码错误</span>
        </div>
        <input class="sure" type="button" value="确定" @click="logsure">
      </form>     
    </div>
    <div class="listreg" v-show="userreg">
      <form>
        <p class="name"><label>用户名：</label><input type="text" v-model="regname" @blur="nameleave"></p>
        <p class="password"><label>密码：</label><input type="password" v-model="regpsdword" placeholder="至少为6位数"></p> 
        <p class="password agin"><label>确认密码：</label><input type="password" v-model="regpsdwordtwo" placeholder="至少为6位数"></p>
        <div class="antor">
        <span v-show="antortwo">*用户名和密码不能为空</span>
        <span v-show="namehave">*用户名被占</span>
        <span v-show="dispsd">*密码错误</span>
        <span v-show="psdnum">*密码至少为6位数</span>
        </div>
        <input class="sure reg" type="button" value="注册" @click="regsure">
      </form>     
    </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Login',
  store,
  data(){
    let users = localStorage.users;
    return{
       userlogin:false,
       userreg:false,
       antor:false,
       antortwo:false,
       namehave:false,
       dispsd:false,
       psdnum:false,
       psdnone:false,
       name:"",
       psdword:"",
       regname:"",
       regpsdword:"",
       regpsdwordtwo:"",  
       active:false,
       activetwo:false,
       data:users?JSON.parse(users):[],
    }
  },
  methods:{
    log(){
      this.userlogin=true;
      this.active=true;
      this.activetwo=false;
      this.userreg=false;
    },
    reg(){
      this.userreg=true;
      this.active=false;
      this.activetwo=true;
      this.userlogin=false;
    },
    logsure(){
      for(let tab of this.data){
        if(this.name==""||this.psdword==""){
         this.antor=true;
         this.psdnone=false;
       }else if(this.name==tab.username && this.psdword==tab.password){
          this.$router.push({path:'/blogs',query:{orderId:this.name}})            
        }else{
          this.antor=false;
          this.psdnone=true;
        }
       }  
      
    },
    regsure(){
       if(this.regname==""||this.regpsdword==""||this.regpsdwordtwo==""){
         this.antortwo=true;
         this.namehave=false;
         this.dispsd=false;
         this.psdnum=false; 
       }else if(this.regpsdword!==this.regpsdwordtwo){
          this.dispsd=true;
          this.antortwo=false;
          this.namehave=false;
          this.psdnum=false;
       }else if(this.regpsdword.length<6){
          this.psdnum=true;
          this.dispsd=false;
          this.antortwo=false;
          this.namehave=false;    
       }else{
        this.data.push({
                username:this.regname,
                password:this.regpsdword,
            }),
           localStorage.setItem('users',JSON.stringify(this.data));
           alert("注册成功")
       }
    },
    nameleave(){
        for(let tab of this.data){
          if(this.regname==tab.username){
            this.namehave=true;
            this.antortwo=false;
            this.psdnum=false;
            this.dispsd=false;
          }
        }
    }

    
  }

}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
#logo{
    width:1200px;
    height:800px;
    background-image: url("../assets/imgs/login2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top:50px;
    margin-left:auto;
    margin-right:auto;
}
button{
  width:150px;
  height:50px;
  font-size:18px;
  line-height: 50px;
  border:none;
  background-color:rgba(104, 102, 102, 0.5);
  border-radius: 10px;
  outline: none;
}
a{
  width:100%;
  height:100%;
  display: inline-block;
  line-height: 50px;
}
.isactive{ 
  border-radius: 10px;
  box-shadow: inset 0 0 10px #ccc;
}
#log{
 margin-top:250px;
 margin-left:500px;
 margin-right:100px;
}
h1{
  padding-top:50px;
  padding-left:650px;
  font-size:70px;
}
.list,.listreg{
  width:400px;
  height: 200px;
  margin-left:500px;
  margin-top:50px;
  background-color:rgba(104, 102, 102, 0.5);
  border-radius: 10px;
  text-align: center;
  font-size:18px;
}
.name,.password{
  padding-top:20px;
}
input{
  width:200px;
  height:25px;
  border:1px solid rgb(80, 77, 77);
  background-color:transparent; 
  border-radius: 5px;
  text-indent: 5px;
}
input::placeholder{
  color:#000;
}
.password{
  margin-left:20px;
}
.sure{
  width:80px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
   border-radius: 0px;
   border:none;
   background-color:rgba(104, 102, 102, 0.8);
}

.antor{
  width:160px;
  height:30px;
  font-size:15px!important;
  color:red;
  margin-left:130px;
  margin-top:10px;
}
.listreg{
  height:250px;
}
.listreg .password{
  margin-left: 20px;
}
.listreg .password.agin{
  margin-left: -17px;
}

</style>