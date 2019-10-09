<template>
  <div class="home">
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
        class="topic"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <nav class="level module-nav">
          <div class="level-left">
            <span class="text-small">Index: {{ topic.i }}</span>
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
    <footer class="footer has-text-centered level">
      <button
        v-for="topic in inactiveTopics"
        :key="topic.id"
        @click="minimizeModule(topic)"
        class="button is-dark is-small is-outlined"
      >
        Index: {{ topic.i }}
      </button>
      <b-button @click="killswitch" type="is-danger" class="level-right bold md-text-size"><b-icon icon="skull"></b-icon> K I L L <b-icon icon="skull"></b-icon></b-button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import VueGridLayout from "vue-grid-layout";
export default {
  name: "home",
  props:{
    isDark : {
      type : Boolean,
    }
  },
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
      topic.static = !topic.static
      topic.isDragable = !topic.isDragable
    }
  },
  computed: {
    activeTopics() {
      return this.$store.state.topic.activeTopics;
    },
    inactiveTopics() {
      return this.$store.state.topic.inactiveTopics;
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
};
</script>

<style>
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
  height: 10px;
  padding: 1rem 2rem 2rem 2rem !important;
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

