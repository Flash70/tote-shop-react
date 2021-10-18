import React from "react";
import style from './Card.module.scss';

export const Card = ({id, price, title, images, info, onCartItems, isAddCard}) => {

    const {small, large} = images;

    const obj = {title, price, small, large, info, parentId: id};

    const onClickCart = () => {
        onCartItems(obj)
    };


    return (
        <div className={style.cart}>
            <div className={style.cart__image}>
                <img src={small} onMouseOver={(event => event.currentTarget.src = large)}
                     onMouseOut={(event => event.currentTarget.src = small)} alt="cart"/>
            </div>
            <div className={style.cart__price}>
                <h4>{title}</h4>
                <hr/>
                <h4>${price}</h4>
                <div>
                    {!isAddCard(id) ? <button onClick={onClickCart}>Add to Cart</button> : <div className={style.itemCart}>Item In Cart</div>}
                </div>
            </div>
        </div>
    )
};