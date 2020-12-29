import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    getters: {},
    mutations: {},
    modules: {
        login
    },
    strict: process.env.NODE_ENV !== 'production'
})
