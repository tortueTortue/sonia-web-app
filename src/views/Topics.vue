<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Topics page</h1>
        <h2 class="subtitle">Rostopic configurations (Currently displaying topic positions)</h2>
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
              <b-table :data="topicList" :columns="columns"></b-table>
            </p>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import ROSLIB from "../../node_modules/roslib";
import isObject from "util";

// ros.on("connection", function() {
//   console.log("Connected to websocket server.");
// });

// ros.on("error", function(error) {
//   console.log("Error connecting to websocket server: ", error);
// });

// ros.on("close", function() {
//   console.log("Connection to websocket server closed.");
// });

// cmdProviderThrusterEffort.subscribe(function(message) {
//   console.log(
//     "Received message from " +
//       cmdProviderThrusterEffort.name +
//       ": " +
//       JSON.stringify(message)
//   );

//   cmdProviderThrusterEffort.unsubscribe();
// });

export default {
  data: function() {
    return {
      ros: isObject,
      cmdProviderThrusterEffort: isObject,
      columns: [
        {
          field: "i",
          label: "Topic"
        },
        {
          field: "x",
          label: "X",
          width: "40",
          numeric: true
        },
        {
          field: "y",
          label: "Y",
          width: "40",
          numeric: true
        },
        {
          field: "w",
          label: "W",
          width: "40",
          numeric: true
        },
        {
          field: "h",
          label: "H",
          width: "40",
          numeric: true
        },
        {
          field: "active",
          label: "Active"
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
      const vm = this
      this.cmdProviderThrusterEffort = new ROSLIB.Topic({
        ros: vm.ros,
        name: "/provider_thruster/effort",
        messageType: "provider_thruster/ThrusterEffort",
        throttle_rate: 1000,
      });
      console.log(JSON.stringify(this.cmdProviderThrusterEffort));
    },
    connectToTopic() {
      const vm = this
      this.cmdProviderThrusterEffort.subscribe(function(message) {
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
    topicList() {
      return this.$store.state.moduleManager.topicList;
    }
  },
  created() {}
};
</script>

<style>
</style>