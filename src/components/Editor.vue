<template>
  <div id="Editor">
   <Personal></Personal> 
   <div class="conent">  
   <div class="head">
   <form>
       <label>标题：</label>
       <input type="text" v-model="curentBlog.title">
       <p><label>主题：</label></p>
       <textarea v-model="curentBlog.content"></textarea>
       <input type="checkbox" v-model="curentBlog.type" value="生活">生活
       <input type="checkbox" v-model="curentBlog.type" value="情感">情感
       <input type="checkbox" v-model="curentBlog.type" value="社会">社会
       <input type="checkbox" v-model="curentBlog.type" value="人文">人文
       <p>
            <label>作者：</label>
            <select v-model="curentBlog.author">
                <option v-for="(user,index) in users" :key="index">{{user.name}}</option>
            </select>
       </p>
   </form>
   <!--- <strong>博客预览</strong>
   <div id="look">
      <h4>{{curentBlog.title}}</h4>
      <article>{{curentBlog.content}}</article>
   </div>!--->
  <div><span>{{curentBlog.type}}</span><span>作者：{{curentBlog.author}}</span></div>
   <button @click="add">确认修改</button>
   <button @click="cancel" id="none">清空</button>
   </div>
  </div>
  </div>
</template>

<script>
import Personal from '@/components/Personal'
export default {
    name: 'Editor',
    components:{
    Personal
  },
    data(){
        let blog=localStorage.getItem('blog');
        return{
            curentBlog:{},
            users:[{name:"小米",value:0},{name:"小张",value:1},{name:"小王",value:2}],    
            title:"",
            data:blog?JSON.parse(blog):[], 
        }
    },
    mounted(){
        var blogid = this.$route.params.id;
        this.curentBlog =this.data[blogid];
    },
    methods:{
        cancel(){
            this.curentBlog.title=""
            this.curentBlog.content=""    
        },
        add(){
            if(this.curentBlog.title==""||this.curentBlog.content==""){
                alert('标题或内容不能为空!')
            }else{
                this.data.splice(this.$route.params.id,1,
                {title:this.curentBlog.title,content:this.curentBlog.content,
                author:this.curentBlog.author,time:this.curentBlog.time,type:this.curentBlog.type});
                localStorage.setItem('blog',JSON.stringify(this.data));
                console.log(this.data);
                alert('修改成功');
                this.$router.push({path:'/blogdetails/'+this.$route.params.id})
            }
        }
    }
} 




</script>

<style scoped>
.head{
  width:700px;
  height:auto;
  margin-right:auto;
  margin-left:auto;
}
form{
  margin-top:50px;
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
    width:100%;
    height:500px;
    font-size:15px;
}
p{
    height:22px;
}
#look{
    width:100%;
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