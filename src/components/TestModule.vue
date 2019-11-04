<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Test module</h1>
        <h2 class="title text-white">{{lastThrusterInfo()[0]}}</h2>
        <p>
          <b-table :data="lastThrusterInfo()" :columns="columns"></b-table>
        </p>
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
      thrusterEffortInfoHistory: [{ effort: 0 }],
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
  beforeMount: {
    init() {
      this.connectToRos();
      this.createTopic();
      this.connectToTopic();
    }
  },
  methods: {
    connectToRos() {
      this.ros = new ROSLIB.Ros({
        url: "ws://localhost:9090"
      });
      console.log("Connected to Ros");
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
      console.log("Topic created");
      console.log(JSON.stringify(this.cmdProviderThrusterEffort));
    },
    connectToTopic() {
      const vm = this;
      this.cmdProviderThrusterEffort.subscribe(function(message) {
        console.log(
          "Connected to Topic : " + vm.cmdProviderThrusterEffort.name
        );
        vm.thrusterEffortInfoHistory[0] = message;
        // Update the value in the store
        this.$store.commit("updateThrusterEffort", message.ID, message.Effort);
        console.log("HISTORY 0 : " + vm.thrusterEffortInfoHistory[0].effort);
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
    },
    lastThrusterInfo() {
      return this.$store.state.topics.thrusterEfforts;
    }
  }
};
</script>
<style>
</style>