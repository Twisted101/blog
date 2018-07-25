import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import transition_store from '../store/transition.js';

export default new vuex.Store({
    modules: {
        transition: transition_store
    }
})