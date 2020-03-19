import {
    OPEN_COLLECTION,
    DELETE_COLLECTION,
    EDIT_COLLECTION,
    CREATE_COLLECTION,
    CREATE_TASK,
    DELETE_TASK,
    EDIT_TASK
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
        case CREATE_COLLECTION: {
            return { 
                ...state,
                tasks: [...tasks, {name: payload, data: []}]
            }
        }
        case DELETE_COLLECTION: {
            return {
                ...state,
                tasks: [...tasks.filter((item, index) => {return index !== payload })]
            }
        }
        case EDIT_COLLECTION: {
            let taskList = [...tasks];
            taskList[payload.index].name = payload.details
            return {
                ...state,
                tasks: taskList
            }
        }
        case CREATE_TASK: {
            let newTaskList = [...tasks];
            newTaskList[activeCollection].data.push(payload.data);

            return {
                ...state,
                tasks: newTaskList
            }
        }
        case DELETE_TASK: {
            const data = [...tasks[activeCollection].data.filter((item) => { return item.title !== payload})]

            let newTaskList = [...tasks];
            newTaskList[activeCollection].data = data;

            return { 
                ...state,
                tasks: newTaskList
            }
        }
        case EDIT_TASK: {
            let taskList = [...tasks];
            taskList[activeCollection].data[payload.index].title = payload.task
            return {
                ...state,
                tasks: taskList
            }
        }
        default: {
            return state
        }
    }
}

export default taskReducer;