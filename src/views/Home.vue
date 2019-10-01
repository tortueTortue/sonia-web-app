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
        v-for="item in activeModules"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.id"
        class="module"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <nav class="level">
          <div class="level-left">
            <span>Index: {{ item.i }}</span>
          </div>
          <div class="level-right">
            <button class="button is-warning is-small is-outlined">
              <!-- TODO: Find another white icon for minimize -->
              <b-icon icon="window-minimize"></b-icon>
            </button>
            <button class="button is-danger is-small is-outlined">
              <b-icon icon="close"></b-icon>
            </button>
          </div>
        </nav>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import VueGridLayout from "vue-grid-layout";
export default {
  name: "home",
  methods: {
    movedEvent: function(i, newX, newY){
      this.$store.commit('setModulePosition', 
      {
        i: i,
        x: newX,
        y: newY
      })
    },
    resizedEvent: function(i, newH, newW, newHPx, newWPx){
      this.$store.commit('setModuleSize', 
      {
        i: i,
        h: newH,
        w: newW
      })
    },
  },
  computed: {
    activeModules() {
      return this.$store.state.activeModules;
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
</style>

