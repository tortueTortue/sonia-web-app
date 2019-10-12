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
        <nav class="level module-nav">
          <div class="level-left">
            <span class="text-small unselectable">Index: {{ topic.i }}</span>
          </div>
          <div class="level-right">
            <button @click="fixModule(topic)" class="button is-success is-small is-very-small is-outlined">
              <b-icon size="is-small" icon="anchor"></b-icon>
            </button>
            <button @click="minimizeModule(topic)" class="button is-warning is-small is-very-small is-outlined">
              <b-icon size="is-small" icon="window-minimize"></b-icon>
            </button>
            <button class="button is-danger is-small is-very-small is-outlined">
              <b-icon size="is-small" icon="close"></b-icon>
            </button>
          </div>
        </nav>
      </grid-item>
    </grid-layout>
    <SoniaFooter name="sonia-footer"></SoniaFooter>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import SoniaFooter from "./../components/SoniaFooter.vue";

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
    },
    minimizeModule: function(topic) {
      console.log("Minimize this module"+topic.i)
      this.$store.commit("setModuleStatus", {
        i: topic.i,
        active: !topic.active
      });
    },
    fixModule: function(topic) {
      console.log("Fix this module"+topic.i)
      topic.static = !topic.static;
      topic.isDraggable = !topic.isDraggable;
    }
  },
  computed: {
    activeTopics() {
      return this.$store.state.topic.activeTopics;
    },
    inactiveTopics() {
      return this.$store.state.topic.inactiveTopics;
    },
    isDark(){
      return this.$store.state.isDark;
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    SoniaFooter
  }
};
</script>

<style>
.unselectable{
  -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
}
.fixed-bottom{
  position: fixed;
  bottom: 0;
}
.window-size{
  height: calc(100vh - 90px)!important;
  width: 100vw!important;
}
.is-very-small{
  height: 18px!important;
  width: 18px!important;
  padding: 0!important;
}
.text-small{
  font-size: 0.8rem!important;
}
.topic {
  border: 2px solid lightgray;
  border-radius: 5px;
}
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px!important;
  padding: 5px 5px 5px 5px !important;
  text-align: center;
}
.bold{
  font-weight: 900;
}
.md-text-size{
  font-size: 1.2rem!important;
  line-height: 140%!important;
}
</style>

