// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import aidsReducer from './reducers/aidsReducer';

const rootReducer = combineReducers({
    aids: aidsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;