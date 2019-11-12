<template>
  <div>
    <module-header :moduleParams="moduleParams" />
    <component v-bind:is="moduleComponent"></component>
  </div>
</template>
<script>
import ModuleHeader from "./ModuleHeader.vue";
import DummyModule from "./DummyModule.vue";

export default {
  name: "Module",
  props: { moduleParams: Object },
  components: {
    ModuleHeader,
    DummyModule
  },
  methods: {},
  computed: {
    // ** This section dynamically imports and renders a component
    moduleComponent: function() {
      return () => import(`@/components/modules/${this.moduleParams.name}.vue`);
    }
  }
};
</script>
<style>
</style>