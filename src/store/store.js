import Vue from 'vue'
import Vuex from 'vuex'
import topic from './modules/topic'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDark: false
    },
    mutations: {
        toggleDarkMode() {
            this.state.isDark = !this.state.isDark
        }
    },
    actions: {

    },
    modules: {
        topic
    }
})