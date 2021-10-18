import style from './Drawer.module.scss';
import {DrawerCard} from '../../components/DrawerCard';
import {useSelector} from 'react-redux';

export const Drawer = ({onClose, opened,onRemoveCart}) => {

    const cartItems = useSelector(({cart}) => cart);

    const subtotal = cartItems.items.reduce((sum, obj) => Number(obj.price) + Number(sum), 0)

    return (
        <div className={`${style.overlay} ${opened && style.overlayVisible}`}>
            <div className={style.drawer}>
                <div className={style.title}>
                    <svg onClick={onClose} version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
                         viewBox='0 0 407.436 407.436'>
                        <polygon
                            points='112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 '/>
                    </svg>
                    <h1>Cart</h1>
                </div>
                <div className={style.block__items}>
                    {cartItems.isLoaded ? cartItems.items.map(items => <DrawerCard key={items.id} onRemove={onRemoveCart} {...items} />) : <div>Loading</div>}
                </div>
                <div className={style.block__price}>
                        <h2>Subtotal:</h2>
                        <h2>$ {subtotal}</h2>
                    <hr/>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}