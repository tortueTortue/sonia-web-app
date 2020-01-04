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
            <b-slider :min="-100" type="is-danger" :value="t.effort"></b-slider>
          </b-field>
        </section>
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
    },
    isDark() {
      return this.$store.state.isDark;
    }
  }
};
</script>
<style>
</style>