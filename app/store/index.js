import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import user from './user';

const middleware = applyMiddleware(thunkMiddleware, red);

const reducer = combineReducers({user});

const store = createStore(reducer, middleware);

export default store;

export * from './user';
