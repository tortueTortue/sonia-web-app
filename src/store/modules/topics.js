/**
 * This is the repertory of each topic infos. The repertory can be access or update (publish) a chosen topic.
 */
// TODO Create the ROS Client here so that there's only one instance.
import axios from "axios";

const state = {
    thrusterEfforts: [
        { "ID": 1, "Effort": -1000000},
        { "ID": 2, "Effort": -1000000},
        { "ID": 3, "Effort": -1000000},
        { "ID": 4, "Effort": -1000000},
        { "ID": 5, "Effort": -1000000},
        { "ID": 6, "Effort": -1000000},
        { "ID": 7, "Effort": -1000000},
        { "ID": 8, "Effort": -1000000}
    ]
}

const mutations = {
    updateThrusterEffort(id, effort){
        this.thrusterEfforts[id-1] = effort
    }
}

export default {
    state,
    mutations
}