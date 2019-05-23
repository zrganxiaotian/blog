<template>
  <div id="Write">
  <Personal></Personal>
  <div class="conent">
   <form>
       <label>标题：</label>
       <input type="text" v-model="title">
       <p><label>主题：</label></p>
       <textarea v-model="content"></textarea>
       <input type="checkbox" v-model="box" value="生活">生活
       <input type="checkbox" v-model="box" value="情感">情感
       <input type="checkbox" v-model="box" value="社会">社会
       <input type="checkbox" v-model="box" value="人文">人文
       <p>
       <label>作者：</label>
       <select v-model="use">
          <option v-for="(user,index) in users" :key="index">{{user.name}}</option>
        </select>
       </p>
   </form>
   <div class="bloglook">
   <div><span>{{box}}</span><span>作者：{{use}}</span></div>
   <button @click="add">确认发布</button>
   <button @click="cancel" id="none">取消</button>
   <h3>博客预览</h3>
   <div id="look">
      <h4>{{title}}</h4>
      <article>{{content}}</article>
   </div>
  </div>
  </div>
  </div>

</template>

<script>
import Personal from '@/components/Personal'
export default {
  name: 'Write',
   components:{
    Personal
  },
  data(){
    let blog = localStorage.getItem('blog');
    return{
      title:"",
      content:"",
      users:[{name:"小米",value:0},{name:"小张",value:1},{name:"小王",value:2}],
      box:[],
      use:"",
      data:blog?JSON.parse(blog):[],
      time:""
    }
  },
  created(){
       this.get()
      
    },
  methods:{
    get(){
        var d=new Date();
        var seperator1="-";
        var year=d.getFullYear();
        var month=d.getMonth()+1;
        var strDate=d.getDate();
        var strhour=d.getHours();
        var strmit=d.getMinutes();
        if (month >= 1 && month <= 9) {
       month = "0" + month;
       }
       if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
        }
       this.time= year + seperator1 + month + seperator1 + strDate+' '+strhour+':'+strmit;
       return this.time
      },
      cancel(){
          this.title=""
          this.content=""
          this.use=""
          this.box=[]
          
      },
      add(){
        if(this.title==""||this.content==""){
          alert('标题或内容不能为空!')
        }else{
        this.data.unshift({title:this.title,content:this.content,author:this.use,time:this.time,type:this.box});
        localStorage.setItem('blog',JSON.stringify(this.data));
        console.log(this.data);
        this.title=""
        this.content=""
        this.use=""
        this.box=[]
        alert('发布成功') 
        }
      }
  }
} 




</script>

<style scoped>
form{
    width:700px;
    margin-top:50px;
    margin-left:auto;
    margin-right: auto;
}
.bloglook{
   width:700px;
   margin-left:auto;
   margin-right: auto;
}
label{
    font-size:15px;
    font-weight: bold;
}
input[type='text']{
     width:500px;
     height: 20px;
     margin-top: 20px;
     font-size:15px;
}
textarea{
    width:700px;
    height:500px;
    font-size:15px;
}
#look{
    width:700px;
    min-height: 400px;
    height:auto;
    background-color:#f6f3f3;
}
article{
  text-indent:20px;
}
button{
   margin-top:20px;
   width:100px;
   height:40px;
   font-size:15px;
   background-color:#0199cb;
   color:#fff;
   border:none;
}
#none{
  margin-left:50px;
}

</style>