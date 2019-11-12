// TODO 2 : Rename evything with topic to SoniaModule
// TODO 3 : Topic list (Eventually SoniaModuleList) is a list of the modules(id and name)
import axios from "axios";

const be_api_url = "http://localhost:8000";

const state = {
    activeModuleList: [],
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
                        "static": false,
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
    },
    async saveLayout(state, layoutName) {
        var layoutId
            // Saving the layout name
        axios
            .post(be_api_url + "/api/layout/", {
                name: layoutName
            })
            .then(response => {
                console.log("Response : " + response);
                layoutId = response.data.id
                console.log("The layout name has been saved. Id : " + layoutId);

                // Saving the modules
                state.activeModuleList.forEach(mod => {
                    console.log("Where are inside the foreach and this is the id : " + layoutId)
                    axios
                        .post(be_api_url + "/api/module/", {
                            name: mod.i,
                            x: mod.x,
                            y: mod.y,
                            w: mod.w,
                            h: mod.h,
                            active: mod.active,
                            isDraggable: mod.isDraggable,
                            isResizable: mod.isResizable,
                            isMinimized: mod.isMinimized,
                            static: mod.static,
                            belongsToLayout: layoutId
                        })
                        .then(response => {
                            console.log("Response : " + response);
                            console.log("This module has been added : " + response.data.name);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                });
            })
            .catch(function(error) {
                console.log(error);
            });

    }
}

export default {
    state,
    mutations
}