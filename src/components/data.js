export default{
  state:{
    num:'ccc'
  },
  mutations:{
    add(state){
      state.num +=1
    }
  },
  actions:{
    add2(state111){
      if(1>0){state111.commit('add')}

    }
  },
  getters:{
    add3(state){
      return state.num;
    }
  }
}
