import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {contact} from './contactReducer';
import { reducer as formReducer } from 'redux-form';
import {card} from './cardReducer';
import {cart} from './cartReduser';


const reducers = combineReducers({contact, form: formReducer, card, cart});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

