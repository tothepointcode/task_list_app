import {
    OPEN_COLLECTION,
    DELETE_COLLECTION,
    EDIT_COLLECTION,
    CREATE_COLLECTION,
    CREATE_TASK,
    DELETE_TASK,
    EDIT_TASK
} from '../constants/types';

export const openCollection = (navigation, index) => dispatch => {
    dispatch({
        type: OPEN_COLLECTION,
        payload: index
    })
    navigation.navigate('Tasks');
}

export const createCollection = details => dispatch => {
    dispatch({
        type: CREATE_COLLECTION,
        payload: details
    })
}

export const editCollection = (index, details) => dispatch => {
    dispatch({
        type: EDIT_COLLECTION,
        payload: {
            index,
            details
        }
    })
}

export const deleteCollection = index => dispatch => {
    dispatch({
        type: DELETE_COLLECTION,
        payload: index
    })
}

export const createTask = (details) => dispatch => {
    dispatch({
        type: CREATE_TASK,
        payload: details
    })
}

export const deleteTask = (title, index) => dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload: title
    })
}

export const editTask = (index, task) => dispatch => {
    dispatch({
        type: EDIT_TASK,
        payload: {
            index,
            task
        }
    })
}

