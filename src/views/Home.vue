<template>
  <div
    class="home window-height"
    :class="{'dark-mode': isDark,'div-full-width': isSidebarOpen, 'window-width': !isSidebarOpen,'is-10': isSidebarOpen,  'column':isSidebarOpen,'padding-null':isSidebarOpen}"
  >
    <grid-layout
      :layout.sync="modules"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="false"
      :margin="[2, 2]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="mod in activeModules"
        :x="mod.x"
        :y="mod.y"
        :w="mod.w"
        :h="mod.h"
        :i="mod.i"
        :key="mod.i"
        :isDraggable="mod.isDraggable"
        :isResizable="mod.isResizable"
        class="topic"
      >
        <Module :moduleParams="mod" />
      </grid-item>
    </grid-layout>
    <SoniaFooter name="sonia-footer"></SoniaFooter>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import SoniaFooter from "./../components/SoniaFooter.vue";
import Module from "./../components/modules/Module.vue";

export default {
  name: "home",
  methods: {
    killswitch: function() {
      alert("Death to the SUB");
    }
  },
  beforeMount: function() {
      console.log("Let's reset the module repertory");
      this.$store.commit("initModuleRepertory");
  },
  computed: {
    activeTopics() {
      return this.$store.state.moduleManager.activeTopics;
    },
    modules() {
      return this.$store.state.moduleManager.activeModuleList;
    },
    activeModules() {
      return this.$store.state.moduleManager.activeModuleList.filter(mod => {
        return mod.active && !mod.isMinimized;
      });
    },
    inactiveTopics() {
      return this.$store.state.moduleManager.inactiveTopics;
    },
    isDark() {
      return this.$store.state.isDark;
    },
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    SoniaFooter,
    Module
  }
};
</script>
<style>
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
}
.window-height {
  height: calc(100vh - 90px) !important;
}
.window-width {
  width: 100vw !important;
}
.is-very-small {
  height: 18px !important;
  width: 18px !important;
  padding: 0 !important;
}
.text-small {
  font-size: 0.8rem !important;
}
.topic {
  border: 1.5px solid lightgray;
  border-radius: 5px;
}
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px !important;
  padding: 5px 5px 5px 5px !important;
  text-align: center;
}
.bold {
  font-weight: 900;
}
.md-text-size {
  font-size: 1.2rem !important;
  line-height: 140% !important;
}
.scroll-y {
  overflow-y: scroll !important;
}
</style>

