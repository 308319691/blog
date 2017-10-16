<template>
  <div id="app">
    <router-view></router-view>
    <p></p>
   <!-- <button @click="$store.commit('add')">mutation</button>
    <button @click="$store.dispatch('add2')">action</button>
    <h1 style="color:blue">{{$store.state.aaa.num}}</h1>
    <h1>{{$store.getters.add3}}</h1>
    <h1 style="color:red">{{show}}</h1>-->
    <!--<h1 style="color:red">{{showGet}}</h1>-->
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
export default {
  name: 'app',
  computed:{//实时计算
  ...mapState({//获取数据
       show:state=>state.aaa.num
}),
//  ...mapGetters({//获取数据
 //     showGet:state=>state.aaa.num
 // })
 },

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
