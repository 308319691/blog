<template>
<transition name='transitionName' keep-alive>
  <router-view></router-view>
</transition>
</template>
<script>
  export default{
    beforeRouteUpdate(to,from,next){
      let isBack = this.$router.isBack;
      if( isBack ){
        this.transitionName = 'slide-right'
      }else{
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false;
    }
  }

</script>
<style>
.slide-left-enter, .slide-right-leave-active {
opacity: 0;
-webkit-transform: translate(50px, 0);
transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
opacity: 0;
-webkit-transform: translate(-50px, 0);
transform: translate(-50px, 0);
}
</style>
