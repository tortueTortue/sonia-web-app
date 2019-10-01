<template>
  <div class="home">
    <grid-layout
      :layout.sync="moduleLayout"
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
        v-for="item in moduleLayout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <nav class="level">
          <div class="level-left">
            <span>Index: {{ item.i }}</span>
          </div>
          <div class="level-right">
            <button class="button is-warning is-small is-outlined" >
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
  computed: {
    moduleLayout(){
      return this.$store.state.moduleLayout
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
};
</script>

