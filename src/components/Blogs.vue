<template>
  <div id="Blogs">
    <Personal></Personal>
    <div class="conent">
    <div id="search"><input type="text" v-model="key" placeholder="搜索"></div>
    <div id="blog" v-for="(tab,index) in filteredData"  :key="index">
      <h3><router-link :to="'/blogdetails/'+index" id="head"  v-rainbow >{{tab.title}}
      </router-link><span>{{'('+tab.time+')'}}</span><a><router-link :to="'/editor/'+index">[编辑]</router-link>
      </a><a @click="det(index)">[删除]</a></h3>
      <p><span v-show="tab.author!==''" class="note">作者：{{tab.author}}</span><span class="note" v-for="(ty,index) in tab.type" v-show="ty">{{'['+ty+']'}}</span></p>
      <article >{{tab.content |snippet }}</article>
    </div>
    </div>
  </div>
</template>

<script>
import Personal from '@/components/Personal'
export default {
  name: 'Blogs',
  components:{
    Personal
  },
  data(){
    let blog = localStorage.getItem('blog');
    return{
      data:blog?JSON.parse(blog):[], 
      key:"" ,
      index:"",

    }
},
    
    methods:{
       det(a){
         console.log(this.data,a)
         if(confirm("确定删除本条博文？")){
          this.data.splice(a,1)
          localStorage.setItem('blog',JSON.stringify(this.data));
         }   
       },
      
      
    },
 
    computed:{
      filteredData(){

        return this.data.filter((tab)=>{
          return tab.title.match(this.key)||tab.content.match(this.key)||tab.content.match(this.key)||tab.author.match(this.key);
        })
      
      }
    },
    filters:{
        snippet(value){
          if(value.length>200){
              return value.slice(0,200)+"......"
          }else{
               return value.slice(0,200)
          }
        }
    }   
 

}




</script>

<style scoped>

#blog{
  width:700px;
  height: 200px;
  border-radius: 5px;
  background-color: #f6f3f3;
  margin-top:20px;
  margin-left:auto;
  margin-right:auto;
}
h3{
  padding-top:10px;
}
p{
  color:#666;
}
p,#head,article,a{
  margin-left:10px;
}
#head{
  padding-top:10px;
  font-size:20px;
  font-weight: bold;
}
span{
  font-weight: normal;
  color:#666;
  font-size:13px;
  margin-left:30px;
}
a{
  font-weight: normal;
  font-size:13px;
  color:#666;
  text-decoration: none;
  cursor: pointer;
}
a:hover{
  color:red;
}
input{
 width:600px;
 min-width: 200px;
 height: 32px;
 margin-left: auto;
 margin-right: auto;
 border:1px solid #ccc;
 text-indent: 5px;
 border-radius: 5px;
}
#search{
  width:700px;
  margin-left: auto;
  margin-right: auto;
  margin-top:40px;
  margin-bottom: 30px;
  vertical-align: middle;
}
.note{
  font-size: 14px;
  margin-left:5px;
}
</style>
