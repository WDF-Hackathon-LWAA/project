import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import user from './reducers/user';

const middleware = applyMiddleware(thunkMiddleware);

const reducer = combineReducers({user});

const store = createStore(reducer, middleware);

export default store;

export * from './reducers/user';
