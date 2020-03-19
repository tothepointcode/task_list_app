import {
    OPEN_COLLECTION,
    CREATE_TASK,
    SET_ACTIVE_SCREEN
} from '../constants/types';

export const openCollection = (navigation, index) => dispatch => {
    dispatch({
        type: OPEN_COLLECTION,
        payload: index
    })
    navigation.navigate('Tasks');
}

export const setActiveScreen = screen => dispatch => {
    console.log("called" , screen);
    dispatch({
        type: SET_ACTIVE_SCREEN,
        payload: screen
    })
}

export const createTask = (details) => dispatch => {
    dispatch({
        type: CREATE_TASK,
        payload: details
    })
}

