import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import index from './index'
import vuetify from './vuetify';
import coreState from './coreState'
import StarRating from 'vue-star-rating'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faUsers, faTruckMoving, faAward, faGlobeAfrica, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faUsers, faTruckMoving, faAward, faGlobeAfrica, faTrophy)

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('font-awesome-icon', FontAwesomeIcon)



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
