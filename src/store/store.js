import Vue from 'vue'
import Vuex from 'vuex'
import topic from './modules/topic'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDark: false,
        isSidebarOpen: false,
        isSignedIn: false
    },
    mutations: {
        toggleDarkMode() {
            this.state.isDark = !this.state.isDark
        },
        toggleSideBar() {
            this.state.isSidebarOpen = !this.state.isSidebarOpen
        },
        signIn() {
            this.state.isSignedIn = true
        },
        signOut() {
            this.state.isSignedIn = false
        }
    },
    actions: {

    },
    modules: {
        topic
    }
})