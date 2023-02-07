import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      userInfo : {
        id: ""
      },
      productId : 0
    }
  },
  mutations: {
    setUserInfo(state, payload){
      state.userInfo.id = payload;
    },
    setProductId(state, payload){
      state.productId = payload;
      console.log("PRD1 : "+payload);
    }
  }
})

export default store;