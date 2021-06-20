import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './views/Login.vue'
import Main from './views/HelloWorld.vue'
import Plants from './views/Plants.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'helloworld',
        component: Main,
        meta: {requiresAuth: true},
    },
    {
        path: '/plants',
        name: 'plants',
        component: Plants,
        meta: {requiresAuth: true},
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guest: true },
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(store.getters.isAuthenticated) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.guest)) {
        if(store.getters.isAuthenticated) {
            next('/');
            return;
        }
        next();
    } else {
        next();
    }
})

export default router