import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import battle from './view/battle.vue';
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
            redirect: 'battle',
            children: [{
                    path: 'battle',
                    name: 'battle',
                    component: battle
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
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');

        if (token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});
export default router;