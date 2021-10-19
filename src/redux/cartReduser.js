import {toteShopAPI} from '../api/api';
import {setDisable} from './cardReducer';


const ADD_CART = 'ADD_CART';

const initialState = {
    items: [],
    isLoaded: false,
};

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        default:
            return state;
    }
};


export const setItemsCart = (data) => ({type: ADD_CART, payload: data});

export const setCartItem = (obj) => async (dispatch) => {
    try {
        dispatch(setDisable(true));
        await toteShopAPI.setCartItems(obj);
        const resCart = await toteShopAPI.getCartItems();
        dispatch(setItemsCart(resCart.data));
        dispatch(setDisable(false));
    } catch (error) {
        alert('Ошибка при добавлении в корзину');
        console.error(error);
    }

};
export const delCartItem = (idCart) => async (dispatch) => {
    try {
        dispatch(setDisable(true));
        await toteShopAPI.delCartItems(idCart);
        const resCart = await toteShopAPI.getCartItems();
        dispatch(setItemsCart(resCart.data));
        dispatch(setDisable(false));
    } catch (error) {
        alert('Ошибка при удалении из корзины');
        console.error(error);
    }
};

