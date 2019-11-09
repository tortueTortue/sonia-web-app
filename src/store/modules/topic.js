// TODO 1 : Refactor to use a map instead of arrays
// TODO 2 : Rename evything with topic to SoniaModule
// TODO 3 : Topic list (Eventually SoniaModuleList) is a list of the modules(id and name)
import axios from "axios";

const be_api_url = "http://localhost:8000";

const state = {
    activeTopics: [
        { "x": 0, "y": 0, "w": 5, "h": 10, "i": "0", "active": true, "isDraggable": true, "isResizable": true, "name": "Map" }
    ],
    inactiveTopics: [
        { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true, "isDraggable": true, "isResizable": true }
    ],
    topicList: [
        { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false, "isDraggable": true, "isResizable": true }
    ],
    moduleRepertory: [],
    inactiveModules: new Map(),
    activeModules: new Map()
}

const mutations = {
    initModuleRepertory() {
        axios
            .get(be_api_url + "/api/moduleName/")
            .then(response => {
                console.log("Response : " + response.data);
                state.moduleRepertory = response.data || "";
                console.log("Module repertory successfully initiated");
                console.log("Here are the modules available : ");
                for (module of state.moduleRepertory) {
                    console.log(module.name)
                }
            })
            .catch(function(error) {
                console.log("There was an error during the initiation of the module repertory" + error);
            });
    },
    setTopicPosition(state, payload) {
        state.topicList.forEach(function(item, index) {
            if (item.i == payload.i) {
                state.topicList[index].x = payload.x
                state.topicList[index].y = payload.y
            }
        })
    },
    setTopicSize(state, payload) {
        state.topicList.forEach(function(item, index) {
            if (item.i == payload.i) {
                state.topicList[index].h = payload.h
                state.topicList[index].w = payload.w
            }
        })
    },
    //Toggles active status
    setModuleStatus(state, payload) {
        var inactiveList = []
        var activeList = []

        state.topicList.forEach(function(item, index) {
            if (item.i == payload.i) {
                state.topicList[index].active = payload.active
            }
        })
        state.topicList.forEach(function(item) {
            if (item.active) {
                activeList.push(item);
            } else {
                inactiveList.push(item);
            }
        })
        state.activeTopics = activeList
        state.inactiveTopics = inactiveList
    },
    closeSoniaModule(id) {
        this.inactiveModules.delete(id)
        this.activeModules.delete(id)
    },
    loadLayout(modules) {
        modules.forEach(module => {
            module.active ? this.activeModules.set(module.id, module) : this.inactiveModules.set(module.id, module)
        })
    }
}

export default {
    state,
    mutations
}