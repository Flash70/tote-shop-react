import React from "react";
import style from '../Drawer/Drawer.module.scss';




export const DrawerCard = ({small, title, price, id, onRemove}) => {

    const [amountItem, setAmountItem] = React.useState(1)

    const changeQuantity = (e) => {
        const value = e.target.value
        setAmountItem(value)
    }

    return (
        <div className={style.card}>
            <img src={small} alt=""/>
            <div className={style.title__block}>
                <h4>{title}</h4>
                <div>
                    <span>${price}</span>
                </div>
                <div>
                    <span>Amount <input className={style.amount} onChange={changeQuantity} value={amountItem} type='number' min='0' max='100'/></span>
                </div>
            </div>
            <svg onClick={() => onRemove(id)} version="1.1" id="cross-11" xmlns="http://www.w3.org/2000/svg" width="11px" height="11px"
                 viewBox="0 0 11 11">
                <path
                    d="M2.2,1.19l3.3,3.3L8.8,1.2C8.9314,1.0663,9.1127,0.9938,9.3,1C9.6761,1.0243,9.9757,1.3239,10,1.7&#xA;&#x9;c0.0018,0.1806-0.0705,0.3541-0.2,0.48L6.49,5.5L9.8,8.82C9.9295,8.9459,10.0018,9.1194,10,9.3C9.9757,9.6761,9.6761,9.9757,9.3,10&#xA;&#x9;c-0.1873,0.0062-0.3686-0.0663-0.5-0.2L5.5,6.51L2.21,9.8c-0.1314,0.1337-0.3127,0.2062-0.5,0.2C1.3265,9.98,1.02,9.6735,1,9.29&#xA;&#x9;C0.9982,9.1094,1.0705,8.9359,1.2,8.81L4.51,5.5L1.19,2.18C1.0641,2.0524,0.9955,1.8792,1,1.7C1.0243,1.3239,1.3239,1.0243,1.7,1&#xA;&#x9;C1.8858,0.9912,2.0669,1.06,2.2,1.19z"/>
            </svg>
        </div>
    )
};