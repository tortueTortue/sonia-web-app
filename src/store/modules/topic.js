const state = {
    activeTopics: [
        { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true, "isDraggable": true, "isResizable": true }
    ],
    inactiveTopics: [
        { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false, "isDraggable": true, "isResizable": true }
    ],
    topicList: [
        { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "active": true, "isDraggable": true, "isResizable": true },
        { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", "active": false, "isDraggable": true, "isResizable": true },
        { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", "active": false, "isDraggable": true, "isResizable": true }
    ]
}

const mutations = {
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
    }
}

export default {
    state,
    mutations
}