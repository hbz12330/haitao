import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/home/login'
import q_sp from '../components/home/q_sp'
import slb from '../components/home/slb'
import fabu from '../components/home/fabu'
import particular from '../components/home/particular'
import shppcar from '@/components/shppcar/shppcar'
import fenlei from '../components/home/fenlei'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/qsp',
            component: q_sp
        },
        {
            path: '/slb',
            component: slb
        },
        {
            path: '/fabu',
            component: fabu
        },
        {
            path: '/particular',
            component: particular
        },
        {
            path: '/shppcar',
            component: shppcar
        },
        {
            path: '/fenlei',
            component: fenlei
        }
    ]
})