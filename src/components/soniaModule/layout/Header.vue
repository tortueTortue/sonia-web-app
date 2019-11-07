<template>
  <div>
    <nav class="level module-nav">
      <div class="level-left">
        <span class="text-small unselectable">Index: {{ topic.i }}</span>
      </div>
      <div class="level-right">
        <button
          @click="toggleDraggableModule(topic)"
          class="button is-success is-small is-very-small is-outlined"
        >
          <b-icon size="is-small" icon="anchor"></b-icon>
        </button>
        <button
          @click="minimizeModule(topic)"
          class="button is-warning is-small is-very-small is-outlined"
        >
          <b-icon size="is-small" icon="window-minimize"></b-icon>
        </button>
        <button class="button is-danger is-small is-very-small is-outlined">
          <b-icon size="is-small" icon="close"></b-icon>
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TopicInformation } from './../../../types';

@Component({
  props: ['topic'],
})
export default class Header extends Vue {
  public minimizeModule(topic: TopicInformation) {
    this.$store.commit('toggleMinimizeTopic', {
      i: topic.i,
      isMinimized: !topic.isMinimized,
    });
  }
  public toggleDraggableModule(topic: TopicInformation) {
    topic.isDraggable = !topic.isDraggable;
  }
}
</script>

<style scoped>
</style>
