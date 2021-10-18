import style from './Header.module.scss'
import cart from '../img/cart.svg'
import search from '../img/search.svg'
import login from '../img/icons8.svg'

export const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.title}>
                    <h1>Headphones</h1>
                    <h3>In Stock & Ready to Ship</h3>
                </div>
                <div className={style.menu_block}>
                    <ul>
                        <li>Shop</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={style.login}>
                    <img src={search} className={style.search} alt="rfgbn"/>
                    <input value='Search'/>
                    <img src={login} alt=""/>
                    <p>Log In</p>
                    <img src={cart} alt=""/>
                </div>
            </div>

        </>
    )

};

