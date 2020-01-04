<template>
  <div>
    <module-header :moduleParams="moduleParams" />
    <component v-bind:is="moduleComponent"></component>
  </div>
</template>
<script>
import ModuleHeader from "./ModuleHeader.vue";

export default {
  name: "Module",
  props: { moduleParams: Object },
  methods: {},
  components: { ModuleHeader },
  computed: {
    // ** This section dynamically imports and renders a component
    moduleComponent: function() {
      if (this.moduleParams.active === true)
        return () =>
          import(`@/components/modules/${this.moduleParams.name}.vue`);
      return "";
    }
  }
};
</script>
<style>
</style>