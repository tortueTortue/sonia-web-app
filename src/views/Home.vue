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
        <nav class="level">
          <div class="level-left">
            <span>Index: {{ topic.i }}</span>
          </div>
          <div class="level-right">
            <button @click="minimizeTopic(topic)" class="button is-warning is-small is-outlined">
              <b-icon icon="window-minimize"></b-icon>
            </button>
            <button class="button is-danger is-small is-outlined">
              <b-icon icon="close"></b-icon>
            </button>
          </div>
        </nav>
      </grid-item>
    </grid-layout>
    <footer class="footer has-text-centered level">
      <button
        v-for="topic in inactiveTopics"
        :key="topic.id"
        @click="minimizeTopic(topic)"
        class="button is-dark is-small is-outlined"
      >
        Index: {{ topic.i }}
      </button>
      <b-button @click="killswitch" type="is-danger" class="level-right">K I L L</b-button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import VueGridLayout from "vue-grid-layout";
export default {
  name: "home",
  methods: {
    killswitch: function(){
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
    minimizeTopic: function(topic) {
      this.$store.commit("setTopicStatus", {
        i: topic.i,
        active: !topic.active
      });
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
</style>

