import React from 'react';
import style from './Shop.module.scss';
import {Card} from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import LoadingCard from '../../components/Card/LoadingCard';
import {delCartItem, setCartItem} from '../../redux/cartReduser';


export const Shop = React.memo(() => {

        const dataCard = useSelector(({card}) => card);
        const dataCart = useSelector(({cart}) => cart);

        const dispatch = useDispatch();

        const onCartItems = (obj) => {
            dispatch(setCartItem(obj));
        };

        const onRemoveCard = (id) => {
            const idCartRemove = dataCart.items.find((cartObj) => Number(cartObj.parentId) === Number(id));
            dispatch(delCartItem(idCartRemove.id));
        };

        const isAddCard = (id) => {
            return dataCart.items.some((obj) => Number(obj.parentId) === Number(id));
        };


        const filtredItems = dataCard.items.filter((item) => item.title.toLowerCase().includes(dataCard.search.toLowerCase()));


        return (
            <div className={style.block}>
                {dataCard.search && <div className={style.search}><h2>Search by request: {dataCard.search} </h2></div>}
                <div className={style.cart}>
                    {
                        !dataCard.isLoaded ? filtredItems.map(items => <Card disabled={dataCard.disabled} onRemoveCard={onRemoveCard}
                                                                             isAddCard={isAddCard} key={items.id}
                                                                             onCartItems={onCartItems} {...items}/>)
                            : Array(12).fill(0).map((_, index) => <LoadingCard key={index}/>)
                    }
                </div>
            </div>

        );
    }
);