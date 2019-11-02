<template>
  <div>
    <nav class="level module-nav">
      <div class="level-left">
        <span class="text-small unselectable">Index: {{ topic.i }}</span>
      </div>
      <div class="level-right">
        <button
          @click="fixModule(topic)"
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

<script>
export default {
  props: ["topic"],
  methods: {
    minimizeModule: function(topic) {
      console.log("Minimize this module" + topic.i);
      this.$store.commit("setModuleStatus", {
        i: topic.i,
        active: !topic.active
      });
    },
    fixModule: function(topic) {
      console.log("Fix this module" + topic.i);
      topic.static = !topic.static;
      topic.isDraggable = !topic.isDraggable;
    }
  }
};
</script>

<style>
</style>