import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      name:""

    },
    mutations:{
      usename(state,value){
          state.name=value;
          console.log(value);
      }
        
    },

    action:{
     
    }
})