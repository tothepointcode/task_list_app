import {
    OPEN_COLLECTION,
    CREATE_TASK,
    SET_ACTIVE_SCREEN
} from '../constants/types';

const initialState = {
    isLoading: false,
    theme: "dark",
    activeScreen: "Tasks",
    activeCollection: 0,
    activeTask: null,
    tasks: [
        {
            name: "Groceries",
            data: [
                {title: "Get some fish"},
                {title: "Salmon"},
                {title: "Brocoli"},
                {title: "Black pepper"}
            ]
        },
        {
            name: "Code Stuff",
            data: [
                {title: "Revision on java"},
                {title: "Finish portfolio website"},
                {title: "Push app to the app store"},
                {title: "Submit poly assignment"}
            ]
        }
    ]
}

const taskReducer = (state=initialState, action) => {
    const { type, payload } = action;
    const { activeCollection, tasks} = state;
    switch (type) {
        case OPEN_COLLECTION: {
            return {
                ...state,
                activeCollection: payload
            }
        }
        case SET_ACTIVE_SCREEN: {
            return {
                ...state,
                activeScreen: payload
            }
        }
        case CREATE_TASK: {
            if (tasks[activeCollection].name !== payload.name) {

                return {
                    ...state,
                    tasks: [
                        ...tasks,
                        {
                            name: payload.name,
                            data: [payload.data]
                        }
                    ],
                    activeCollection: tasks.length-1
                }
            } else {
                let newTaskList = [...tasks];
                newTaskList[activeCollection].data.push(payload.data);

                return {
                    ...state,
                    tasks: newTaskList
                }
            }
        }
        default: {
            return state
        }
    }
}

export default taskReducer;