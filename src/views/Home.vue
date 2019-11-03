<template>
  <div
    class="home window-height"
    :class="{'dark-mode': isDark,'div-full-width': isSidebarOpen, 'window-width': !isSidebarOpen,'is-10': isSidebarOpen,  'column':isSidebarOpen,'padding-null':isSidebarOpen}"
  >
    <grid-layout
      :layout.sync="activeTopics"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="false"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="topic in activeTopics"
        :x="topic.x"
        :y="topic.y"
        :w="topic.w"
        :h="topic.h"
        :i="topic.i"
        :key="topic.id"
        :isDraggable="topic.isDraggable"
        :isResizable="topic.isResizable"
        class="topic"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <module-header :topic="topic" />
        <TestModule />
      </grid-item>
    </grid-layout>
    <SoniaFooter name="sonia-footer"></SoniaFooter>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import ModuleX from "./../components/ModuleX.vue";
import SoniaFooter from "./../components/SoniaFooter.vue";
import TestModule from "./../components/TestModule.vue";
import ModuleHeader from "./../components/ModuleHeader.vue";

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
    },
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    SoniaFooter,
    TestModule,
    ModuleX,
    ModuleHeader
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
  border: 2px solid lightgray;
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

