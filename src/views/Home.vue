<template>
  <div class="home">
    <grid-layout
      :layout.sync="activeModules"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="module in activeModules"
        :x="module.x"
        :y="module.y"
        :w="module.w"
        :h="module.h"
        :i="module.i"
        :key="module.id"
        class="module"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <nav class="level">
          <div class="level-left">
            <span>Index: {{ module.i }}</span>
          </div>
          <div class="level-right">
            <button @click="minimizeModule(module)" class="button is-warning is-small is-outlined">
              <b-icon icon="window-minimize"></b-icon>
            </button>
            <button class="button is-danger is-small is-outlined">
              <b-icon icon="close"></b-icon>
            </button>
          </div>
        </nav>
      </grid-item>
    </grid-layout>
    <footer class="footer has-text-centered">
      <button
        v-for="module in inactiveModules"
        :key="module.id"
        @click="minimizeModule(module)"
        class="button is-warning is-small is-outlined"
      >
        <b-icon icon="window-minimize"></b-icon>
      </button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import VueGridLayout from "vue-grid-layout";
export default {
  name: "home",
  methods: {
    movedEvent: function(i, newX, newY) {
      this.$store.commit("setModulePosition", {
        i: i,
        x: newX,
        y: newY
      });
    },
    resizedEvent: function(i, newH, newW) {
      this.$store.commit("setModuleSize", {
        i: i,
        h: newH,
        w: newW
      });
    },
    //TODO: Make a mixin to be DRY
    minimizeModule: function(module) {
      this.$store.commit("setModuleStatus", {
        i: module.i,
        active: !module.active
      });
    }
  },
  computed: {
    activeModules() {
      return this.$store.state.activeModules;
    },
    inactiveModules() {
      return this.$store.state.inactiveModules;
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
};
</script>

<style>
.module {
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

