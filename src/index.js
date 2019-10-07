// import Vue from 'vue'
// import App from './view/App.vue'
// import router from './router'
// new Vue({
//     router,
//     el:'#app',
//     render: h => h(App),
// })
import Vue from 'vue'
import App from './view/App.vue'
import router from './router'
import Vuex from 'vuex';
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
});
 
export default store;
new Vue({
    router,
    el:'#app',
    render: h => h(App),
    store: store
})