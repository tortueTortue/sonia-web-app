/**
 * This is the repertory of each topic infos. The repertory can be access or update (publish) a chosen topic.
 */
import ROSLIB from "../../../node_modules/roslib";

var ros;
var cmdProviderThrusterEffort;
var procNavigationOdom;
const rosServerHost = "ws://localhost:9090"
var thrusterEffortInfoHistory = [];

const state = {
    thrusterEfforts: [
        { "ID": 1, "Effort": -1000000 },
        { "ID": 2, "Effort": -1000000 },
        { "ID": 3, "Effort": -1000000 },
        { "ID": 4, "Effort": -1000000 },
        { "ID": 5, "Effort": -1000000 },
        { "ID": 6, "Effort": -1000000 },
        { "ID": 7, "Effort": -1000000 },
        { "ID": 8, "Effort": -1000000 }
    ],
    depthIndicatorValue: 0
}

const mutations = {
    initTopicManager() {
        console.log("Initializing topic manager.")
        initRos()
        initTopics()
        console.log("Topic manager started")
        console.log("Connecting to topics.")
        connectToTopic()
        console.log("Connected to topics!")
    },
    updateThrusterEffort(id, effort) {
        this.state.thrusterEfforts[id - 1] = effort
    }
}

function initRos() {
    console.log("Initializing the Ros client")
    ros = new ROSLIB.Ros({
        url: rosServerHost
    });
    console.log("Connected to Ros");
    console.log(JSON.stringify(ros));
}

function initTopics() {
    console.log("Creating topics")
    cmdProviderThrusterEffort = new ROSLIB.Topic({      
        ros: ros,
        name: "/provider_thruster/effort",
        messageType: "provider_thruster/ThrusterEffort",
        throttle_rate: 1000
    });
    procNavigationOdom = new ROSLIB.Topic({
        ros: ros,
        name: "/proc_navigation/odom",
        messageType: "/nav_msgs/Odometry",
        throttle_rate: 1000
    });
    console.log("Topics created");
    console.log(JSON.stringify(cmdProviderThrusterEffort));
    console.log(JSON.stringify(procNavigationOdom));
}

function connectToTopic() {
    cmdProviderThrusterEffort.subscribe(function (message) {
        console.log(
            "Connected to Topic : " + cmdProviderThrusterEffort.name
        );
        thrusterEffortInfoHistory[0] = message;
        state.thrusterEfforts.splice(parseInt(message.ID-1), 1, message)
        //state.thrusterEfforts[message.ID-1] = message;
        // Update the value in the store
        console.log(
            "Received message from " +
            cmdProviderThrusterEffort.name +
            ": " +
            JSON.stringify(message)
        );
    });
    procNavigationOdom.subscribe(function (message) {
        console.log(
            "Connected to Topic : " + procNavigationOdom.name
        );

        state.depthIndicatorValue = message.pose.pose.position.z;
        console.log(
            "Received depth indicator message from " +
            procNavigationOdom.name +
            ": " +
            JSON.stringify(state.depthIndicatorValue)
        );
    });
}

export default {
    state,
    mutations
}