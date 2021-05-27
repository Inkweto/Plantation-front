import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'helloworld',
            component: HelloWorld
        },
        {
            path: '/plants',
            name: 'plants',
            component: () => import('./views/Plants.vue')
        }
    ]
})