import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({ userReducer });
const middleWares = applyMiddleware(thunk);
const configureStore = createStore(rootReducer, middleWares);

export default configureStore;