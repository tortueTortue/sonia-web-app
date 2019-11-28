<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Thruster effort</h1>
        <h3 v-for="t in thrusterEfforts" :key="t.ID" >{{" id : " + t.ID + " effort : " + t.effort}}</h3>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "thruster-effort",
  data() {
    return {};
  },
  methods: {},
  computed: {
    thrusterEfforts() {
      return this.$store.state.topicManager.thrusterEfforts;
    }
  }
};
</script>
<style>
</style>