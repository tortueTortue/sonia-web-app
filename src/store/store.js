import Vue from 'vue'
import Vuex from 'vuex'
import topic from './modules/topic'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDark: false,
        isSidebarOpen: false,
        isSignedIn: false,
        isLeft: true,
        isKillswitchUp: true,
        activeLayoutId: -1,
        be_api_url: "http://localhost:8000"
    },
    mutations: {
        toggleDarkMode() {
            this.state.isDark = !this.state.isDark
        },
        toggleSideBar() {
            this.state.isSidebarOpen = !this.state.isSidebarOpen
        },
        toggleLeftMode() {
            this.state.isLeft = !this.state.isLeft
        },
        toggleKillswitch() {
            this.state.isKillswitchUp = !this.state.isKillswitchUp
        },
        signIn() {
            this.state.isSignedIn = true
        },
        signOut() {
            this.state.isSignedIn = false
        },
        setActiveLayoutId(id) {
            this.state.activeLayoutId = id
        },
        noLayout() {
            this.state.activeLayoutId = -1
        }
    },
    actions: {

    },
    //WARNING : This attribute belongs to Vue Js, not to e confused with Sonia Modules.
    modules: {
        topic
    }
})