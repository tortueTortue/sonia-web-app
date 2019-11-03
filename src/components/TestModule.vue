<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Test module</h1>
        <h2 class="title text-white">{{thrusterEffortInfoHistory[0].effort}}</h2>
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <b-button type="is-light" @click="connectToRos">Connect to Ros</b-button>
              <b-button type="is-light" @click="createTopic">Create topic test</b-button>
              <b-button type="is-light" @click="connectToTopic">Connect to topic test</b-button>
            </div>
          </div>
          <!-- Right side -->
          <div class="level-right">
            <p class="level-item">
              <b-table :data="thrusterEffortInfoHistory" :columns="columns"></b-table>
            </p>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>
<script>
import ROSLIB from "../../node_modules/roslib";

export default {
  name: "test-module",
  data() {
    return {
      ros: Object,
      cmdProviderThrusterEffort: Object,
      thrusterEffortInfoHistory: [{effort:0}],
      columns: [
        {
          field: "ID",
          label: "Id",
          width: "40",
          numeric: true
        },
        {
          field: "effort",
          label: "Effort",
          width: "40",
          numeric: true
        }
      ]
    };
  },
  methods: {
    connectToRos() {
      this.ros = new ROSLIB.Ros({
        url: "ws://localhost:9090"
      });
      console.log(JSON.stringify(this.ros));
    },
    createTopic() {
      const vm = this;
      this.cmdProviderThrusterEffort = new ROSLIB.Topic({
        ros: vm.ros,
        name: "/provider_thruster/effort",
        messageType: "provider_thruster/ThrusterEffort",
        throttle_rate: 1000
      });
      console.log(JSON.stringify(this.cmdProviderThrusterEffort));
    },
    connectToTopic() {
      const vm = this;
      this.cmdProviderThrusterEffort.subscribe(function(message) {
        vm.thrusterEffortInfoHistory[0] = message
        console.log("HISTORY 0 : "+vm.thrusterEffortInfoHistory[0].effort)
        console.log(
          "Received message from " +
            vm.cmdProviderThrusterEffort.name +
            ": " +
            JSON.stringify(message)
        );
      });

    }
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    }, lastThrusterInfo() {
        return this.$store.st
    }
  }
};
</script>
<style>
</style>