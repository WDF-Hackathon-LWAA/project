import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(thunkMiddleware, red);

const reducer = combineReducers({
  // photos,
  // searchTerm
});

const store = createStore(reducer, middleware);

export default store;

// export * from './photos';
// export * from './searchTerm';
