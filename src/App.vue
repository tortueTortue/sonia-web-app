<template>
  <div class="columns is-gapless margin-down-null height-full-screen">
    <Sidebar class="sidebar"></Sidebar>
    <div class="column">
      <SoniaNavbar name="sonia-navbar"></SoniaNavbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SoniaNavbar from "./components/SoniaNavbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
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
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  }
};
</script>
<style>
html{
  overflow: hidden!important;
}
.hover-dark:hover {
  background-color: rgb(3, 16, 32) !important;
}
.hover-light:hover {
  background-color: rgb(164, 216, 247) !important;
}
.hidden {
  display: none !important;
  transition: display 0.5s ease;
}
.blue {
  background-color: #081b33 !important;
}
.dark-mode {
  background-color: #081b33 !important;
  color: #fff !important;
}
.dark-mode a{
  color: #fff !important;
}
.dark-mode a:hover{
  color: rgb(0, 0, 0) !important;
}
.dark-mode-bottom-bar {
  background: #2f4562 !important;
}
#text-white {
  color: #fff !important;
}
.text-white {
  color: #fff !important;
}
.text-white:hover {
  color: #000000 !important;
}
label.text-white {
  color: #fff;
}
ul.sidebar {
  list-style: none !important;
}
.sidebar {
  font-size: 1.2rem !important;
}
.sidebar-container {
  height: calc(100vh - 50px) !important;
  transition: width 1s ease-in-out 0.5s !important;
}
.margin-down-null {
  margin-bottom: 0% !important;
}
.height-full-screen {
  height: calc(100vh - 50px) !important;
}
</style>



