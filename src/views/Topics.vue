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
              <div class="level-item">
                <form @submit="createTopic">
                  <b-field label="Name">
                    <b-input v-model="name"></b-input>
                  </b-field>
                  <b-field label="MessageType">
                    <b-input v-model="messageType"></b-input>
                  </b-field>
                  <b-field label="ThrottleRate">
                    <b-input v-model="throttleRate"></b-input>
                  </b-field>
                  <b-button tag="input" value="submit" type="is-light" @click="createTopic">Create topic test</b-button>
                </form>
              </div>
              <!-- <b-button type="is-light" @click="createTopic">Create topic test</b-button> -->
              <!-- <b-button type="is-light" @click="connectToTopic">Connect to topic test</b-button> -->
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

export default {
  data: function() {
    return {
      name: "/provider_thruster/thruster_effort",
      messageType: "provider_thruster/ThrusterEffort",
      throttleRate: 200,
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
      const vm = this;
      this.cmdProviderThrusterEffort = new ROSLIB.Topic({
        ros: vm.ros,
        name: vm.name,
        messageType: vm.messageType,
        throttle_rate: vm.throttleRate
      });
      console.log(
        "created new instance of topic: " + 
        JSON.stringify(
          this.cmdProviderThrusterEffort.name
        )
      );
      this.connectToTopic();
    },
    connectToTopic() {
      const vm = this;
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
      return this.$store.state.topic.topicList;
    }
  },
  created() {}
};
</script>

<style>
</style>