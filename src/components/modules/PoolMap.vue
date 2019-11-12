<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Map</h1>
        <h2 class="title text-white"></h2>
        <h3 v-for="mod in activeModules" :key="mod.i" >{{mod.name + " id : " + mod.i}}</h3>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "PoolMap",
  data() {
    return {};
  },
  methods: {},
  computed: {
    activeModules() {
      return this.$store.state.moduleManager.activeModuleList.filter(mod => {
        return mod.active && !mod.isMinimized;
      });
    }
  }
};
</script>
<style>
</style>