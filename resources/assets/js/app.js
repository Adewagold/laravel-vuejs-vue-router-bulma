
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//Vue.component('myheader', require('./components/Myheader.vue'));
let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');
let Home = require('./components/Home.vue');
let About = require('./components/About.vue');

const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About }
]

const router = new VueRouter({
	mode: 'history',
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components: {Myheader, Myfooter},
    data: {
    	page_title : "WELCOME TO MY PHONEBOOK APP"
    }
});
