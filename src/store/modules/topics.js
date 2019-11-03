// TODO 1 : Refactor to use a map instead of arrays
// TODO 2 : Rename evything with topic to SoniaModule
// TODO 3 : Topic list (Eventually SoniaModuleList) is a list of the modules(id and name)
import axios from "axios";

const state = {
    thrusterEfforts: [
        { "ID": 1, "Effort": 0},
        { "ID": 2, "Effort": 0},
        { "ID": 3, "Effort": 0},
        { "ID": 4, "Effort": 0},
        { "ID": 5, "Effort": 0},
        { "ID": 6, "Effort": 0},
        { "ID": 7, "Effort": 0},
        { "ID": 8, "Effort": 0}
    ]
}

const mutations = {
}

export default {
    state,
    mutations
}