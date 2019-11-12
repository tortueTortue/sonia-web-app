<template>
  <div
    ref="item"
    class="vue-grid-item color white-text"
    :style="style"
  >
    <nav class="level module-nav">
      <div class="level-left">
        <span class="text-small unselectable">{{name}}</span>
      </div>
      <div class="level-right">
        <button
          @click="fixModule(soniaMod)"
          class="button is-success is-small is-very-small is-outlined"
          :class="{'is-anchored':this.static}"
        >
          <b-icon size="is-small" icon="anchor"></b-icon>
        </button>
        <button
          @click="minimizeModule(soniaMod)"
          class="button is-warning is-small is-very-small is-outlined"
        >
          <b-icon size="is-small" icon="window-minimize"></b-icon>
        </button>
        <button class="button is-danger is-small is-very-small is-outlined">
          <b-icon size="is-small" icon="close"></b-icon>
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import VueGridLayout from "vue-grid-layout";

export default {
  extends: VueGridLayout.GridItem,
  props: {
    soniaMod: Object
  },
  data: function() {
    return {
      name: "sonia-module"
    };
  },
  methods: {
    minimizeModule: function(soniaMod) {
      console.log("Minimize this module" + soniaMod.i);
      this.$store.commit("setModuleStatus", {
        i: soniaMod.i,
        active: !soniaMod.active
      });
    },
    fixModule: function(soniaMod) {
      console.log("Fix this module" + soniaMod.i);
      soniaMod.static = !soniaMod.static;
      soniaMod.isDraggable = !soniaMod.isDraggable;
    }
  },
  computed: {
    activeTopics() {
      return this.$store.state.moduleManager.activeTopics;
    },
    inactiveTopics() {
      return this.$store.state.moduleManager.inactiveTopics;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  }
};
</script>

<style>
.module-window {
  border: 2px solid lightgray;
  border-radius: 5px;
}
.is-anchored {
  color: rgb(8, 104, 12) !important;
}
</style>