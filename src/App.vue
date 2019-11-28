<template>
  <div :class="{'dark-mode': isDark}" class="fullscreen-view">
    <div
      id="app"
      @change="setFullscreenFalse"
      class="columns is-gapless margin-down-null height-full-screen"
      :class="{'dark-mode': isDark}"
    >
      <Sidebar v-if="isLeft" class="sidebar"></Sidebar>
      <div class="column">
        <SoniaNavbar name="sonia-navbar"></SoniaNavbar>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
      <Sidebar v-if="!isLeft" class="sidebar"></Sidebar>
    </div>
  </div>
</template>

<script>
import SoniaNavbar from "./components/SoniaNavbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  created: function() {
    this.init();
  },
  components: {
    SoniaNavbar,
    Sidebar
  },
  data: function() {
    return {
      lightLogo: require("./assets/logo_white.png"),
      darkLogo: require("./assets/logo_color.png"),
      isHidden: true,
      isActive: true
    };
  },
  methods: {
    init() {
      console.log("Let's Initiate the module repertory");
      this.$store.commit("initModuleRepertory");
      console.log("Let's Initiate the topic manager");
      this.$store.commit("initTopicManager");
      console.log("Let's add the fullscreen event handler");
      document.addEventListener(
        "fullscreenchange",
        this.setFullscreenFalse,
        false
      );
    },
    setFullscreenFalse() {
      if (!document.fullscreenElement) {
        console.log("We just quit fullscreen mode");
        this.$store.commit("setFullscreenFalse");
      }
    }
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    },
    isDark() {
      return this.$store.state.isDark;
    },
    isLeft() {
      return this.$store.state.isLeft;
    }
  }
};
</script>
<style>
@import "./assets/stylesheets/globalStyle.css";
</style>



