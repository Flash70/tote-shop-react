import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {contactReducer} from './contactReducer';
import { reducer as formReducer } from 'redux-form';
import {card} from "./shopReducer";
import {cart} from "./cart";


const reducers = combineReducers({contactReducer, form: formReducer, card, cart});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

