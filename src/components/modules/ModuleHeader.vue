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
          @click="minimizeModule(moduleParams.i)"
          class="button is-warning is-small is-very-small is-outlined"
        >
          <b-icon size="is-small" icon="window-minimize"></b-icon>
        </button>
        <button @click="closeModule(moduleParams.i)" class="button is-danger is-small is-very-small is-outlined">
          <b-icon size="is-small" icon="close"></b-icon>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "module-header",
  props: { moduleParams: Object },
  methods: {
    minimizeModule: function(id) {
      console.log("Minimize this module " + id);
      this.$store.commit("toggleMinizedModule", id);
    },
    fixModule: function(moduleParams) {
      console.log("Fix this module" + moduleParams.i);
      moduleParams.static = !moduleParams.static;
      moduleParams.isDraggable = !moduleParams.isDraggable;
    },
    closeModule(id) {
      console.log("Closing module of this id : " + (id-1));
      this.$store.commit("closeModule", id);
    }
  }
};
</script>

<style>
</style>