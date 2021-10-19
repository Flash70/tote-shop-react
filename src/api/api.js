import axios from 'axios';

export const toteShopAPI = {
    setContact: (value) => {
        return axios.post(`https://615eef1aaf36590017204685.mockapi.io/contact`, value);
    },
    getCardItems: () => {
        return axios.get('https://615eef1aaf36590017204685.mockapi.io/catalog');
    },
    setCartItems: (obj) => {
        return axios.post('https://615eef1aaf36590017204685.mockapi.io/cart', obj);
    },
    getCartItems: () => {
        return axios.get('https://615eef1aaf36590017204685.mockapi.io/cart');
    },
    delCartItems: (idCart) => {
        return axios.delete(`https://615eef1aaf36590017204685.mockapi.io/cart/${idCart}`);
    },
}