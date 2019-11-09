<template>
  <div>
    <module-header :moduleParams="moduleParams" />
    <DummyModule/>
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
  methods: {}
};
</script>
<style>
</style>