<template>
  <div>
    <section>
      <v-stage :config="configKonva">
        <v-layer>
          <v-circle :config="configCircle"></v-circle>
        </v-layer>
      </v-stage>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Map</h1>
        <h2 class="title text-white"></h2>
        <h3 v-for="mod in activeModules" :key="mod.i">{{mod.name + " id : " + mod.i}}</h3>
      </div>
    </section>
  </div>
</template>
<script>
const width = window.innerWidth;
const height = window.innerHeight;
export default {
  name: "PoolMap",
  data() {
    return {
      configKonva: {
        width: 200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      }
    };
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