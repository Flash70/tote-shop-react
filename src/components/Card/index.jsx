import style from './Card.module.scss'

export const Card = (props) => {

    return (
        <div className={style.cart}>
            <div className={style.cart__image}>
                <img src={props.small} onMouseOver={(event => event.currentTarget.src = props.large)}
                     onMouseOut={(event => event.currentTarget.src = props.small)} alt="cart"/>
            </div>
            <div className={style.cart__price}>
                <h4>{props.title}</h4>
                <hr/>
                <h4>${props.price}</h4>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}