import { TopicState } from './../../types';

const state: TopicState = {
    topicList: [{
        x: 0,
        y: 0,
        w: 5,
        h: 10,
        i: '0',
        isActive: true,
        isMinimized: false,
        isDraggable: true,
        isResizable: true,
        contentName: 'Thruster',
    },
    {
        x: 2,
        y: 1,
        w: 2,
        h: 4,
        i: '1',
        isActive: true,
        isMinimized: true,
        isDraggable: true,
        isResizable: true,
        contentName: 'Console',
    },
    {
        x: 4,
        y: 2,
        w: 2,
        h: 5,
        i: '2',
        isActive: true,
        isMinimized: true,
        isDraggable: true,
        isResizable: true,
        contentName: 'Missions',
    },
    {
        x: 6,
        y: 3,
        w: 2,
        h: 3,
        i: '3',
        isActive: true,
        isMinimized: true,
        isDraggable: true,
        isResizable: true,
        contentName: 'Simulation',
    },
    {
        x: 8,
        y: 2,
        w: 2,
        h: 3,
        i: '4',
        isActive: true,
        isMinimized: false,
        isDraggable: true,
        isResizable: true,
        contentName: 'Map',
    }],
};

// TODO : Add axios mutations
const mutations = {
    setTopicPosition(state: TopicState, payload: any) {
        state.topicList.forEach((item, index) => {
            if (item.i === payload.i) {
                state.topicList[index].x = payload.x;
                state.topicList[index].y = payload.y;
            }
        });
    },
    setTopicSize(state: TopicState, payload: any) {
        state.topicList.forEach((item, index) => {
            if (item.i === payload.i) {
                state.topicList[index].h = payload.h;
                state.topicList[index].w = payload.w;
            }
        });
    },
    toggleMinimizeTopic(state: TopicState, payload: any) {
        state.topicList.forEach((item, index) => {
            if (item.i === payload.i) {
                state.topicList[index].isMinimized = payload.isMinimized;
            }
        });
    },
};

export default {
    state,
    mutations,
};
