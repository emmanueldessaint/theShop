import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import index from './index'
import vuetify from './vuetify';
import coreState from './coreState'
import StarRating from 'vue-star-rating'


require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('example-component')

Vue.use(VueRouter)

import '../css/app.css';

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        index
    },
    vuetify,
    store: coreState,
    StarRating,
});
