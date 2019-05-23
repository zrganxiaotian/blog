<template>
  <div id="#Blogdetails">
  <Personal></Personal>
  <div class="conent">
   <div class="head">
      <h3>{{data[i].title}}</h3>
      <span>{{'('+data[i].time+')'}}</span>
      <p><span v-if="data[i].author!==''">作者：{{data[i].author}}</span><span>标签:</span><span v-for="ty in data[i].type" v-if="ty">{{'['+ty+']'}}</span></p>
      <article>{{data[i].content}}</article>
    </div>
  </div>
  </div>

</template>

<script>
import Personal from '@/components/Personal'
export default {
 name:'BlogDetails',
 components:{
    Personal
  },
 data(){
   let blog=localStorage.getItem('blog');
    return{
        data:blog?JSON.parse(blog):[], 
        i:this.$route.params.id,          
    }
 },
 
 



}
</script>

<style scoped>
.head{
  width:700px;
  min-height:600px;
  height:auto;
  margin-right:auto;
  margin-left:auto;
  margin-top:50px;
  margin-bottom: 50px;
}
#Blogdetails{
  background-color:#f6f3f3; 
}
h3{
   text-align: center;
   padding-top:20px;
}
span,p{
    padding-left:10px;
}
article{
    text-indent: 30px;
    margin-top:20px;
}

</style>