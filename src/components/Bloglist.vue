<template>
<div id="Bloglist">
     <Personal></Personal>
<div class="conent">
    <p>全部博文(0)</p>
    <ul>
        <li>我的技术使劲<span>456789</span></li>
    </ul>
    
</div>
</div>
</template>



<script>
import Personal from '@/components/Personal'
export default {
 name:'Bloglist',
 components:{
    Personal
  },




}
</script>









<style scoped>
ul{
    width:700px;
    height: 30px;
    line-height: 30px;
    margin-left:auto;
    margin-right: auto;
    border-bottom:1px dashed #ccc;
    color:#0199cb;   
}
.conent{
    min-height:800px;
}
</style>