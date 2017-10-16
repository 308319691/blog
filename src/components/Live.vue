<template><div>
  <pre style="font-size: 16px; line-height: 25px">
    beforeCreate（创建前）,
created（创建后）,
beforeMount(载入前),
mounted（载入后）,
beforeUpdate（更新前--更新前数据已经加载进去了）,
updated（更新后）,
beforeDestroy（销毁前）,
destroyed（已销毁--销毁后数据还在，但是已经不被vue所响应）
  </pre>
  <input type="text" name="btnSetNumber" v-model="a">
  <h3 style="color:red">{{a}}</h3>
<button @click="update">更新</button>
  </div>
</template>
<script>
export default{
  data(){
    return{
      a:'aa',
      b:'bbb'
    }
  },
  methods:{
    update(){
      this.a='123'
    }
  },
  beforeCreate() {

    console.log("创建前")
    console.log(this.a)
    console.log(this.$el)
  },
  created() {
    console.log("创建之后");
    console.log(this.a)
    console.log(this.$el)
  },
  beforeMount() {
    console.log("载入前")
    console.log(this.a)
    console.log(this.$el)
  },
  mounted() {
    console.log("载入后")
    console.log(this.a)
    console.log(this.$el)
  },
  beforeUpdate() {
    console.log("更新前");
    console.log(this.a)
    console.log(this.$el)
  },
  updated() {
    console.log("更新完成");
    console.log(this.a);
    console.log(this.$el)
  },
  beforeDestroy() {
    console.log("销毁前");
    console.log(this.a)
    console.log(this.$el)
  },
  destroyed() {
    console.log("已销毁");
    console.log(this.a)
    console.log(this.$el)
  }
}
</script>
<style></style>
