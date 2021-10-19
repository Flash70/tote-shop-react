import React from "react";
import style from './Card.module.scss';

export const Card = ({id, price, title, images, info, onCartItems, isAddCard, onRemoveCard, disabled}) => {

    const {small, large} = images;
    const obj = {title, price, small, large, info, parentId: id, amount: 1};

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
                    {!isAddCard(id) ? <button className={`${disabled && style.btn}`} disabled={disabled} onClick={onClickCart}>Add to Cart</button> : <button disabled={disabled} onClick={() => onRemoveCard(id)} className={`${style.itemCart} ${disabled && style.btn}`}>Item In Cart</button>}
                </div>
            </div>
        </div>
    )
};