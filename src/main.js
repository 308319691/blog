// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import store from './store/'

Vue.config.productionTip = false

/* eslint-disable no-new */
//Vue.use(vuex);
//var store = new vuex.Store({//store对象
//  state:{
//    num:'123'
//  }
//})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
