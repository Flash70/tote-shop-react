import {toteShopAPI} from '../api/api';


const ADD_MESSAGE = 'ADD_MESSAGE';

export const contact = (state = {}, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                state: action.payload,
            };
        default:
            return state;
    }
};


const setIsContact = (value) => ({type: ADD_MESSAGE, payload: value});

export const setContactItem = (value) => async (dispatch) => {
    dispatch(setIsContact(value));
    await toteShopAPI.setContact(value);
};