import Vue from 'vue';
import Vuex from 'vuex';

import dome from './dome'
import common from "./common";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dome,
        common
    }
})


