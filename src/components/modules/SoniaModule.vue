<template>
  <grid-item
    :x="moduleParam.x"
    :y="moduleParam.y"
    :w="moduleParam.w"
    :h="moduleParam.h"
    :i="moduleParam.i"
    :key="moduleParam.id"
    :isDraggable="moduleParam.isDraggable"
    :isResizable="moduleParam.isResizable"
    class="topic"
    @resized="resizedEvent"
    @moved="movedEvent"
  >
    <module-header :topic="moduleParam" />
  </grid-item>
</template>
<script>
import VueGridLayout from "vue-grid-layout";
import ModuleHeader from "./ModuleHeader.vue";

export default {
  name: "SoniaModule",
  props: { moduleParam: Object },
  components: {
    GridItem: VueGridLayout.GridItem,
    ModuleHeader
  },
  methods: {
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
  }
};
</script>
<style>
</style>