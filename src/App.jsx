import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import {Header} from './components/Header';
import {About} from './pages/About';
import {Shop} from './pages/Shop';
import {Contact} from './pages/Contact';
import {Faq} from './pages/FAQ';
import {Drawer} from './components/Drawer';
import {useDispatch} from 'react-redux';
import {setContactItem} from './redux/cardReducer';



function App() {
    const dispatch = useDispatch();
    const [cartOpened, setCartOpened] = React.useState(false);


    React.useEffect(() => {
        dispatch(setContactItem());
    }, [])


    const onClickCart = () => {
        setCartOpened(!cartOpened);
    }


    return (
        <div className='app'>
            <Header clickOpenedCart={onClickCart}/>
            <Drawer opened={cartOpened} onClose={onClickCart}/>
                <Route path='/about' render={() => <About/>}/>
                <Route exact path='/' render={() => <Shop />}/>
                <Route path='/faq' render={() => <Faq/>}/>
                <Route path='/contact' render={() => <Contact/>}/>
        </div>
    );
}

export default App;

