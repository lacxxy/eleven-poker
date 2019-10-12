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
import Net from './network'

// Vue.prototype(Net)
new Vue({
    router,
    el:'#app',
    render: h => h(App),
    Net
})