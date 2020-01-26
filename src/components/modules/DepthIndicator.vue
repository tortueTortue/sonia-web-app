<template>
  <div>
    <section class="section padding-ver-null">
      <div class="container">
        <section>
          <b-field
            :class="{'text-white': isDark}"
            v-for="t in thrusterEfforts"
            :key="t.ID"
            :label="'T'+t.ID"
          >
          </b-field>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "depth-indicator",
  data() {
    return {};
  },
  methods: {},
  computed: {
    depthIndicator() {
      return this.$store.state.topicManager.depthIndicatorValue;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  }
};
</script>
<style>
</style>