import React from 'react';
import style from './Shop.module.scss';
import {Card} from '../../components/Card';
import {useDispatch} from 'react-redux';
import LoadingCard from '../../components/Card/LoadingCard';
import {setCartItem} from '../../redux/cart';


export const Shop = React.memo(({dataCard, dataCart, setDisabledBtn, disabledBtn}) => {


        const dispatch = useDispatch();


        const onCartItems = (obj) => {
            dispatch(setCartItem(obj));
        }
    const isAddCard = (id) => {
       return  dataCart.items.some((obj) => Number(obj.parentId) === Number(id))
    }

        const filtredItems = dataCard.items.filter((item) => item.title.toLowerCase().includes(dataCard.search.toLowerCase()))


        return (
            <div className={style.block}>
                {dataCard.search && <div className={style.search}><h2>Search by request: {dataCard.search} </h2></div>}
                <div className={style.cart}>
                    {
                        dataCard.isLoaded ? filtredItems.map(items => <Card isAddCard={isAddCard} key={items.id} onCartItems={onCartItems} {...items}/>)
                            : Array(12).fill(0).map((_, index) => <LoadingCard key={index}/>)
                    }
                </div>
            </div>

        )
    }
);