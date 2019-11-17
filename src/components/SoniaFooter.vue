<template>
  <footer
    :class="isDark? 'dark-mode-bottom-bar' : 'light-mode-bottom-bar'"
    class="footer has-text-centered level fixed-bottom"
  >
    <div class="level-left">
      <button
        v-for="mod in inactiveModules"
        :key="mod.i"
        @click="minimizeModule(mod.i)"
        class="button is-dark is-small is-outlined"
        :class="isDark ? 'mini-wid-dark-mode-kill' : 'mini-wid-light-mode-kill'"
      >Index: {{ mod.i }}<button class="button is-danger" @click="closeModule(mod.i)">x</button></button>
    </div>
    <div class="level-right">
      <b-button
        @click="killswitch"
        :class="[isDark ? 'dark-mode-kill' : 'light-mode-kill', {'hidden' : isKillswitchUp}]"
        class="bold md-text-size"
      >
        <b-icon icon="skull"></b-icon>K I L L
        <b-icon icon="skull"></b-icon>
      </b-button>
    </div>
  </footer>
</template>
<script >
export default {
  name: "sonia-footer",
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    killswitch: function() {
      this.promptKillswitchAlert();
    },
    minimizeModule: function(id) {
      console.log("Minimize this module " + id);
      this.$store.commit("toggleMinizedModule", id);
    },
    closeModule: function(id) {
      console.log("Minimize this module " + id);
      this.$store.commit("closeModule", id);
    },
    promptKillswitchAlert() {
      this.$buefy.dialog.alert({
        title: "GAME OVER",
        message: "<b>The sub died...!</b>",
        confirmText: "Great!"
      });
    }
  },
  computed: {
    inactiveModules() {
      return this.$store.state.moduleManager.activeModuleList.filter(mod => {
        return mod.active && mod.isMinimized;
      });
    },
    isDark() {
      return this.$store.state.isDark;
    },
    isKillswitchUp() {
      return this.$store.state.isKillswitchUp;
    }
  },
  components: {}
};
</script>
<style>
@import "../assets/stylesheets/footer.css";
</style>