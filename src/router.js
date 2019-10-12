import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import openGame from './view/openGame.vue';
import battle from './view/battle.vue'
import index from './view/index.vue';
import login from './view/login.vue';
import ranking from './view/ranking.vue';
import history from './view/history.vue';
import register from './view/register.vue'

const router = new Router({
    routes: [{
            path: '/',
            name: index,
            component: index,
            redirect: 'openGame',
            children: [{
                    path: 'battle',
                    name: 'battle',
                    component: battle
                },
                {
                    path: 'openGame',
                    name: 'openGame',
                    component: openGame
                },
                {
                    path: 'ranking',
                    name: 'ranking',
                    component: ranking
                },
                {
                    path: 'history',
                    name: 'history',
                    component: history
                }
            ]
        },
        {
            path: '/login',
            name: login,
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        }
    ],
})
export default router