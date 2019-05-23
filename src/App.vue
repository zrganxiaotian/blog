<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header'
import Write from './components/Write'
export default {
  name: 'App',
  components:{
    Header,
    Write
  }
  
}
</script>

<style>
body,html{
  margin:0;
  padding:0;
}
#app{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow: hidden auto;
}
.conent{
  background-color: #fff;
  width:770px;
  margin-left: 228px;
  margin-top: -551px;
  border:1px solid #ccc;
  padding-bottom:50px;
}
</style>

