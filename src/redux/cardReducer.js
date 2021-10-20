import {toteShopAPI} from '../api/api';
import {setItemsCart} from './cartReduser';


const ADD_CARD = 'ADD_CARD';
const SEARCH = 'SEARCH';
const DISABLE = 'DISABLE';

const initialState = {
    items: [],
    search: '',
    isLoaded: true,
    disabled: false
};

export const card = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                items: action.payload,
                isLoaded: false,
            };
        case SEARCH:
            return {
                ...state,
                search: action.payload
            };
        case DISABLE:
            return {
                ...state,
                disabled: action.payload
            };
        default:
            return state;
    }
};


const setItemsCard = (data) => ({type: ADD_CARD, payload: data});
export const setSearch = (values) => ({type: SEARCH, payload: values});
export const setDisable = (values) => ({type: DISABLE, payload: values});

export const setContactItem = () => async (dispatch) => {
    try {
        const resCardItems = await toteShopAPI.getCardItems();
        dispatch(setItemsCard(resCardItems.data));
        const resCartItems = await toteShopAPI.getCartItems();
        dispatch(setItemsCart(resCartItems.data));
    } catch (error) {
        alert('Ошибка при иницилизации');
        console.error(error);
    }

};