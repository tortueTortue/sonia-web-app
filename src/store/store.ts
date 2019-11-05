import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import topic from './modules/topic';
import { RootState } from './../types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isDark: true,
    isSidebarOpen: false,
    isSignedIn: false,
    isLeft: true,
    isKillswitchUp: false,
    activeLayoutId: -1,
    isFullscreen: false,
    be_api_url: 'http://localhost:8000',
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDark = !state.isDark;
    },
    toggleSideBar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleLeftMode(state) {
      state.isLeft = !state.isLeft;
    },
    toggleKillswitch(state) {
      state.isKillswitchUp = !state.isKillswitchUp;
    },
    signIn(state) {
      state.isSignedIn = true;
    },
    signOut(state) {
      state.isSignedIn = false;
    },
    setActiveLayoutId(state, id) {
      state.activeLayoutId = id;
    },
    setFullscreenFalse(state) {
      state.isFullscreen = false;
    },
    setFullscreenTrue(state) {
      state.isFullscreen = true;
    },
    noLayout(state) {
      state.activeLayoutId = -1;
    },
  },
  modules: {
    topic,
  },
};

export default new Vuex.Store<RootState>(store);
