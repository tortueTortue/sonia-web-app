<template>
  <footer
    :class="isDark? 'dark-mode-bottom-bar' : 'light-mode-bottom-bar'"
    class="footer has-text-centered level fixed-bottom"
  >
    <button
      v-for="mod in inactiveModules"
      :key="mod.i"
      @click="minimizeModule(mod.i)"
      class="button is-dark is-small is-outlined"
      :class="isDark ? 'mini-wid-dark-mode-kill' : 'mini-wid-light-mode-kill'"
    >Index: {{ mod.i }}</button>

    <b-button
      @click="killswitch"
      :class="[isDark ? 'dark-mode-kill' : 'light-mode-kill', {'hidden' : isKillswitchUp}]"
      class="level-right bold md-text-size"
    >
      <b-icon icon="skull"></b-icon>K I L L
      <b-icon icon="skull"></b-icon>
    </b-button>
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
.mini-wid-dark-mode-kill {
  background-color: #fff !important;
  border-color: #fff !important;
  font-weight: 700 !important;
  color: #081b33 !important;
  transition: ease 0.3s;
}
.mini-wid-dark-mode-kill:hover {
  background-color: #174885 !important;
  border-color: #174885 !important;
  font-weight: 700 !important;
  color: #e0e9f5 !important;
}
.mini-wid-light-mode-kill {
  background-color: #183b66 !important;
  border-color: #183b66 !important;
  font-weight: 700 !important;
  color: #fff !important;
  transition: ease 0.3s;
}
.mini-wid-light-mode-kill:hover {
  background-color: #174885 !important;
  border-color: #174885 !important;
  font-weight: 700 !important;
  color: #e0e9f5 !important;
}
.light-mode-kill {
  background-color: #e01e1e !important;
  color: rgb(250, 242, 242) !important;
  transition: ease 0.3s;
}
.light-mode-kill:hover {
  background-color: #750a0a !important;
  color: #140606 !important;
}
.dark-mode-kill {
  background-color: #fff !important;
  color: #720606 !important;
  transition: ease 0.3s;
}
.dark-mode-kill:hover {
  background-color: #250b0b !important;
  border-color: #250b0b !important;
  color: #f3d0d0 !important;
}
.dark-mode-bottom-bar {
  background: #2f4562 !important;
}
.light-mode-bottom-bar {
  background-color: rgb(241, 241, 241) !important;
}
</style>