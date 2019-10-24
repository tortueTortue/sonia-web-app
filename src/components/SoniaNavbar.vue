<template>
  <div
    class
    :class="{'is-10': isSidebarOpen, 'column':isSidebarOpen, 'padding-null':isSidebarOpen, 'div-full-width':isSidebarOpen}"
  >
    <b-navbar :class="{'dark-mode-navbar': isDark}">
      <template slot="brand">
        <b-navbar-item
          :class="{'hover-dark': isDark,'hover-light': !isDark}"
          tag="router-link"
          :to="{ path: '/' }"
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
            <a class="button is-dark" @click="toggleDarkMode">
              <strong>Dark Mode</strong>
            </a>
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
    toggleDarkMode: function() {
      this.$store.commit("toggleDarkMode");
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