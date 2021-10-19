import style from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setSearch} from '../../redux/cardReducer';


export const Header = ({clickOpenedCart}) => {
    const values = useSelector(({card}) => card.search);
    const dispatch = useDispatch();

    const onSearch = (event) => {
        dispatch(setSearch(event.target.value))
    }
    return (
        <>
            <div className={style.header}>
                <div className={style.title}>
                    <h1>Tote</h1>
                    <h3>Funky Printed Bags</h3>
                </div>
                <div className={style.menu_block}>
                    <ul>
                        <li><NavLink exact to='/' activeClassName={style.activeLink}>Shop</NavLink></li>
                        <li><NavLink exact to='/about' activeClassName={style.activeLink}>About</NavLink></li>
                        <li><NavLink exact to='/faq' activeClassName={style.activeLink}>FAQ</NavLink></li>
                        <li><NavLink exact to='/contact' activeClassName={style.activeLink}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className={style.login}>
                    <img src='/img/search.svg' className={style.search} alt="search"/>
                    <input onChange={onSearch} value={values} placeholder='Search'/>
                   <div className={style.prifile}>
                       <img src="/img/icons8.svg" alt="profile"/>
                       <p>Log In</p>
                   </div>
                    <img src="/img/cart.svg" alt="cart" className={style.cart} onClick={clickOpenedCart}/>
                </div>
            </div>

        </>
    )
};
