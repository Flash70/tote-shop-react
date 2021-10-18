import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import {Header} from './components/Header';
import {About} from './pages/About';
import {Shop} from './pages/Shop';
import {Contact} from './pages/Contact';
import {Faq} from './pages/FAQ';
import {Drawer} from './pages/Drawer';
import {useDispatch, useSelector} from 'react-redux';
import {setContactItem} from './redux/shopReducer';
import {delCartItem} from './redux/cart';


function App() {
    const dataCard = useSelector(({card}) => card);
    const dataCart = useSelector(({cart}) => cart);
    const dispatch = useDispatch();


    const [cartOpened, setCartOpened] = React.useState(false);


    React.useEffect(() => {
        dispatch(setContactItem());
    }, [])

    const onRemoveCart = (id) => {
        dispatch(delCartItem(id))
    }

    const onCloseCart = () => {
        setCartOpened(false);
    }


    return (
        <div className='app'>
            <Header clickOpenedCart={() => setCartOpened(true)}/>
            <Drawer opened={cartOpened} onRemoveCart={onRemoveCart} onClose={onCloseCart}/>
                <Route path='/about' render={() => <About/>}/>
                <Route exact path='/' render={() => <Shop dataCart={dataCart} dataCard={dataCard}/>}/>
                <Route path='/faq' render={() => <Faq/>}/>
                <Route path='/contact' render={() => <Contact/>}/>
        </div>
    );
}

export default App;

