<template>
  <div class="home window-size" :class="{'dark-mode': isDark}">
    <grid-layout
      :layout.sync="activeTopics"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="false"
      :margin="[2, 2]"
      :use-css-transforms="true"
    >
      <SoniaModule
        v-for="soniaMod in activeTopics"
        :x="soniaMod.x"
        :y="soniaMod.y"
        :w="soniaMod.w"
        :h="soniaMod.h"
        :i="soniaMod.i"
        :isDraggable="soniaMod.isDraggable"
        :isResizable="soniaMod.isResizable"
        class="module-window"
        :soniaMod="soniaMod"
        :key="soniaMod.i"
        name="sonia-module"
      ></SoniaModule>
    </grid-layout>
    <SoniaFooter name="sonia-footer"></SoniaFooter>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import SoniaFooter from "./../components/SoniaFooter.vue";
import SoniaModule from "./../components/SoniaModule.vue";

export default {
  name: "home",
  methods: {
    killswitch: function() {
      alert("Death to the SUB");
    },
    movedEvent: function(i, newX, newY) {
      this.$store.commit("setTopicPosition", {
        i: i,
        x: newX,
        y: newY
      });
    },
    resizedEvent: function(i, newH, newW) {
      this.$store.commit("setTopicSize", {
        i: i,
        h: newH,
        w: newW
      });
    }
  },
  computed: {
    activeTopics() {
      return this.$store.state.topic.activeTopics;
    },
    inactiveTopics() {
      return this.$store.state.topic.inactiveTopics;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    SoniaFooter,
    SoniaModule
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
.window-size {
  height: calc(100vh - 90px) !important;
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
</style>

