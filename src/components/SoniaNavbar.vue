<template>
  <div
    class
    :class="{'is-10': isSidebarOpen, 'column':isSidebarOpen, 'padding-null':isSidebarOpen, 'div-full-width':isSidebarOpen}"
  >
    <b-navbar :class="{'dark-mode-navbar': isDark}">
      <template slot="brand">
        <b-navbar-item
          :class="{'hover-dark': isDark,'hover-light': !isDark}"
        >
          <img @click="toggleSideBar" :src=" !isDark ? darkLogo : lightLogo" alt="Sonia logo" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item
          :class="{'text-white': isDark}"
          tag="router-link"
          :to="{ name: 'home' }"
        >Telemetry</b-navbar-item>
        <b-navbar-item
          :class="{'text-white': isDark}"
          tag="router-link"
          :to="{ name: 'topics' }"
        >Topics</b-navbar-item>
        <b-navbar-dropdown :class="{'dark-mode-navbar': isDark}" label="Info">
          <b-navbar-item tag="router-link" :to="{ name: 'about' }">About</b-navbar-item>
          <b-navbar-item href="#">Contact (NOT DONE)</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
            <b-button
              @click="killswitch"
              :class="[isDark ? 'dark-mode-kill' : 'light-mode-kill', {'hidden' : !isKillswitchUp}]"
              class="level-right bold md-text-size"
            >
              <b-icon icon="skull"></b-icon>K I L L
              <b-icon icon="skull"></b-icon>
            </b-button>
            <b-button
              @click="toggleFullscreen"
              :class="isDark ? 'color-none' : 'light-color-none'"
              class="level-right bold md-text-size"
              v-if="!isKillswitchUp"
            >
              <b-icon v-if="!isFullscreen" icon="fullscreen"></b-icon>
              <b-icon v-else icon="fullscreen-exit"></b-icon>
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script >
export default {
  name: "sonia-navbar",
  data() {
    return {
      lightLogo: require("../assets/logo_white.png"),
      darkLogo: require("../assets/logo_color.png")
    };
  },
  methods: {
    toggleSideBar: function() {
      this.$store.commit("toggleSideBar");
    },
    promptKillswitchAlert() {
      this.$buefy.dialog.alert({
        title: "GAME OVER",
        message: "<b>The sub died...!</b>",
        confirmText: "Great!"
      });
    },
    killswitch: function() {
      this.promptKillswitchAlert();
    },
    toggleFullscreen() {
      this.$store.commit("setFullscreenTrue");
      document.getElementById('app').requestFullscreen();
    }
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    },
    isDark() {
      return this.$store.state.isDark;
    },
    isKillswitchUp() {
      return this.$store.state.isKillswitchUp;
    },
    isFullscreen() {
      return this.$store.state.isFullscreen;
    }
  }
};
</script>
<style scoped>
.dark-mode-navbar {
  background-color: #152642 !important;
  color: #fff !important;
}
</style>