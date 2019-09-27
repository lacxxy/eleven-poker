import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import battle from './view/battle.vue';
import index from './view/index.vue';
import login from './view/login.vue';
export default new Router({
    routes: [{
            path: '/',
            name: index,
            component: index,
            redirect: 'battle',
            children: [{
                path: 'battle',
                name: 'battle',
                component: battle
            }]
        },
        {
            path: '/login',
            name: login,
            component: login
        }
    ]
})