import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moduleLayout: [
      { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0" },
      { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1" },
      { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2" },
      { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3" },
      { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4" }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
