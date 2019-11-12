// TODO 1 : Refactor to use a map instead of arrays
// TODO 2 : Rename evything with topic to SoniaModule
// TODO 3 : Topic list (Eventually SoniaModuleList) is a list of the modules(id and name)
import axios from "axios";

const be_api_url = "http://localhost:8000";

const state = {
    activeModuleList: [],
    topicList: [
        { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false, "isDraggable": true, "isResizable": true }
    ],
    moduleRepertory: []
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
                state.moduleRepertory.forEach(mod => {
                    console.log("Module : " + mod.name + " ID : " + mod.id)
                    state.activeModuleList.push({
                        "x": 2,
                        "y": 1,
                        "w": 6,
                        "h": 6,
                        "i": mod.id,
                        "active": false,
                        "isDraggable": true,
                        "isResizable": true,
                        "isMinimized": false,
                        "name": mod.name
                    })
                })
                console.log("All the modules have been added to the list.")
                state.activeModuleList.forEach(m => console.log(" Active module : " + m.name + " id : " + m.i))
            })
            .catch(function(error) {
                console.log("There was an error during the instanciation of the module repertory : " + error);
            });
    },
    toggleModule(state, id) {
        id--;
        console.log("We are about to" + (state.activeModuleList[id].active ? " close " : " open ") + "this module: " + state.activeModuleList[id].name)
        state.activeModuleList[id].active = !(state.activeModuleList[id].active)
        console.log("Module successfully " + (state.activeModuleList[id].active ? "Opened" : "closed"))
    },
    closeModule(state, id) {
        id--;
        console.log("We are about to close this module: " + state.activeModuleList[id].name)
        state.activeModuleList[id].active = false
        console.log("Module successfully closed")
    },
    toggleMinizedModule(state, id) {
        id--;
        console.log("We are about to" + (state.activeModuleList[id].active ? " maximize " : " minimize ") + "this module: " + state.activeModuleList[id].name)
        state.activeModuleList[id].isMinimized = !(state.activeModuleList[id].isMinimized)
        console.log("Module successfully " + (state.activeModuleList[id].active ? "minimized." : "maximized."))
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