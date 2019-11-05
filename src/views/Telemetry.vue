<template>
  <div>
    <section
      class="section no-padding"
      :class="{'dark-mode': isDark,'div-full-width': isSidebarOpen, 'window-width': !isSidebarOpen,'is-10': isSidebarOpen,  'column':isSidebarOpen,'padding-null':isSidebarOpen}"
    >
      <grid-layout
        :layout.sync="allTopics"
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
          :key="topic.i"
          :isDraggable="topic.isDraggable"
          :isResizable="topic.isResizable"
          class="topic"
          @resized="resizedEvent"
          @moved="movedEvent"
        >
          <Header :topic="topic" />
          <Thruster v-if="topic.contentName === 'Thruster'" />
        </grid-item>
      </grid-layout>
    </section>
    <section class="section no-padding fixed-bottom">
      <Footer />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Footer from '@/components/soniaModule/Footer.vue';
import Header from '@/components/soniaModule/Header.vue';
import Thruster from '@/components/soniaModule/content/Thruster.vue';
import VueGridLayout from 'vue-grid-layout';
import { TopicInformation } from './../types';

@Component({
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Footer,
    Header,
    Thruster,
  },
})
export default class Telemetry extends Vue {
  public killswitch() {
    alert('Death to the SUB');
  }
  public movedEvent(i: string, newX: number, newY: number) {
    this.$store.commit('setTopicPosition', {
      i,
      x: newX,
      y: newY,
    });
  }
  public resizedEvent(i: string, newH: number, newW: number) {
    this.$store.commit('setTopicSize', {
      i,
      h: newH,
      w: newW,
    });
  }
  get allTopics() {
    return this.$store.state.topic.topicList;
  }
  get activeTopics() {
    return this.$store.state.topic.topicList.filter((t: TopicInformation) => {
      return t.isActive && !t.isMinimized;
    });
  }
  get isDark() {
    return this.$store.state.isDark;
  }
  get isSidebarOpen() {
    return this.$store.state.isSidebarOpen;
  }
}
</script>

<style scoped>
.window-width {
  width: 100vw !important;
}
.topic {
  border: 2px solid lightgray;
  border-radius: 5px;
}
</style>
