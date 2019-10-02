import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeModules: [
      { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "active": true },
      { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true }
    ],
    inactiveModules: [
      { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false },
      { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false },
      { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false }
    ],
    moduleList: [
      { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "active": true },
      { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true },
      { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false },
      { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false },
      { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false }
    ]
  },
  mutations: {
    setModulePosition(state, payload) {
      state.moduleList.forEach(function (item, index) {
        if (item.i == payload.i) {
          state.moduleList[index].x = payload.x
          state.moduleList[index].y = payload.y
        }
      })
    },
    setModuleSize(state, payload) {
      state.moduleList.forEach(function (item, index) {
        if (item.i == payload.i) {
          state.moduleList[index].h = payload.h
          state.moduleList[index].w = payload.w
        }
      })
    },
    //Toggles active status
    setModuleStatus(state, payload) {
      var inactiveList = []
      var activeList = []
      
      state.moduleList.forEach(function (item, index) {
        if (item.i == payload.i) {
          state.moduleList[index].active = payload.active
        }
      })
      state.moduleList.forEach(function (item) {
        if(item.active){
          activeList.push(item);
        } 
        else {
          inactiveList.push(item);
        }
      })
      state.activeModules = activeList
      state.inactiveModules = inactiveList

    }
  },
  actions: {

  }
})
