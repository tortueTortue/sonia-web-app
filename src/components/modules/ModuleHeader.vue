<template>
  <div>
    <nav class="level module-nav">
      <div class="level-left">
        <span class="text-small unselectable"> {{ moduleParams.name }}</span>
      </div>
      <div class="level-right">
        <button
          @click="fixModule(moduleParams)"
          class="button is-success is-small is-very-small is-outlined"
        >
          <b-icon size="is-small" icon="anchor"></b-icon>
        </button>
        <button
          @click="minimizeModule(moduleParams)"
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
  props: { moduleParams: Object },
  methods: {
    minimizeModule: function(moduleParams) {
      console.log("Minimize this module" + moduleParams.i);
      this.$store.commit("setModuleStatus", {
        i: moduleParams.i,
        active: !moduleParams.active
      });
    },
    fixModule: function(moduleParams) {
      console.log("Fix this module" + moduleParams.i);
      moduleParams.static = !moduleParams.static;
      moduleParams.isDraggable = !moduleParams.isDraggable;
    }
  }
};
</script>

<style>
</style>