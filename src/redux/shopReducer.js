import {toteShopAPI} from '../api/api';
import {setItemsCart} from "./cart";


const ADD_CARD = 'ADD_CARD';
const SEARCH = 'SEARCH';

const initialState = {
    items: [],
    search: '',
    isLoaded: false,
}

export const card = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case SEARCH:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};


const setItemsCard = (data) => ({type: ADD_CARD, payload: data});
export const setSearch = (values) => ({type: SEARCH, payload: values});

export const setContactItem = () => (dispatch) => {
    toteShopAPI.getCardItems()
        .then(res => dispatch(setItemsCard(res.data)))
    toteShopAPI.getCartItems().then(res => dispatch(setItemsCart(res.data)))
}